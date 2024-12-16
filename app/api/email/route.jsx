import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const formData = JSON.parse(req.body); // Parse the JSON data from the request body

      const { firstName, lastName, email, companyName, subject, message } = formData;

      // Sending an email using SendGrid
      await sendgrid.send({
        to: process.env.SENDGRID_SENDER_EMAIL, // Replace with your recipient email
        from: process.env.SENDGRID_SENDER_EMAIL, // Use a verified sender email
        subject: `Contact Form: ${subject || "No Subject"}`,
        html: `
          <div>
            <h3>New Contact Form Submission</h3>
            <p><strong>First Name:</strong> ${firstName}</p>
            <p><strong>Last Name:</strong> ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company Name:</strong> ${companyName}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          </div>
        `,
      });

      // Responding to the client with a success message
      res.status(200).json({ success: true, message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ success: false, message: "Failed to send email" });
    }
  } else {
    res.status(405).json({ success: false, message: "Method not allowed" });
  }
}
