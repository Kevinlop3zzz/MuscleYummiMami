import { NextRequest, NextResponse } from "next/server";

// Paste your MODEL APPLICATIONS Google Apps Script URL here after setup
const GOOGLE_SHEET_URL =
  process.env.MODEL_SHEET_URL || "https://script.google.com/macros/s/AKfycbwyzPI1K3QzZ8Rd3uO1MQJIhyG2tHPUieB_2-i35HavmBui9huqlBlCsNVQ26Fq6AR4fQ/exec";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { source, email } = body;

    // Quick email from Announcement section — only email required
    if (source === "quick") {
      if (!email) {
        return NextResponse.json({ error: "Email is required." }, { status: 400 });
      }
    } else {
      // Full application — name + email required
      if (!body.name || !email) {
        return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
      }
    }

    if (GOOGLE_SHEET_URL === "PASTE_YOUR_MODEL_APPS_SCRIPT_URL_HERE") {
      return NextResponse.json({ error: "Model application sheet not configured yet." }, { status: 503 });
    }

    const res = await fetch(GOOGLE_SHEET_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(
        source === "quick"
          ? { source: "quick", email }
          : {
              source: "full",
              name: body.name || "",
              email,
              phone: body.phone || "",
              instagram: body.instagram || "",
              type: body.type || "",
              message: body.message || "",
            }
      ),
    });

    if (!res.ok) {
      console.error("Google Sheets error:", res.status, await res.text());
      return NextResponse.json({ error: "Could not save. Try again." }, { status: 500 });
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    console.error("Model apply error:", err);
    return NextResponse.json({ error: "Something went wrong. Try again." }, { status: 500 });
  }
}
