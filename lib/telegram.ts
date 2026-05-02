export async function notifyAdmin(
  templateTitle: string,
  email: string,
  amount: string
): Promise<void> {
  const response = await fetch(
    `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
    {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: process.env.TELEGRAM_ADMIN_CHAT_ID,
      text: `✅ Новая заявка!\nПрограмма: ${templateTitle}\nКонтакт: ${email}\nСумма: ${amount}`
    })
  }
  );

  if (!response.ok) {
    throw new Error("Telegram notify failed");
  }
}
