const nodemailer = require('nodemailer');

const user = process.env.EMAIL_USERNAME || 'venkyy82@gmail.com';
const pass = process.env.EMAIL_PASSWORD || '9666285433@V';
const to = process.env.EMAIL_TO || 'venkyy82@gmail.com';

async function sendMail() {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user,
        pass
      }
    });

    const info = await transporter.sendMail({
      from: `"GitHub Action Notification" <${user}>`,
      to,
      subject: "GitHub Action Notification ✅",
      text: "This is a test email from your GitHub Action workflow!",
      html: "<b>This is a test email from your GitHub Action workflow!</b>"
    });

    console.log("✅ Email sent:", info.messageId);
  } catch (error) {
    console.error("❌ Failed to send email:", error);
    process.exit(1);
  }
}

sendMail();
