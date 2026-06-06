const { Resend } = require("resend");

// Initialize Resend using an environment variable securely hosted in Netlify
const resend = new Resend(process.env.RESEND_API_KEY);

exports.handler = async (event, context) => {
  // Handle CORS preflight options check
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
      },
    };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method Not Allowed" }),
    };
  }

  try {
    const { name, email, message } = JSON.parse(event.body);

    // Basic server-side validation
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "All form inputs are strictly required." }),
      };
    }

    // Deliver email via Resend
    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // Replace with your domain once verified on Resend
      to: "khinhninhtet447@gmail.com",                  // Your personal landing email address
      subject: `📩 New Portfolio Message from ${name}`,
      replyTo: email, 
      html: `
        <div style="font-family: sans-serif; padding: 24px; color: #1e293b; background-color: #f8fafc; border-radius: 12px;">
          <h2 style="color: #0f172a; margin-bottom: 4px;">New Contact Message</h2>
          <p style="color: #64748b; font-size: 14px; margin-top: 0;">Sent from your online portfolio landing layout.</p>
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
          <p><strong>Sender Name:</strong> ${name}</p>
          <p><strong>Sender Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <div style="margin-top: 24px; padding: 16px; background-color: #ffffff; border-left: 4px solid #f43f5e; border-radius: 4px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
            <p style="margin-0; font-style: italic; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    });

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ success: true, data }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ error: error.message }),
    };
  }
};