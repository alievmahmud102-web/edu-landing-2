import { NextResponse } from "next/server";

type Body = {
  name?: unknown;
  phone?: unknown;
  age?: unknown;
};

export async function POST(request: Request): Promise<NextResponse> {
  let json: Body;

  try {
    json = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = typeof json.name === "string" ? json.name.trim() : "";
  const phone = typeof json.phone === "string" ? json.phone.trim() : "";
  const ageRaw = json.age;
  const age =
    typeof ageRaw === "string"
      ? ageRaw.trim()
      : ageRaw != null
        ? String(ageRaw).trim()
        : "";

  if (!name || !phone || !age) {
    return NextResponse.json({ error: "Missing name, phone, or age" }, { status: 400 });
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_ADMIN_CHAT_ID;

  if (!token || !chatId) {
    return NextResponse.json({ error: "Server not configured" }, { status: 500 });
  }

  const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text: `New application (language courses)\nName: ${name}\nPhone: ${phone}\nChild's age: ${age}`
    })
  });

  if (!response.ok) {
    return NextResponse.json({ error: "Telegram notify failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
