import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { firstName, lastName, email, message } = await req.json();

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const fullName = `${firstName} ${lastName}`;

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST, // smtp.gmail.com
      port: 465,
      secure: true, // true for port 465 (SSL)
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
    
    


    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to:  process.env.EMAIL_USER,
      subject: `New Inquiry from SST Pro Group`,
      text: `Name: ${fullName}\nEmail: ${email}\nMessage: ${message}`,
      html: `
        <div>
          <h2>New Inquiry Received</h2>
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong> ${message}</p>
          <hr />
          <p>Please follow up at the earliest to ensure a smooth onboarding experience.</p>
          <p>SST Pro  Group System Notification</p>
        </div>
      `,
    });

    // 2. Send thank-you email to user
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "We’ve Received Your Request",
      text: `Hi ${firstName}, thank you for contacting SST Pro Group.`,
      html: `
        <div>
          <p>Hi <strong>${firstName}</strong>,</p>
          <p>Thank you for reaching out to <strong>SST Pro</strong>.</p>
          <p>Your request has been received. One of our experts will connect with you shortly.</p>
          <br/>
          <p>Best regards,<br/>Team SST Pro</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json({ error: `Failed to send email: ${error.message}` }, { status: 500 });
  }
}
