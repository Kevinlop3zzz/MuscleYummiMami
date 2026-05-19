import { NextRequest, NextResponse } from "next/server";

const GOOGLE_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbzjYU3bh8xQFS8qkRZjLGYYmElB7SRJf5mxRbFlhZlgRhX1Qz9CW_3v6wailmoLWQSjLQ/exec";

// Google Apps Script processes the POST body before issuing a 302 redirect.
// The data is already saved by the time the redirect fires, so we just follow
// it as a plain GET — exactly what browsers and PowerShell do automatically.
async function postToScript(url: string, body: object): Promise<Response> {
  return fetch(url, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(body),
    redirect: "follow",
    signal: AbortSignal.timeout(10000),
  });
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
    console.log("[love-letter] Apps Script raw response:", text.slice(0, 300));

    if (text.trim().startsWith("<")) {
      console.error("[love-letter] Got HTML back — Apps Script permissions wrong. Open the script, go to Deploy → Manage Deployments, set access to 'Anyone'.");
      return NextResponse.json({ error: "Google Sheets connection failed — check Apps Script deployment." }, { status: 500 });
    }

    let data;
    try {
      data = JSON.parse(text);
    } catch {
      console.error("[love-letter] Could not parse response:", text.slice(0, 200));
      return NextResponse.json({ error: "Could not send. Try again." }, { status: 500 });
    }

    if (data.success === false) {
      console.error("[love-letter] Apps Script returned error:", data.error || text);
      return NextResponse.json({ error: data.error || "Could not send. Try again." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Love letter error:", err);
    return NextResponse.json({ error: "Something went wrong. Try again." }, { status: 500 });
  }
}
