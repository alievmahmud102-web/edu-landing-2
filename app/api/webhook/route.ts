import { templates } from "@/data/templates";

export const runtime = "nodejs";

export async function POST(request: Request): Promise<Response> {
  const body = await request.text();
  const signature = request.headers.get("stripe-signature");

  if (!signature) {
    return Response.json({ error: "Invalid signature" }, { status: 400 });
  }

  let event: Awaited<ReturnType<(typeof import("@/lib/stripe"))["stripe"]["webhooks"]["constructEvent"]>>;

  try {
    const { stripe } = await import("@/lib/stripe");
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch {
    return Response.json({ error: "Invalid signature" }, { status: 400 });
  }

  try {
    if (event.type === "checkout.session.completed") {
      const session = event.data.object;

      const orderId = session.metadata?.order_id;
      const templateSlug = session.metadata?.template_slug;
      const customerEmail = session.customer_email;

      if (!orderId || !templateSlug || !customerEmail) {
        throw new Error("Missing session metadata");
      }

      const template = templates.find((item) => item.slug === templateSlug);

      if (!template) {
        throw new Error("Template not found");
      }

      const [{ updateOrderStatus }, { supabaseAdmin }, { sendDownloadEmail }, { notifyAdmin }] =
        await Promise.all([
          import("@/lib/orders"),
          import("@/lib/supabase"),
          import("@/lib/resend"),
          import("@/lib/telegram")
        ]);

      await updateOrderStatus(orderId, "paid");

      const { data, error } = await supabaseAdmin.storage
        .from("templates")
        .createSignedUrl(`${templateSlug}.zip`, 86400);

      if (error || !data?.signedUrl) {
        throw new Error("Failed to generate download URL");
      }

      await sendDownloadEmail(customerEmail, template.title, data.signedUrl);
      await notifyAdmin(template.title, customerEmail, `$${template.price / 100}`);
    }

    return Response.json({ received: true }, { status: 200 });
  } catch {
    return Response.json({ error: "Webhook handler failed" }, { status: 500 });
  }
}
