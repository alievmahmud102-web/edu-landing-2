import { Resend } from "resend";

export const resend = new Resend(process.env.RESEND_API_KEY!);

export async function sendDownloadEmail(
  to: string,
  templateTitle: string,
  downloadUrl: string
): Promise<void> {
  const html = `<div style="background:#ffffff;padding:24px;font-family:Arial,sans-serif;color:#111827;">
  <div style="max-width:600px;margin:0 auto;">
    <h1 style="font-size:24px;margin:0 0 16px;">Thank you for your enrollment!</h1>
    <p style="font-size:16px;line-height:1.5;margin:0 0 16px;">You selected: ${templateTitle}</p>
    <a href="${downloadUrl}" style="display:inline-block;background:#2563eb;color:#ffffff;text-decoration:none;padding:14px 22px;border-radius:8px;font-size:16px;font-weight:700;margin:8px 0 16px;">Open materials</a>
    <p style="font-size:12px;color:#6b7280;margin:0 0 14px;">This link is valid for 24 hours.</p>
    <p style="font-size:14px;margin:0 0 8px;">FluentKids English</p>
    <p style="font-size:13px;color:#4b5563;margin:0;">Questions? Email support@edutemplates.com</p>
  </div>
</div>`;

  const { error } = await resend.emails.send({
    from: "FluentKids English <noreply@edutemplates.com>",
    to: [to],
    subject: "Enrollment confirmation — FluentKids English",
    html
  });

  if (error) {
    throw error;
  }
}
