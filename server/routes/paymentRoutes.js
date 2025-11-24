import express from "express";
import Stripe from "stripe";
import Booking from "../models/Booking.js";

const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// CREATE PAYMENT INTENT
router.post("/create-payment", async (req, res) => {
  try {
    const { amount, bookingData } = req.body;

    if (!amount || !bookingData) {
      return res.status(400).json({ success: false, message: "Missing fields" });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100),  
      currency: "inr",
      metadata: {
        email: bookingData.email,
        hotelName: bookingData.hotelName,
        city: bookingData.city,
        totalPrice: bookingData.totalPrice,
      },
    });

    res.json({
      success: true,
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error("Stripe Error:", error);
    res.status(500).json({ success: false, message: "Stripe error" });
  }
});

// SAVE BOOKING AFTER SUCCESSFUL PAYMENT
router.post("/save-booking", async (req, res) => {
  try {
    const booking = new Booking(req.body);
    const saved = await booking.save();

    res.json({ success: true, booking: saved });
  } catch (err) {
    console.error("Error saving booking:", err);
    res.status(500).json({ success: false, message: "Saving failed" });
  }
});

export default router;
