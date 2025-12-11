import crypto from "crypto";
import bcrypt from "bcryptjs";
import User from "../models/UserModel.js";
import sendEmail from "../utils/sendEmail.js";


export const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found." });

    
    const resetToken = crypto.randomBytes(32).toString("hex");

    
    user.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");
    user.resetPasswordExpire = Date.now() + 10 * 60 * 1000; // 10 mins

    
    await user.save({ validateBeforeSave: false });

    
    const message = `
      <h2>Password Reset</h2>
      <p>Use this token to reset your password:</p>
      <p style="font-weight:bold; color:#1a73e8;">${resetToken}</p>
      <p>This token is valid for 10 minutes only.</p>
    `;
    await sendEmail(user.email, "Your Password Reset Token", message);

    res.json({ success: true, message: "Reset token sent! Check your email." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error sending email", error: error.message });
  }
};


export const resetPassword = async (req, res) => {
  try {
    const { token, password } = req.body;

    if (!token || !password) {
      return res.status(400).json({ message: "Token and password are required." });
    }

    
    const resetPasswordToken = crypto.createHash("sha256").update(token).digest("hex");

    const user = await User.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() },
    });

    if (!user) return res.status(400).json({ message: "Invalid or expired reset token." });

    
    user.password = await bcrypt.hash(password, 10);
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    res.json({ success: true, message: "Password has been reset successfully! You can now log in." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error resetting password", error: error.message });
  }
};
