import { NextResponse } from 'next/server';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  subject: z.string().min(5),
  message: z.string().min(10),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = schema.parse(body);

    // Here you would typically integrate with your email service
    // For example, using SendGrid, Postmark, or similar
    
    // For now, we'll simulate a successful email send
    console.log('Email would be sent to:', 'info@neguslegal.com');
    console.log('From:', email);
    console.log('Subject:', subject);
    console.log('Message:', message);

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to send message' },
      { status: 500 }
    );
  }
}