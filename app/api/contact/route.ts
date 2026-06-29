import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const recipient = process.env.CONTACT_EMAIL || process.env.SMTP_USER;

    if (!recipient) {
      return NextResponse.json(
        { error: "Recipient email not configured." },
        { status: 500 }
      );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message);

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      replyTo: email,
      to: recipient,
      subject: `[Portfolio] ${safeSubject}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0f; color: #f0f0f5; padding: 32px; border-radius: 12px;">
          <h2 style="color: #00d4ff; margin: 0 0 24px;">New Contact Message</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #a0a0b0; width: 80px;">Name</td>
              <td style="padding: 8px 0; color: #f0f0f5;">${safeName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #a0a0b0;">Email</td>
              <td style="padding: 8px 0; color: #f0f0f5;"><a href="mailto:${safeEmail}" style="color: #00d4ff;">${safeEmail}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #a0a0b0;">Subject</td>
              <td style="padding: 8px 0; color: #f0f0f5;">${safeSubject}</td>
            </tr>
          </table>
          <hr style="border: none; border-top: 1px solid rgba(255,255,255,0.08); margin: 24px 0;" />
          <h3 style="color: #00d4ff; margin: 0 0 12px;">Message</h3>
          <p style="color: #f0f0f5; line-height: 1.6; margin: 0; white-space: pre-wrap;">${safeMessage}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
