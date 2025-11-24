// import express from "express";
// import Stripe from "stripe";
// import dotenv from "dotenv";
// import Booking from "../models/Booking.js";

// dotenv.config();
// const router = express.Router();

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// router.post(
//   "/webhook",
//   express.raw({ type: "application/json" }),
//   async (req, res) => {
//     const sig = req.headers["stripe-signature"];
//     let event;

//     try {
//       event = stripe.webhooks.constructEvent(
//         req.body,
//         sig,
//         process.env.STRIPE_WEBHOOK_SECRET
//       );
//     } catch (err) {
//       console.error("Webhook signature verification failed.", err.message);
//       return res.status(400).send(`Webhook Error: ${err.message}`);
//     }

//     // Handle the checkout.session.completed event
//     if (event.type === "checkout.session.completed") {
//       const session = event.data.object;
//       console.log("✅ Payment successful:", session);

//       // Extract booking info from session metadata or DB reference
//       const { customer_email, metadata } = session;

//       try {
//         // Find the booking (or create if needed)
//         const booking = new Booking({
//           name: metadata?.name || "Guest User",
//           email: customer_email,
//           hotelName: metadata?.hotelName || "Unknown Hotel",
//           city: metadata?.city || "Unknown City",
//           totalPrice: metadata?.totalPrice || 0,
//           status: "Confirmed",
//           // Optional: Add checkIn, checkOut, guests, image if you store in metadata
//         });

//         await booking.save();
//         console.log("📦 Booking saved to MongoDB:", booking);
//       } catch (err) {
//         console.error("❌ Error saving booking:", err);
//       }
//     }

//     res.json({ received: true });
//   }
// );

// export default router;








































import express from "express";
import Stripe from "stripe";
import Booking from "../models/Booking.js";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

/* ---------------------------------------------------------
   STRIPE WEBHOOK: Listen for Checkout Session completion
--------------------------------------------------------- */
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

    // ⭐ Handle successful checkout session
    if (event.type === "checkout.session.completed") {
      const session = event.data.object;
      const metadata = session.metadata || {};

      // Sanity check for required fields
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

    // Respond to Stripe to acknowledge receipt of the webhook
    res.json({ received: true });
  }
);

export default router;
