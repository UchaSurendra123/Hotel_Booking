// import express from "express";
// import Booking from "../models/Booking.js";

// const router = express.Router();

// // ✅ POST booking (save to MongoDB)
// router.post("/", async (req, res) => {
//   try {
//     const booking = new Booking(req.body);
//     await booking.save();
//     res.status(201).json({ success: true, booking });
//   } catch (err) {
//     console.error("Error saving booking:", err);
//     res.status(500).json({ success: false, message: "Server error" });
//   }
// });

// // ✅ GET all bookings (for dashboard)
// router.get("/", async (req, res) => {
//   try {
//     const bookings = await Booking.find().sort({ createdAt: -1 });
//     res.status(200).json(bookings);
//   } catch (err) {
//     console.error("Error fetching bookings:", err);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// export default router;




































// import express from "express";
// import Booking from "../models/Booking.js";

// const router = express.Router();

// /* ===========================
//    📦 CREATE NEW BOOKING
// =========================== */
// router.post("/", async (req, res) => {
//   try {
//     const { userName, hotelName, price, persons, bookedDate } = req.body;

//     // Basic validation
//     if (!userName || !hotelName || !price || !persons || !bookedDate) {
//       return res
//         .status(400)
//         .json({ success: false, message: "All fields are required" });
//     }

//     const booking = new Booking({
//       userName,
//       hotelName,
//       price,
//       persons,
//       bookedDate,
//     });

//     await booking.save();
//     res.status(201).json({
//       success: true,
//       message: "Booking created successfully",
//       booking,
//     });
//   } catch (error) {
//     console.error("❌ Error saving booking:", error);
//     res
//       .status(500)
//       .json({ success: false, message: "Server error while saving booking" });
//   }
// });

// /* ===========================
//    📋 GET ALL BOOKINGS (ADMIN)
// =========================== */
// router.get("/all", async (req, res) => {
//   try {
//     const bookings = await Booking.find().sort({ createdAt: -1 });
//     res.status(200).json({
//       success: true,
//       count: bookings.length,
//       bookings,
//     });
//   } catch (error) {
//     console.error("❌ Error fetching bookings:", error);
//     res
//       .status(500)
//       .json({ success: false, message: "Server error while fetching bookings" });
//   }
// });

// /* ===========================
//    🗑️ DELETE A BOOKING (ADMIN)
// =========================== */
// router.delete("/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deleted = await Booking.findByIdAndDelete(id);
//     if (!deleted)
//       return res
//         .status(404)
//         .json({ success: false, message: "Booking not found" });

//     res.json({ success: true, message: "Booking deleted successfully" });
//   } catch (error) {
//     console.error("❌ Error deleting booking:", error);
//     res
//       .status(500)
//       .json({ success: false, message: "Server error while deleting booking" });
//   }
// });

// /* ===========================
//    ✏️ UPDATE A BOOKING (ADMIN)
// =========================== */
// router.put("/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const updated = await Booking.findByIdAndUpdate(id, req.body, {
//       new: true,
//     });

//     if (!updated)
//       return res
//         .status(404)
//         .json({ success: false, message: "Booking not found" });

//     res.json({
//       success: true,
//       message: "Booking updated successfully",
//       booking: updated,
//     });
//   } catch (error) {
//     console.error("❌ Error updating booking:", error);
//     res
//       .status(500)
//       .json({ success: false, message: "Server error while updating booking" });
//   }
// });

// export default router;





































// import express from "express";
// import Booking from "../models/Booking.js";
// import jwt from "jsonwebtoken";
// import { protect } from "../middleware/protect.js";
// const router = express.Router();

// // ---------------------------
// // CREATE BOOKING
// // POST /api/bookings
// // ---------------------------
// router.post("/", protect, async (req, res) => {
//   try {
//     const { hotelName, city, checkIn, checkOut, guests, totalPrice, image } = req.body;

//     console.log("🔥 Incoming Booking Body:", req.body);
//     console.log("🔥 Auth User:", req.user);

//     if (!hotelName || !totalPrice) {
//       return res.status(400).json({ error: "hotelName and totalPrice are required" });
//     }

//     const finalTotal = Number(String(totalPrice).replace(/₹|,/g, ""));
//     if (!finalTotal) {
//       return res.status(400).json({ error: "Invalid totalPrice" });
//     }

//     // ✅ STORE CORRECT USER INFORMATION
//     const newBooking = await Booking.create({
//       name: req.user.name,          // user name
//       email: req.user.email,        // FIXED: correct email
//       phone: req.user.phone || "",  // optional
//       hotelName,
//       city,
//       checkIn,
//       checkOut,
//       guests,
//       totalPrice: finalTotal,
//       image,
//       userId: req.user._id,         // optional but recommended
//     });

//     res.status(201).json({
//       success: true,
//       message: "Booking saved successfully",
//       data: newBooking,
//     });

//   } catch (err) {
//     console.error("❌ Error saving booking:", err);
//     res.status(500).json({ error: "Server error saving booking" });
//   }
// });

// // ---------------------------
// // GET BOOKINGS OF LOGGED-IN USER
// // GET /api/bookings/me
// // ---------------------------
// router.get("/me", protect, async (req, res) => {
//   try {
//     const bookings = await Booking.find({ email: req.user.email }).sort({ createdAt: -1 });
//     res.json(bookings);
//   } catch (err) {
//     console.error("Error fetching bookings:", err);
//     res.status(500).json({ error: "Server error fetching bookings" });
//   }
// });

// // ---------------------------
// // DELETE BOOKING (ADMIN)
// // DELETE /api/bookings/:id
// // ---------------------------
// router.delete("/:id", async (req, res) => {
//   try {
//     const deleted = await Booking.findByIdAndDelete(req.params.id);
//     if (!deleted) return res.status(404).json({ success: false, message: "Booking not found" });
//     res.json({ success: true, message: "Booking deleted" });
//   } catch (err) {
//     console.error("Error deleting booking:", err);
//     res.status(500).json({ error: "Server error deleting booking" });
//   }
// });

// // ---------------------------
// // UPDATE BOOKING (ADMIN)
// // PUT /api/bookings/:id
// // ---------------------------
// router.put("/:id", async (req, res) => {
//   try {
//     const updated = await Booking.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     if (!updated) return res.status(404).json({ success: false, message: "Booking not found" });
//     res.json({ success: true, message: "Booking updated successfully", booking: updated });
//   } catch (err) {
//     console.error("Error updating booking:", err);
//     res.status(500).json({ error: "Server error updating booking" });
//   }
// });

// export default router;








































import express from "express";
import Booking from "../models/Booking.js";
import jwt from "jsonwebtoken";
import { protect } from "../middleware/protect.js";

const router = express.Router();


// -------------------------------------------------
// CREATE BOOKING
// POST /api/bookings
// -------------------------------------------------
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

    // ⭐ THE FIX ⭐
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

// -------------------------------------------------
// GET BOOKING OF LOGGED-IN USER
// GET /api/bookings/me
// -------------------------------------------------
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


// -------------------------------------------------
// GET ALL BOOKINGS (ADMIN)
// GET /api/bookings
// -------------------------------------------------
router.get("/all-bookings", async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// -------------------------------------------------
// DELETE BOOKING (ADMIN)
// DELETE /api/bookings/:id
// -------------------------------------------------
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


// -------------------------------------------------
// UPDATE BOOKING (ADMIN)
// PUT /api/bookings/:id
// -------------------------------------------------
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





































