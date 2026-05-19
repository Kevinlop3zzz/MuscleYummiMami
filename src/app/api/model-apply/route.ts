import { NextRequest, NextResponse } from "next/server";

const GOOGLE_SHEET_URL =
  process.env.MODEL_SHEET_URL || "https://script.google.com/macros/s/AKfycbxWcPCCuiHc5qg5OlJhL__CnoD6YAPomxGn3z_U8vZhTEy86wclc3YyTBtDsCjUAI_XaQ/exec";

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
    const { source, email } = body;

    if (source === "quick") {
      if (!email) {
        return NextResponse.json({ error: "Email is required." }, { status: 400 });
      }
    } else {
      if (!body.name || !email) {
        return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
      }
    }

    const res = await postToScript(
      GOOGLE_SHEET_URL,
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
    );

    const text = await res.text();
    console.log("[model-apply] Apps Script raw response:", text.slice(0, 300));

    if (text.trim().startsWith("<")) {
      console.error("[model-apply] Got HTML back — Apps Script permissions wrong. Open the script, go to Deploy → Manage Deployments, set access to 'Anyone'.");
      return NextResponse.json({ error: "Google Sheets connection failed — check Apps Script deployment." }, { status: 500 });
    }

    let data;
    try {
      data = JSON.parse(text);
    } catch {
      console.error("[model-apply] Could not parse response:", text.slice(0, 200));
      return NextResponse.json({ error: "Could not save. Try again." }, { status: 500 });
    }

    if (data.success === false) {
      console.error("[model-apply] Apps Script returned error:", data.error || text);
      return NextResponse.json({ error: data.error || "Could not save. Try again." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Model apply error:", err);
    return NextResponse.json({ error: "Something went wrong. Try again." }, { status: 500 });
  }
}
