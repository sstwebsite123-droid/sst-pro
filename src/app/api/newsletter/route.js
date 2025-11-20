import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false, 
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: [process.env.EMAIL_USER, "help@sst.pro"],
      subject: "New Newsletter Subscriber",
      html: `
        <div>
          <h2>New Newsletter Subscription</h2>
          <p><strong>Email:</strong> ${email}</p>
          <hr />
          <p>SST Pro Group — Newsletter Signup</p>
        </div>
      `,
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "You're Subscribed!",
      html: `
        <div>
          <p>Hi,</p>
          <p>Thank you for subscribing to <strong>SST Pro Group</strong>.</p>
          <p>You’ll now receive updates directly to your inbox.</p>
          <br/>
          <p>Regards,<br/>Team SST Pro</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Subscription email error:", error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
