import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    const data = await resend.emails.send({
      from: 'onboarding@resend.dev', // আপনার ডোমেইন ভেরিফাইড থাকলে এখানে তা দিবেন
      to: 'tanjirshanto56@gmail.com', // আপনার নিজের ইমেইল ঠিকানা
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