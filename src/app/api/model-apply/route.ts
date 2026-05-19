import { NextRequest, NextResponse } from "next/server";

// Paste your MODEL APPLICATIONS Google Apps Script URL here after setup
const GOOGLE_SHEET_URL =
  process.env.MODEL_SHEET_URL || "PASTE_YOUR_MODEL_APPS_SCRIPT_URL_HERE";

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, instagram, type, message } = await req.json();

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
    }

    if (GOOGLE_SHEET_URL === "PASTE_YOUR_MODEL_APPS_SCRIPT_URL_HERE") {
      return NextResponse.json({ error: "Model application sheet not configured yet." }, { status: 503 });
    }

    const res = await fetch(GOOGLE_SHEET_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        phone: phone || "",
        instagram: instagram || "",
        type: type || "",
        message: message || "",
      }),
    });

    if (!res.ok) {
      console.error("Google Sheets error:", res.status, await res.text());
      return NextResponse.json({ error: "Could not save application. Try again." }, { status: 500 });
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    console.error("Model apply error:", err);
    return NextResponse.json({ error: "Something went wrong. Try again." }, { status: 500 });
  }
}
