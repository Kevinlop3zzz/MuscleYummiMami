import { NextRequest, NextResponse } from "next/server";

const GOOGLE_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbzjYU3bh8xQFS8qkRZjLGYYmElB7SRJf5mxRbFlhZlgRhX1Qz9CW_3v6wailmoLWQSjLQ/exec";

// Google Apps Script returns a 302 redirect — Node.js fetch changes POST to GET on 302,
// dropping the body. This helper manually follows the redirect keeping the POST body intact.
async function postToScript(url: string, body: object): Promise<Response> {
  const options: RequestInit = {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(body),
    redirect: "manual",
  };
  const res = await fetch(url, options);
  if (res.status >= 300 && res.status < 400) {
    const location = res.headers.get("location");
    if (location) return fetch(location, options);
  }
  return res;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, role, letter, photo, photoType, photoName } = body;

    if (!letter) {
      return NextResponse.json({ error: "Please write us something 💛" }, { status: 400 });
    }

    const res = await postToScript(GOOGLE_SHEET_URL, {
      name: name || "",
      email: email || "",
      role: role || "",
      letter,
      photo: photo || "",
      photoType: photoType || "",
      photoName: photoName || "",
    });

    const text = await res.text();
    console.log("Love letter Apps Script response:", text);

    let data;
    try {
      data = JSON.parse(text);
    } catch {
      console.error("Could not parse Apps Script response:", text);
      return NextResponse.json({ error: "Could not send. Try again." }, { status: 500 });
    }

    if (data.success === false) {
      console.error("Apps Script error:", data.error || text);
      return NextResponse.json({ error: data.error || "Could not send. Try again." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Love letter error:", err);
    return NextResponse.json({ error: "Something went wrong. Try again." }, { status: 500 });
  }
}
