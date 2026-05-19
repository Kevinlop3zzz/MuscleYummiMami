import { NextRequest, NextResponse } from "next/server";

const GOOGLE_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbx-bqMcqEW2UDcsBlWG6IeLGkjKTvtAU2Gg0W02PFS6voIHIi7RdbKwhCvfVRg1_wBtJw/exec";

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, interest } = await req.json();

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
    }

    const res = await fetch(GOOGLE_SHEET_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, phone: phone || "", interest: interest || "" }),
    });

    if (!res.ok) {
      console.error("Google Sheets error:", res.status, await res.text());
      return NextResponse.json({ error: "Could not save to sheet. Try again." }, { status: 500 });
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    console.error("Email signup error:", err);
    return NextResponse.json({ error: "Something went wrong. Try again." }, { status: 500 });
  }
}
