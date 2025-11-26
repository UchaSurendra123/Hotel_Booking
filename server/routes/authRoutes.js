// // import express from "express";
// // import bcrypt from "bcryptjs";
// // import jwt from "jsonwebtoken";
// // import crypto from "crypto";
// // import { OAuth2Client } from "google-auth-library";
// // import User from "../models/UserModel.js";
// // import sendEmail from "../utils/sendEmail.js"; // ✅ make sure this file exists

// // const router = express.Router();
// // const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// // // ✅ REGISTER USER
// // router.post("/register", async (req, res) => {
// //   try {
// //     const { name, email, phone, country, username, password } = req.body;

// //     if (!name || !email || !username || !password) {
// //       return res.status(400).json({ message: "All required fields must be filled!" });
// //     }

// //     const existingUser = await User.findOne({ email });
// //     if (existingUser)
// //       return res.status(400).json({ message: "Email already registered" });

// //     const hashedPassword = await bcrypt.hash(password, 10);

// //     const user = await User.create({
// //       name,
// //       email,
// //       phone,
// //       country,
// //       username,
// //       password: hashedPassword,
// //     });

// //     res.status(201).json({ success: true, message: "User registered successfully", user });
// //   } catch (error) {
// //     res.status(500).json({ success: false, message: "Server error", error: error.message });
// //   }
// // });

// // // ✅ LOGIN USER (USERNAME + PASSWORD)
// // router.post("/login", async (req, res) => {
// //   try {
// //     const { username, password } = req.body;

// //     if (!username || !password)
// //       return res.status(400).json({ message: "Username and password required" });

// //     // 🔍 Check user
// //     const user = await User.findOne({ username });
// //     if (!user) {
// //       return res.status(404).json({
// //         message: "Please complete your registration first!",
// //       });
// //     }

// //     // 🔍 Check password
// //     const isMatch = await bcrypt.compare(password, user.password || "");
// //     if (!isMatch) {
// //       return res.status(401).json({ message: "Invalid credentials" });
// //     }

// //     // ✅ Generate JWT token
// //     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
// //       expiresIn: "1d",
// //     });

// //     res.status(200).json({
// //       success: true,
// //       message: "Login successful",
// //       token,
// //       user: { id: user._id, username: user.username, email: user.email },
// //     });
// //   } catch (error) {
// //     res.status(500).json({ success: false, message: "Server error", error: error.message });
// //   }
// // });

// // // ✅ GOOGLE LOGIN
// // router.post("/google-login", async (req, res) => {
// //   try {
// //     const { token } = req.body;

// //     const ticket = await client.verifyIdToken({
// //       idToken: token,
// //       audience: process.env.GOOGLE_CLIENT_ID,
// //     });

// //     const payload = ticket.getPayload();
// //     const { name, email, picture } = payload;

// //     let user = await User.findOne({ email });

// //     if (!user) {
// //       user = await User.create({
// //         name,
// //         email,
// //         username: email.split("@")[0],
// //         password: null,
// //         phone: null,
// //         country: null,
// //         picture,
// //         authType: "google",
// //       });
// //     }

// //     const jwtToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
// //       expiresIn: "7d",
// //     });

// //     res.status(200).json({
// //       success: true,
// //       message: "Google login successful",
// //       token: jwtToken,
// //       user: {
// //         id: user._id,
// //         name: user.name,
// //         email: user.email,
// //         picture: user.picture,
// //       },
// //     });
// //   } catch (error) {
// //     console.error("❌ Google login error:", error);
// //     res.status(400).json({ success: false, message: "Invalid Google login", error: error.message });
// //   }
// // });


// // // ✅ FORGOT PASSWORD
// // router.post("/forgot-password", async (req, res) => {
// //   try {
// //     const { email } = req.body;
// //     const user = await User.findOne({ email });

// //     if (!user) {
// //       return res.status(404).json({ message: "User not found with this email." });
// //     }

// //     const resetToken = crypto.randomBytes(32).toString("hex");
// //     const resetUrl = `${process.env.FRONTEND_URL}/reset-password/${resetToken}`;

// //     user.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");
// //     user.resetPasswordExpire = Date.now() + 10 * 60 * 1000;
// //     await user.save();

// //     const message = `
// //       <h3>Password Reset Request</h3>
// //       <p>Click below to reset your password:</p>
// //       <a href="${resetUrl}" target="_blank">${resetUrl}</a>
// //       <p>This link expires in 10 minutes.</p>
// //     `;

// //     await sendEmail(user.email, "Password Reset Request", message);

// //     res.json({ message: "Password reset email sent successfully!" });
// //   } catch (error) {
// //     res.status(500).json({ message: "Error sending email", error: error.message });
// //   }
// // });

// // // ✅ RESET PASSWORD
// // router.post("/reset-password/:token", async (req, res) => {
// //   try {
// //     const resetPasswordToken = crypto
// //       .createHash("sha256")
// //       .update(req.params.token)
// //       .digest("hex");

// //     const user = await User.findOne({
// //       resetPasswordToken,
// //       resetPasswordExpire: { $gt: Date.now() },
// //     });

// //     if (!user) {
// //       return res.status(400).json({ message: "Invalid or expired token." });
// //     }

// //     const { password } = req.body;
// //     user.password = await bcrypt.hash(password, 10);
// //     user.resetPasswordToken = undefined;
// //     user.resetPasswordExpire = undefined;

// //     await user.save();

// //     res.json({ message: "Password reset successful!" });
// //   } catch (error) {
// //     res.status(500).json({ message: "Error resetting password", error: error.message });
// //   }
// // });

// // export default router;




























// import express from "express";
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";
// import crypto from "crypto";
// import { OAuth2Client } from "google-auth-library";
// import User from "../models/UserModel.js";
// import sendEmail from "../utils/sendEmail.js";

// const router = express.Router();
// const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// /* -------------------------------------------------------
//    ✅ REGISTER USER
// ------------------------------------------------------- */
// router.post("/register", async (req, res) => {
//   try {
//     const { username, password, name, email, phone, country } = req.body;

//     console.log("Register req.body:", req.body);

//     if (!username || !password) {
//       return res.status(400).json({
//         success: false,
//         message: "Username and password are required",
//       });
//     }

//     // Check username / email exists
//     const existing = await User.findOne({
//       $or: [{ username }, { email }],
//     });

//     if (existing) {
//       return res.status(400).json({
//         success: false,
//         message: "Username or email already exists",
//       });
//     }

//     // Hash password
//     const hashed = await bcrypt.hash(password, 10);

//     const newUser = await User.create({
//       username,
//       password: hashed,
//       name: name || "",
//       email: email || "",
//       phone: phone || "",
//       country: country || "",
//     });

//     console.log("User saved:", newUser);

//     res.status(201).json({
//       success: true,
//       message: "User registered successfully",
//       user: { id: newUser._id, username: newUser.username },
//     });
//   } catch (err) {
//     console.error("Register Error:", err);
//     res.status(500).json({ success: false, message: "Server error" });
//   }
// });

// /* -------------------------------------------------------
//    ✅ LOGIN USER
// ------------------------------------------------------- */
// router.post("/login", async (req, res) => {
//   try {
//     let { username, password } = req.body;

//     if (!username || !password) {
//       return res.status(400).json({
//         success: false,
//         message: "Username and password required",
//       });
//     }

//     username = username.trim();
//     password = password.trim();

//     const user = await User.findOne({ username });

//     if (!user) {
//       return res.status(404).json({
//         success: false,
//         message: "User not found. Please register first.",
//       });
//     }

//     console.log("Login req.body:", { username, password });
//     console.log("Found user:", user);

//     const isMatch = await bcrypt.compare(password, user.password);

//     console.log("Password match:", isMatch);

//     if (!isMatch) {
//       return res.status(401).json({
//         success: false,
//         message: "Invalid username or password",
//       });
//     }

//     const token = jwt.sign(
//       { id: user._id },
//       process.env.JWT_SECRET || "secret",
//       { expiresIn: "1d" }
//     );

//     res.json({
//       success: true,
//       message: "Login successful",
//       token,
//       user: {
//         id: user._id,
//         username: user.username,
//         name: user.name,
//         email: user.email,
//       },
//     });
//   } catch (error) {
//     console.error("Login Error:", error);
//     res.status(500).json({
//       success: false,
//       message: "Server error",
//       error: error.message,
//     });
//   }
// });

// /* -------------------------------------------------------
//    ✅ GOOGLE LOGIN
// ------------------------------------------------------- */
// router.post("/google-login", async (req, res) => {
//   try {
//     const { token } = req.body;

//     const ticket = await client.verifyIdToken({
//       idToken: token,
//       audience: process.env.GOOGLE_CLIENT_ID,
//     });

//     const payload = ticket.getPayload();
//     const { name, email, picture } = payload;

//     let user = await User.findOne({ email });

//     if (!user) {
//       user = await User.create({
//         name,
//         email,
//         username: email.split("@")[0],
//         password: null,
//         picture,
//         authType: "google",
//       });
//     }

//     const jwtToken = jwt.sign(
//       { id: user._id },
//       process.env.JWT_SECRET || "secret",
//       { expiresIn: "7d" }
//     );

//     res.status(200).json({
//       success: true,
//       message: "Google login successful",
//       token: jwtToken,
//       user: {
//         id: user._id,
//         name: user.name,
//         email: user.email,
//         picture: user.picture,
//       },
//     });
//   } catch (error) {
//     console.error("Google login error:", error);
//     res.status(400).json({
//       success: false,
//       message: "Invalid Google login",
//       error: error.message,
//     });
//   }
// });

// /* -------------------------------------------------------
//    ✅ FORGOT PASSWORD
// ------------------------------------------------------- */
// router.post("/forgot-password", async (req, res) => {
//   try {
//     const { email } = req.body;
//     const user = await User.findOne({ email });

//     if (!user)
//       return res.status(404).json({
//         success: false,
//         message: "User not found with this email",
//       });

//     const resetToken = crypto.randomBytes(32).toString("hex");

//     const resetUrl = `${process.env.FRONTEND_URL}/reset-password/${resetToken}`;

//     user.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");
//     user.resetPasswordExpire = Date.now() + 10 * 60 * 1000;
//     await user.save();

//     const msg = `
//       <h3>Password Reset</h3>
//       <p>Click to reset your password:</p>
//       <a href="${resetUrl}">${resetUrl}</a>
//     `;

//     await sendEmail(user.email, "Reset Password", msg);

//     res.json({ success: true, message: "Reset email sent" });
//   } catch (error) {
//     console.error("Forgot error:", error);
//     res.status(500).json({ success: false });
//   }
// });

// /* -------------------------------------------------------
//    ✅ RESET PASSWORD
// ------------------------------------------------------- */
// router.post("/reset-password/:token", async (req, res) => {
//   try {
//     const hash = crypto.createHash("sha256").update(req.params.token).digest("hex");

//     const user = await User.findOne({
//       resetPasswordToken: hash,
//       resetPasswordExpire: { $gt: Date.now() },
//     });

//     if (!user)
//       return res.status(400).json({
//         success: false,
//         message: "Invalid or expired token",
//       });

//     user.password = await bcrypt.hash(req.body.password, 10);
//     user.resetPasswordToken = undefined;
//     user.resetPasswordExpire = undefined;

//     await user.save();

//     res.json({
//       success: true,
//       message: "Password reset successful",
//     });
//   } catch (error) {
//     console.error("Reset error:", error);
//     res.status(500).json({ success: false });
//   }
// });

// export default router;

import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import { OAuth2Client } from "google-auth-library";
import User from "../models/UserModel.js";
import sendEmail from "../utils/sendEmail.js";

const router = express.Router();
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

/* -------------------------------------------------------
   ✅ REGISTER USER
------------------------------------------------------- */
router.post("/register", async (req, res) => {
  try {
    const { username, password, name, email, phone, country } = req.body;

    console.log("Register req.body:", req.body);

    if (!username || !password) {
      return res.status(400).json({
        success: false,
        message: "Username and password are required",
      });
    }

    // Check username / email exists
    const existing = await User.findOne({
      $or: [{ username }, { email }],
    });

    if (existing) {
      return res.status(400).json({
        success: false,
        message: "Username or email already exists",
      });
    }

    // Hash password
    const hashed = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      username,
      password: hashed,
      name: name || "",
      email: email || "",
      phone: phone || "",
      country: country || "",
    });

    console.log("User saved:", newUser);

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: { id: newUser._id, username: newUser.username },
    });
  } catch (err) {
    console.error("Register Error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

/* -------------------------------------------------------
   ✅ LOGIN USER
------------------------------------------------------- */
router.post("/login", async (req, res) => {
  try {
    let { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        success: false,
        message: "Username and password required",
      });
    }

    username = username.trim();
    password = password.trim();

    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found. Please register first.",
      });
    }

    console.log("Login req.body:", { username, password });
    console.log("Found user:", user);

    const isMatch = await bcrypt.compare(password, user.password);

    console.log("Password match:", isMatch);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid username or password",
      });
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET || "secret",
      { expiresIn: "1d" }
    );

    res.json({
      success: true,
      message: "Login successful",
      token,
      user: {
        id: user._id,
        username: user.username,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
});

/* -------------------------------------------------------
   ✅ GOOGLE LOGIN
------------------------------------------------------- */
router.post("/google-login", async (req, res) => {
  try {
    const { token } = req.body;

    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    const { name, email, picture } = payload;

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({
        name,
        email,
        username: email.split("@")[0],
        password: null,
        picture,
        authType: "google",
      });
    }

    const jwtToken = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET || "secret",
      { expiresIn: "7d" }
    );

    res.status(200).json({
      success: true,
      message: "Google login successful",
      token: jwtToken,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        picture: user.picture,
      },
    });
  } catch (error) {
    console.error("Google login error:", error);
    res.status(400).json({
      success: false,
      message: "Invalid Google login",
      error: error.message,
    });
  }
});

/* -------------------------------------------------------
   ✅ FORGOT PASSWORD
------------------------------------------------------- */
router.post("/forgot-password", async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user)
      return res.status(404).json({
        success: false,
        message: "User not found with this email",
      });

    const resetToken = crypto.randomBytes(32).toString("hex");

    const resetUrl = `${process.env.FRONTEND_URL}/reset-password/${resetToken}`;

    user.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");
    user.resetPasswordExpire = Date.now() + 10 * 60 * 1000;
    await user.save();

    const msg = `
      <h3>Password Reset</h3>
      <p>Click to reset your password:</p>
      <a href="${resetUrl}">${resetUrl}</a>
    `;

    await sendEmail(user.email, "Reset Password", msg);

    res.json({ success: true, message: "Reset email sent" });
  } catch (error) {
    console.error("Forgot error:", error);
    res.status(500).json({ success: false });
  }
});

/* -------------------------------------------------------
   ✅ RESET PASSWORD
------------------------------------------------------- */
router.post("/reset-password/:token", async (req, res) => {
  try {
    const hash = crypto.createHash("sha256").update(req.params.token).digest("hex");

    const user = await User.findOne({
      resetPasswordToken: hash,
      resetPasswordExpire: { $gt: Date.now() },
    });

    if (!user)
      return res.status(400).json({
        success: false,
        message: "Invalid or expired token",
      });

    user.password = await bcrypt.hash(req.body.password, 10);
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    res.json({
      success: true,
      message: "Password reset successful",
    });
  } catch (error) {
    console.error("Reset error:", error);
    res.status(500).json({ success: false });
  }
});

/* -------------------------------------------------------
   ✅ SIMPLE RESET (USERNAME + NEW PASSWORD) FOR YOUR UI
------------------------------------------------------- */
router.post("/forget-password", async (req, res) => {
  try {
    const { username, newPassword } = req.body;

    if (!username || !newPassword) {
      return res.status(400).json({
        success: false,
        message: "Username and new password are required",
      });
    }

    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found with this username",
      });
    }

    user.password = await bcrypt.hash(newPassword, 10);
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    res.json({
      success: true,
      message: "Password reset successful!",
    });

  } catch (error) {
    console.error("Reset error:", error);
    res.status(500).json({
      success: false,
      message: "Server error while resetting password",
      error: error.message,
    });
  }
});


export default router;   