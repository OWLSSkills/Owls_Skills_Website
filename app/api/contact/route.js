
import { NextResponse } from "next/server";

export const runtime = "nodejs";          

function sanitize(s) {
  return String(s || "").trim().slice(0, 5000);
}

function isEmail(s) {
  
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(s || "").trim());
}

export async function POST(req) {
  try {
    const body = await req.json().catch(() => ({}));
    const name    = sanitize(body.name);
    const email   = sanitize(body.email);
    const message = sanitize(body.message);
    const honey   = sanitize(body.honey);      

    if (honey) {
      
      return NextResponse.json({ success: true });
    }
    if (!name || !email || !message || !isEmail(email)) {
      return NextResponse.json(
        { success: false, error: "Please provide name, a valid email, and a message." },
        { status: 400 }
      );
    }

    const provider = (process.env.MAIL_PROVIDER || "gmail").toLowerCase();
    const sent = provider === "resend"
      ? await sendWithResend({ name, email, message })
      : await sendWithGmail({ name, email, message });

    if (!sent.ok) {
      return NextResponse.json({ success: false, error: sent.error || "Send failed" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("contact api error:", err);
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}

async function sendWithGmail({ name, email, message }) {
  try {
    const mod = await import("nodemailer");
    const nodemailer = mod.default ?? mod;
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_USER,      
        pass: process.env.GMAIL_APP_PASS,  
      },
    });

    const to = process.env.MAIL_TO || process.env.GMAIL_USER;
    const subject = `New website inquiry from ${name}`;
    const html = renderHtml({ name, email, message });

    await transporter.sendMail({
      from: `"Website Contact" <${process.env.GMAIL_USER}>`,
      to,
      subject,
      html,
      replyTo: email,
    });

    return { ok: true };
  } catch (e) {
    return { ok: false, error: e?.message || String(e) };
  }
}

/* ------------ Resend (optional) ------------ */
async function sendWithResend({ name, email, message }) {
  try {
    const { Resend } = await import("resend");
    const resend = new Resend(process.env.RESEND_API_KEY);

    const to = process.env.MAIL_TO || process.env.GMAIL_USER;
    const from = process.env.MAIL_FROM || "notifications@yourdomain.com"; 

    const subject = `New website inquiry from ${name}`;
    const html = renderHtml({ name, email, message });

    const resp = await resend.emails.send({
      from,
      to,
      subject,
      html,
      reply_to: email,
    });

    if (resp?.error) return { ok: false, error: String(resp.error?.message || resp.error) };
    return { ok: true };
  } catch (e) {
    return { ok: false, error: e?.message || String(e) };
  }
}

/* ------------ HTML email ------------ */
// In app/api/contact/route.js

function renderHtml({ name, email, message }) {
    // brand palette
    const GREEN_BG = "#276C4C";   // background_color_light_green
    const LIGHT_TX = "#D2DE9C";   // font_color_white / light_green_for_text
    const PURPLE   = "#7A5EA4";   // background_color_light_purple
    const LTPURP   = "#D1C2DA";   // hover state / soft border
    const DARK_TX  = "#122932";   // dark text on light surfaces
  
    return `
    <div style="
      font-family: system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;
      color: ${LIGHT_TX};
      background: ${GREEN_BG};
      padding: 20px;
      border: 1px solid ${LTPURP};
      border-radius: 12px;
    ">
      <h2 style="
        margin: 0 0 12px 0;
        color: ${PURPLE};
        font-weight: 800;
        letter-spacing: .3px;
      ">New website inquiry</h2>
  
      <!-- use a table for robust alignment across email clients -->
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0"
        style="border-collapse: separate; border-spacing: 0 8px; color: ${LIGHT_TX};">
        <tr>
          <td style="width: 120px; vertical-align: top; font-weight: 700; color: #fff;">Name:</td>
          <td style="vertical-align: top;">${escapeHtml(name)}</td>
        </tr>
        <tr>
          <td style="width: 120px; vertical-align: top; font-weight: 700; color: #fff;">Email:</td>
          <td style="vertical-align: top;">${escapeHtml(email)}</td>
        </tr>
      </table>
  
      <div style="margin-top: 12px; font-weight: 700; color: #fff;">Message</div>
      <div style="
        white-space: pre-wrap;
        background: ${LIGHT_TX};
        color: ${DARK_TX};
        border: 1px solid ${LTPURP};
        padding: 12px 14px;
        border-radius: 10px;
        margin-top: 6px;
      ">${escapeHtml(message)}</div>
    </div>`;
  }

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;")
    .replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}
