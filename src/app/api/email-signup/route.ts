import { NextRequest, NextResponse } from "next/server";

const GOOGLE_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbx-bqMcqEW2UDcsBlWG6IeLGkjKTvtAU2Gg0W02PFS6voIHIi7RdbKwhCvfVRg1_wBtJw/exec";

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
    const { name, email, phone, interest } = await req.json();

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
    }

    const res = await postToScript(GOOGLE_SHEET_URL, {
      name, email, phone: phone || "", interest: interest || ""
    });

    const text = await res.text();
    console.log("[email-signup] Apps Script raw response:", text.slice(0, 300));

    // If the response starts with '<', Google redirected to a login page instead
    // of running the script. This means the Apps Script is NOT deployed with
    // "Execute as: Me" + "Who has access: Anyone". Fix in Apps Script → Deploy.
    if (text.trim().startsWith("<")) {
      console.error("[email-signup] Got HTML back — Apps Script permissions wrong. Open the script, go to Deploy → Manage Deployments, set access to 'Anyone'.");
      return NextResponse.json({ error: "Google Sheets connection failed — check Apps Script deployment." }, { status: 500 });
    }

    let data;
    try { data = JSON.parse(text); } catch {
      console.error("[email-signup] Could not parse response:", text.slice(0, 200));
      return NextResponse.json({ error: "Could not save. Try again." }, { status: 500 });
    }

    if (data.success === false) {
      console.error("[email-signup] Apps Script returned error:", data.error);
      return NextResponse.json({ error: data.error || "Could not save. Try again." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email signup error:", err);
    return NextResponse.json({ error: "Something went wrong. Try again." }, { status: 500 });
  }
}
