import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const sendEmail = async (to, subject, htmlContent) => {
  try {
    // 1️⃣ Create transporter for Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail
        pass: process.env.EMAIL_PASS, // Gmail App Password (not your normal password)
      },
    });

    // 2️⃣ Define email options
    const mailOptions = {
      from: `"Hotel Booking Support" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html: htmlContent,
    };

    // 3️⃣ Send email
    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent:", info.messageId);
    return info;
  } catch (error) {
    console.error("❌ Email sending failed:", error.message);
    throw new Error("Email sending failed: " + error.message);
  }
};

export default sendEmail;
