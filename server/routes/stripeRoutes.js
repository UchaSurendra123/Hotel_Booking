import express from "express";
import Stripe from "stripe";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

router.get("/key", (req, res) => {
  res.json({ key: process.env.STRIPE_PUBLISHABLE_KEY });
});

router.post("/create-checkout-session", async (req, res) => {
  try {
    const {
      totalPrice,
      userId,
      hotelId,
      name,
      email,
      hotelName,
      city,
      checkIn,
      checkOut,
      guests,
      image,
      phone,
    } = req.body;

    if (!totalPrice || totalPrice <= 0) {
      return res.status(400).json({ error: "Total price missing or invalid" });
    }
    if (!email) {
      return res.status(400).json({ error: "User email is required" });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      customer_email: email,
      line_items: [
        {
          price_data: {
            currency: "inr",
            product_data: {
              name: hotelName || "Hotel Booking",
              images: image ? [image] : [],
            },
            unit_amount: totalPrice * 100, 
          },
          quantity: 1,
        },
      ],
      metadata: {
        userId: userId || "guest",
        hotelId: hotelId || "",
        name: name || "Guest User",
        email,
        phone: phone || "",
        hotelName: hotelName || "",
        city: city || "",
        checkIn: checkIn || "",
        checkOut: checkOut || "",
        guests: guests || 1,
        totalPrice,
        image: image || "",
      },
      success_url: "http://localhost:3000/booking-confirmation?session_id={CHECKOUT_SESSION_ID}",
      cancel_url: "http://localhost:3000/cancel",
    });

    res.json({ url: session.url });
  } catch (err) {
    console.error("❌ STRIPE ERROR:", err);
    res.status(500).json({ error: err.message });
  }
});

export default router;
