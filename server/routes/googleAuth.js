import express from "express";
import dotenv from "dotenv";
dotenv.config(); // ✅ Load environment variables first!

import passport from "passport";
import jwt from "jsonwebtoken";
import User from "../models/UserModel.js";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";

const router = express.Router();

// ✅ Configure Google OAuth Strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let user = await User.findOne({ googleId: profile.id });

        if (!user) {
          user = await User.create({
            googleId: profile.id,
            name: profile.displayName,
            email: profile.emails?.[0]?.value || "",
            avatar: profile.photos?.[0]?.value || "",
          });
        }

        return done(null, user);
      } catch (err) {
        console.error("Error during Google login:", err);
        return done(err, null);
      }
    }
  )
);

// ✅ Serialize and deserialize user for sessions
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

// ✅ Google Auth Routes
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// ✅ Google Callback
router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  (req, res) => {
    const token = jwt.sign({ id: req.user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    // ✅ Redirect to frontend with JWT token
    res.redirect(`http://localhost:3000?token=${token}`);
  }
);

export default router;
