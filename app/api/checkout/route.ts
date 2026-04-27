import { templates } from "@/data/templates";

type CheckoutBody = {
  templateSlug: string;
  email: string;
};

function isCheckoutBody(value: unknown): value is CheckoutBody {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  const body = value as Record<string, unknown>;
  return (
    typeof body.templateSlug === "string" && typeof body.email === "string"
  );
}

export async function POST(request: Request): Promise<Response> {
  try {
    const payload: unknown = await request.json();

    if (!isCheckoutBody(payload)) {
      return Response.json(
        { error: "templateSlug and email are required" },
        { status: 400 }
      );
    }

    const { templateSlug, email } = payload;

    if (!templateSlug || !email) {
      return Response.json(
        { error: "templateSlug and email are required" },
        { status: 400 }
      );
    }

    const template = templates.find((item) => item.slug === templateSlug);

    if (!template) {
      return Response.json({ error: "Template not found" }, { status: 404 });
    }

    const orderId = crypto.randomUUID();

    const [{ createOrder }, { stripe }] = await Promise.all([
      import("@/lib/orders"),
      import("@/lib/stripe")
    ]);

    await createOrder({
      order_id: orderId,
      email,
      template_slug: templateSlug,
      status: "pending"
    });

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      customer_email: email,
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: template.title
            },
            unit_amount: template.price
          },
          quantity: 1
        }
      ],
      metadata: {
        order_id: orderId,
        template_slug: templateSlug
      },
      success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/templates/${templateSlug}`
    });

    return Response.json({ url: session.url }, { status: 200 });
  } catch {
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
