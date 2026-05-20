import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req) {
  // কনস্ট্রাক্টরকে উপরে না রেখে ফাংশনের ভেতর আনলাম, এতে বিল্ডের সময় এরর হবে না
  const apiKey = process.env.RESEND_API_KEY;
  
  if (!apiKey) {
    return NextResponse.json({ success: false, error: "API Key not configured" }, { status: 500 });
  }

  const resend = new Resend(apiKey);

  try {
    const { name, email, message } = await req.json();

    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'tanjirshanto56@gmail.com',
      subject: `New Message from ${name}`,
      text: message,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}