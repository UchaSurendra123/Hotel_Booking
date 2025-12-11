import express from "express";
import Stripe from "stripe";
import Booking from "../models/Booking.js";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);


router.post(
  "/",
  express.raw({ type: "application/json" }),
  async (req, res) => {
    const sig = req.headers["stripe-signature"];
    let event;

    try {
      event = stripe.webhooks.constructEvent(
        req.body,
        sig,
        process.env.STRIPE_WEBHOOK_SECRET
      );
    } catch (err) {
      console.error("❌ Webhook Signature Verification Failed:", err.message);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    if (event.type === "checkout.session.completed") {
      const session = event.data.object;
      const metadata = session.metadata || {};

   
      const requiredFields = ["name", "email", "hotelName", "city", "checkIn", "checkOut", "totalPrice"];
      for (const field of requiredFields) {
        if (!metadata[field]) {
          console.warn(`⚠ Webhook metadata missing field: ${field}`);
        }
      }

      try {
        const newBooking = new Booking({
          name: metadata.name || "Guest User",
          email: metadata.email || "noemail@example.com",
          phone: metadata.phone || "",
          hotelName: metadata.hotelName || "Unknown Hotel",
          city: metadata.city || "Unknown City",
          checkIn: metadata.checkIn || "",
          checkOut: metadata.checkOut || "",
          guests: Number(metadata.guests) || 1,
          totalPrice: Number(metadata.totalPrice) || 0,
          image: metadata.image || "",
          createdAt: new Date(),
          updatedAt: new Date(),
        });

        await newBooking.save();
        console.log("✅ Booking saved to MongoDB:", newBooking);
      } catch (error) {
        console.error("❌ MongoDB save error:", error);
      }
    }

    res.json({ received: true });
  }
);

export default router;
