// index.js
const nodemailer = require('nodemailer');

async function sendMail() {
  const {
    EMAIL_USERNAME,
    EMAIL_PASSWORD,
    EMAIL_TO,
    GITHUB_REPOSITORY,
    GITHUB_WORKFLOW,
    GITHUB_RUN_ID,
    GITHUB_JOB,
    GITHUB_SHA
  } = process.env;

  const transporter = nodemailer.createTransport({
    service: 'gmail', // or any SMTP-compatible provider
    auth: {
      user: venkyy82@gmail.com,
      pass: 9666285433@V
    }
  });

  const mailOptions = {
    from: `"GitHub Notifier" <${EMAIL_USERNAME}>`,
    to: EMAIL_TO,
    subject: `🔔 GitHub Workflow Notification: ${GITHUB_REPOSITORY}`,
    text: `
✅ Workflow: ${GITHUB_WORKFLOW}
🧱 Job: ${GITHUB_JOB}
🔁 Run ID: ${GITHUB_RUN_ID}
🔗 Commit: ${GITHUB_SHA}
📅 Repo: ${GITHUB_REPOSITORY}

This email was sent automatically from your GitHub Action!
`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(`✅ Email sent: ${info.response}`);
  } catch (error) {
    console.error(`❌ Failed to send email:`, error);
    process.exit(1);
  }
}

sendMail();
