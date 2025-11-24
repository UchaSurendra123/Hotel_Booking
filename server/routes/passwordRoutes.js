import express from "express";
import { forgotPassword, resetPassword } from "../controllers/passwordControllers.js";

const router = express.Router();

// Send reset token
router.post("/forgot-password", forgotPassword);

// Reset password with token
router.post("/reset-password", resetPassword);

export default router;
