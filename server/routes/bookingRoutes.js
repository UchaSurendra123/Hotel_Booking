import express from "express";
import Booking from "../models/Booking.js";
import jwt from "jsonwebtoken";
import { protect } from "../middleware/protect.js";

const router = express.Router();


router.post("/", protect, async (req, res) => {
  try {
    const { hotelName, city, checkIn, checkOut, guests, totalPrice, image } = req.body;

    console.log("🔥 Incoming Booking Body:", req.body);
    console.log("🔥 Auth User:", req.user);

    if (!hotelName || !totalPrice) {
      return res.status(400).json({ error: "hotelName and totalPrice are required" });
    }

    const finalTotal = Number(String(totalPrice).replace(/₹|,/g, ""));
    if (!finalTotal) {
      return res.status(400).json({ error: "Invalid totalPrice" });
    }

    const userName =
      req.user.name && req.user.name.trim() !== ""
        ? req.user.name
        : req.user.username
        ? req.user.username
        : req.user.given_name
        ? req.user.given_name
        : "Guest";

    console.log("✅ Final Name Used:", userName);

    const newBooking = await Booking.create({
      name: userName,
      email: req.user.email,
      phone: req.user.phone || "",
      hotelName,
      city,
      checkIn,
      checkOut,
      guests,
      totalPrice: finalTotal,
      image,
      userId: req.user._id,
    });

    res.status(201).json({
      success: true,
      message: "Booking saved successfully",
      data: newBooking,
    });

  } catch (err) {
    console.error("❌ Error saving booking:", err);
    res.status(500).json({ error: "Server error saving booking" });
  }
});


router.get("/user-bookings", async (req, res) => {
  try {
    const { email } = req.query;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    const bookings = await Booking.find({ email });
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


router.get("/all-bookings", async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Booking.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ success: false, message: "Booking not found" });

    res.json({ success: true, message: "Booking deleted" });
  } catch (err) {
    console.error("❌ Error deleting booking:", err);
    res.status(500).json({ error: "Server error deleting booking" });
  }
});



router.put("/:id", async (req, res) => {
  try {
    const updated = await Booking.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ success: false, message: "Booking not found" });

    res.json({ success: true, message: "Booking updated successfully", booking: updated });
  } catch (err) {
    console.error("❌ Error updating booking:", err);
    res.status(500).json({ error: "Server error updating booking" });
  }
});


export default router;





































