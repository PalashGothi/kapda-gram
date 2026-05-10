import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields.' },
        { status: 400 }
      );
    }

    // Since there is no database, you would typically integrate a third-party service 
    // here to send an email, such as Resend, Formspree, or SendGrid.
    // For now, we simply mock a successful submission.
    
    console.log("New Inquiry Received:", { name, email, message });

    return NextResponse.json(
      { success: true, message: "Inquiry received successfully." },
      { status: 201 }
    );
  } catch (error) {
    console.error('Inquiry submission error:', error);
    return NextResponse.json(
      { error: 'An error occurred while submitting your inquiry.' },
      { status: 500 }
    );
  }
}
