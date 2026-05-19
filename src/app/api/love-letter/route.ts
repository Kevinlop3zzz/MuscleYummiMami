import { NextRequest, NextResponse } from "next/server";

const GOOGLE_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbyTJaN8IkFgfAZ5H3ljYCwzOYX1tNUHAD7VwcO5j-TBtJmdYnYniHY3TMn-Ipx8dMjZFg/exec";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, role, letter, photo, photoType, photoName } = body;

    if (!letter) {
      return NextResponse.json({ error: "Please write us something 💛" }, { status: 400 });
    }

    const res = await fetch(GOOGLE_SHEET_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name || "",
        email: email || "",
        role: role || "",
        letter,
        photo: photo || "",
        photoType: photoType || "",
        photoName: photoName || "",
      }),
    });

    const text = await res.text();
    console.log("Apps Script response:", text);

    let data;
    try {
      data = JSON.parse(text);
    } catch {
      console.error("Could not parse Apps Script response:", text);
      return NextResponse.json({ error: "Could not send. Try again." }, { status: 500 });
    }

    if (!res.ok || data.success === false) {
      console.error("Apps Script error:", data.error || text);
      return NextResponse.json({ error: data.error || "Could not send. Try again." }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (err) {
    console.error("Love letter error:", err);
    return NextResponse.json({ error: "Something went wrong. Try again." }, { status: 500 });
  }
}
