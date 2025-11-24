// import express from "express";
// import fetch from "node-fetch";
// import cors from "cors";
// import dotenv from "dotenv";
// import crypto from "crypto";

// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// /**
//  * 🧮 Generate Hotelbeds API Signature
//  * Format: SHA256(apiKey + secret + currentTimestamp)
//  */
// const generateSignature = (apiKey, secret) => {
//   const timestamp = Math.floor(Date.now() / 1000); // seconds
//   const signature = crypto
//     .createHash("sha256")
//     .update(apiKey + secret + timestamp)
//     .digest("hex");
//   return { signature, timestamp };
// };

// /**
//  * 🎲 Random Price Generator (₹5000–₹25000, rounded to nearest ₹100)
//  */
// const getRandomPrice = () => {
//   const price = Math.floor(Math.random() * (25000 - 5000 + 1)) + 5000;
//   return `₹${Math.round(price / 100) * 100}`;
// };

// /**
//  * ⭐ Random Rating (between 3.0 and 5.0)
//  */
// const getRandomRating = () => (Math.random() * (2) + 3).toFixed(1);

// /**
//  * 🏨 Hotelbeds Hotels Route
//  * Example: http://localhost:5000/api/hotels?city=GOA
//  */
// app.get("/api/hotels", async (req, res) => {
//   const { city } = req.query;
//   if (!city)
//     return res.status(400).json({ error: "City parameter is required" });

//   try {
//     const apiKey = process.env.HOTELBEDS_API_KEY;
//     const secret = process.env.HOTELBEDS_API_SECRET;
//     const unsplashKey = process.env.UNSPLASH_API_KEY;

//     // ✅ Generate Hotelbeds signature
//     const { signature } = generateSignature(apiKey, secret);

//     console.log(`🔹 Fetching up to 100 hotels for ${city}...`);

//     // ✅ Fetch 100 hotels from Hotelbeds
//     const response = await fetch(
//       `https://api.test.hotelbeds.com/hotel-content-api/1.0/hotels?destinationCode=${city.toUpperCase()}&from=1&to=100&fields=name,categoryCode,city,address,images,ranking,minRate,maxRate`,
//       {
//         headers: {
//           "Api-key": apiKey,
//           "X-Signature": signature,
//           Accept: "application/json",
//         },
//       }
//     );

//     if (!response.ok) {
//       const errorText = await response.text();
//       console.error("❌ Hotelbeds API error:", errorText);
//       return res.status(response.status).json({
//         error: "Hotelbeds request failed",
//         details: errorText,
//       });
//     }

//     const data = await response.json();

//     if (!data.hotels || data.hotels.length === 0) {
//       return res.status(404).json({
//         message: `No hotels found for ${city}. Check if destinationCode is valid.`,
//       });
//     }

//     // 🧩 Transform Hotelbeds data + randomize price/rating
//     const hotels = data.hotels.map((h) => ({
//       name: h.name?.content || "Unnamed Hotel",
//       address: h.address?.content || h.city?.content || "Address not available",
//       rating: getRandomRating(),
//       price: getRandomPrice(),
//       image: h.images?.[0]?.path
//         ? `https://photos.hotelbeds.com/giata/original/${h.images[0].path}`
//         : null,
//     }));

//     // 🖼️ Add Unsplash fallback for missing images
//     const hotelsWithImages = await Promise.all(
//       hotels.map(async (hotel) => {
//         if (hotel.image) return hotel;

//         try {
//           const unsplashRes = await fetch(
//             `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
//               hotel.name + " hotel"
//             )}&client_id=${unsplashKey}&per_page=1`
//           );
//           const unsplashData = await unsplashRes.json();
//           hotel.image =
//             unsplashData.results?.[0]?.urls?.small ||
//             `https://source.unsplash.com/400x300/?hotel,${encodeURIComponent(
//               city
//             )}`;
//         } catch (err) {
//           console.error("Unsplash fetch failed:", err);
//           hotel.image = `https://source.unsplash.com/400x300/?hotel,${encodeURIComponent(
//             city
//           )}`;
//         }
//         return hotel;
//       })
//     );

//     // ✅ Send final data
//     res.json({
//       city: city.toUpperCase(),
//       total: hotelsWithImages.length,
//       hotels: hotelsWithImages,
//     });
//   } catch (error) {
//     console.error("❌ Error fetching hotels:", error);
//     res.status(500).json({ error: "Failed to fetch hotels from Hotelbeds API" });
//   }
// });

// /**
//  * 🚀 Start Server
//  */
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () =>
//   console.log(`✅ Server running on http://localhost:${PORT}`)
// );






































// import express from "express";
// import fetch from "node-fetch";
// import cors from "cors";
// import dotenv from "dotenv";
// import crypto from "crypto";
// import session from "express-session";
// import passport from "passport";

// // 🧩 Import your database & routes
// import connectDB from "./config/db.js";
// import Test from "./models/TestModel.js";
// import authRoutes from "./routes/authRoutes.js";
// import googleAuth from "./routes/googleAuth.js";
// import passwordRoutes from "./routes/passwordRoutes.js";

// // 🌍 Environment setup
// dotenv.config();
// connectDB();

// const app = express();

// // ✅ Middleware
// app.use(
//   cors({
//     origin: process.env.FRONTEND_URL || "http://localhost:3000",
//     credentials: true,
//   })
// );
// app.use(express.json());
// app.use(
//   session({
//     secret: process.env.SESSION_SECRET || "sessionsecret",
//     resave: false,
//     saveUninitialized: false,
//   })
// );

// // ✅ Passport setup
// app.use(passport.initialize());
// app.use(passport.session());

// /* --------------------------------------------------------------------------
//  🧭 AUTH / DATABASE ROUTES
// -------------------------------------------------------------------------- */
// app.use("/api/auth", authRoutes);
// app.use("/auth", googleAuth);
// app.use("/api/password", passwordRoutes);

// // ✅ Test MongoDB connection
// app.get("/test", async (req, res) => {
//   try {
//     const newTest = new Test({ name: "First record" });
//     await newTest.save();
//     res.send("✅ Test document added to MongoDB!");
//   } catch (error) {
//     console.error("Error adding test document:", error);
//     res.status(500).send("❌ Failed to add test document");
//   }
// });

// /* --------------------------------------------------------------------------
//  🏨 HOTELBEDS + UNSPLASH HOTEL DATA API
// -------------------------------------------------------------------------- */

// /**
//  * 🧮 Generate Hotelbeds API Signature
//  * Format: SHA256(apiKey + secret + currentTimestamp)
//  */
// const generateSignature = (apiKey, secret) => {
//   const timestamp = Math.floor(Date.now() / 1000); // seconds
//   const signature = crypto
//     .createHash("sha256")
//     .update(apiKey + secret + timestamp)
//     .digest("hex");
//   return { signature, timestamp };
// };

// /**
//  * 🎲 Random Price Generator (₹5000–₹25000, rounded to nearest ₹100)
//  */
// const getRandomPrice = () => {
//   const price = Math.floor(Math.random() * (25000 - 5000 + 1)) + 5000;
//   return Math.round(price / 100) * 100; // return as number, not string
// };

// /**
//  * ⭐ Random Rating (between 3.0 and 5.0)
//  */
// const getRandomRating = () => (Math.random() * 2 + 3).toFixed(1);

// /**
//  * 🏨 Hotelbeds Hotels Route
//  * Example: http://localhost:5000/api/hotels?city=GOA
//  */
// app.get("/api/hotels", async (req, res) => {
//   const { city } = req.query;
//   if (!city)
//     return res.status(400).json({ error: "City parameter is required" });

//   try {
//     const apiKey = process.env.HOTELBEDS_API_KEY;
//     const secret = process.env.HOTELBEDS_API_SECRET;
//     const unsplashKey = process.env.UNSPLASH_API_KEY;

//     const { signature } = generateSignature(apiKey, secret);

//     console.log(`🔹 Fetching up to 100 hotels for ${city}...`);

//     const response = await fetch(
//       `https://api.test.hotelbeds.com/hotel-content-api/1.0/hotels?destinationCode=${city.toUpperCase()}&from=1&to=100&fields=name,categoryCode,city,address,images,ranking,minRate,maxRate`,
//       {
//         headers: {
//           "Api-key": apiKey,
//           "X-Signature": signature,
//           Accept: "application/json",
//         },
//       }
//     );

//     if (!response.ok) {
//       const errorText = await response.text();
//       console.error("❌ Hotelbeds API error:", errorText);
//       return res.status(response.status).json({
//         error: "Hotelbeds request failed",
//         details: errorText,
//       });
//     }

//     const data = await response.json();

//     if (!data.hotels || data.hotels.length === 0) {
//       return res.status(404).json({
//         message: `No hotels found for ${city}. Check if destinationCode is valid.`,
//       });
//     }

//     // 🧩 Transform Hotelbeds data
//     const hotels = data.hotels.map((h) => ({
//       name: h.name?.content || "Unnamed Hotel",
//       address: h.address?.content || h.city?.content || "Address not available",
//       rating: getRandomRating(),
//       price: getRandomPrice(),
//       image: h.images?.[0]?.path
//         ? `https://photos.hotelbeds.com/giata/original/${h.images[0].path}`
//         : null,
//     }));

//     // 🖼️ Add Unsplash fallback for missing images
//     const hotelsWithImages = await Promise.all(
//       hotels.map(async (hotel) => {
//         if (hotel.image) return hotel;
//         try {
//           const unsplashRes = await fetch(
//             `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
//               hotel.name + " hotel"
//             )}&client_id=${unsplashKey}&per_page=1`
//           );
//           const unsplashData = await unsplashRes.json();
//           hotel.image =
//             unsplashData.results?.[0]?.urls?.small ||
//             `https://source.unsplash.com/400x300/?hotel,${encodeURIComponent(
//               city
//             )}`;
//         } catch (err) {
//           console.error("Unsplash fetch failed:", err);
//           hotel.image = `https://source.unsplash.com/400x300/?hotel,${encodeURIComponent(
//             city
//           )}`;
//         }
//         return hotel;
//       })
//     );

//     // ✅ Send final data
//     res.json({
//       city: city.toUpperCase(),
//       total: hotelsWithImages.length,
//       hotels: hotelsWithImages,
//     });
//   } catch (error) {
//     console.error("❌ Error fetching hotels:", error);
//     res.status(500).json({ error: "Failed to fetch hotels from Hotelbeds API" });
//   }
// });

// /* --------------------------------------------------------------------------
//  ✅ HEALTH CHECK + SERVER START
// -------------------------------------------------------------------------- */

// app.get("/", (req, res) => {
//   res.send("✅ Hotel Booking Backend Running & MongoDB Connected!");
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () =>
//   console.log(`🚀 Combined Server running on http://localhost:${PORT}`)
// );






























// import express from "express";
// import fetch from "node-fetch";
// import cors from "cors";
// import dotenv from "dotenv";
// import crypto from "crypto";
// import session from "express-session";
// import passport from "passport";

// // 🧩 Import your database & routes
// import connectDB from "./config/db.js";
// import Test from "./models/TestModel.js";
// import authRoutes from "./routes/authRoutes.js";
// import googleAuth from "./routes/googleAuth.js";
// import passwordRoutes from "./routes/passwordRoutes.js";
// import bookingRoutes from "./routes/bookingRoutes.js"; // ✅ Booking routes
// import hotelRoutes from "./routes/hotelRoutes.js";
// import paymentRoutes from "./routes/paymentRoutes.js";

// // 🌍 Environment setup
// dotenv.config();
// connectDB();

// const app = express();

// /* --------------------------------------------------------------------------
//  ✅ Middleware Setup
// -------------------------------------------------------------------------- */
// const cors = require("cors");
// app.use(cors({
//   origin: "http://localhost:3000", // your frontend URL
//   credentials: true,
// }));


// app.use(express.json());
// app.use(
//   session({
//     secret: process.env.SESSION_SECRET || "sessionsecret",
//     resave: false,
//     saveUninitialized: false,
//   })
// );
// app.use(passport.initialize());
// app.use(passport.session());
// app.use(express.urlencoded({ extended: true }));

// /* --------------------------------------------------------------------------
//  ✅ Route Registration
// -------------------------------------------------------------------------- */
// app.use("/api/auth", authRoutes);
// app.use("/auth", googleAuth);
// app.use("/api/password", passwordRoutes);
// app.use("/api/bookings", bookingRoutes); // ✅ Handles booking POST + GET
// app.use("/api/hotels", hotelRoutes);
// app.use('/uploads', express.static('uploads')); // serve uploaded files
// app.use("/api/payment", paymentRoutes);

// /* --------------------------------------------------------------------------
//  ✅ Test Route (MongoDB Check)
// -------------------------------------------------------------------------- */
// app.get("/test", async (req, res) => {
//   try {
//     const newTest = new Test({ name: "First record" });
//     await newTest.save();
//     res.send("✅ Test document added to MongoDB!");
//   } catch (error) {
//     console.error("❌ Error adding test document:", error);
//     res.status(500).send("❌ Failed to add test document");
//   }
// });

// /* --------------------------------------------------------------------------
//  🏨 HOTELBEDS + UNSPLASH HOTEL DATA API
// -------------------------------------------------------------------------- */

// // 🧮 Generate Hotelbeds API Signature
// const generateSignature = (apiKey, secret) => {
//   const timestamp = Math.floor(Date.now() / 1000); // seconds
//   const signature = crypto
//     .createHash("sha256")
//     .update(apiKey + secret + timestamp)
//     .digest("hex");
//   return { signature, timestamp };
// };

// // 🎲 Random Price Generator (₹5000–₹25000)
// const getRandomPrice = () => {
//   const price = Math.floor(Math.random() * (25000 - 5000 + 1)) + 5000;
//   return Math.round(price / 100) * 100;
// };

// // ⭐ Random Rating (between 3.0 and 5.0)
// const getRandomRating = () => (Math.random() * 2 + 3).toFixed(1);

// // 🏨 Fetch Hotels API
// app.get("/api/hotels", async (req, res) => {
//   const { city } = req.query;
//   if (!city)
//     return res.status(400).json({ error: "City parameter is required" });

//   try {
//     const apiKey = process.env.HOTELBEDS_API_KEY;
//     const secret = process.env.HOTELBEDS_API_SECRET;
//     const unsplashKey = process.env.UNSPLASH_API_KEY;

//     const { signature } = generateSignature(apiKey, secret);

//     const response = await fetch(
//       `https://api.test.hotelbeds.com/hotel-content-api/1.0/hotels?destinationCode=${city.toUpperCase()}&from=1&to=100&fields=name,categoryCode,city,address,images,ranking,minRate,maxRate`,
//       {
//         headers: {
//           "Api-key": apiKey,
//           "X-Signature": signature,
//           Accept: "application/json",
//         },
//       }
//     );

//     if (!response.ok) {
//       const errorText = await response.text();
//       console.error("❌ Hotelbeds API error:", errorText);
//       return res.status(response.status).json({
//         error: "Hotelbeds request failed",
//         details: errorText,
//       });
//     }

//     const data = await response.json();

//     if (!data.hotels || data.hotels.length === 0) {
//       return res.status(404).json({
//         message: `No hotels found for ${city}. Check if destinationCode is valid.`,
//       });
//     }

//     const hotels = data.hotels.map((h) => ({
//       name: h.name?.content || "Unnamed Hotel",
//       address: h.address?.content || h.city?.content || "Address not available",
//       rating: getRandomRating(),
//       price: getRandomPrice(),
//       image: h.images?.[0]?.path
//         ? `https://photos.hotelbeds.com/giata/original/${h.images[0].path}`
//         : null,
//     }));

//     // 🖼️ Add Unsplash fallback for missing images
//     const hotelsWithImages = await Promise.all(
//       hotels.map(async (hotel) => {
//         if (hotel.image) return hotel;
//         try {
//           const unsplashRes = await fetch(
//             `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
//               hotel.name + " hotel"
//             )}&client_id=${unsplashKey}&per_page=1`
//           );
//           const unsplashData = await unsplashRes.json();
//           hotel.image =
//             unsplashData.results?.[0]?.urls?.small ||
//             `https://source.unsplash.com/400x300/?hotel,${encodeURIComponent(
//               city
//             )}`;
//         } catch (err) {
//           console.error("Unsplash fetch failed:", err);
//           hotel.image = `https://source.unsplash.com/400x300/?hotel,${encodeURIComponent(
//             city
//           )}`;
//         }
//         return hotel;
//       })
//     );

//     res.json({
//       city: city.toUpperCase(),
//       total: hotelsWithImages.length,
//       hotels: hotelsWithImages,
//     });
//   } catch (error) {
//     console.error("❌ Error fetching hotels:", error);
//     res.status(500).json({ error: "Failed to fetch hotels from Hotelbeds API" });
//   }
// });

// /* --------------------------------------------------------------------------
//  ✅ HEALTH CHECK + SERVER START
// -------------------------------------------------------------------------- */
// app.get("/", (req, res) => {
//   res.send("✅ Hotel Booking Backend Running & MongoDB Connected!");
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () =>
//   console.log(`🚀 Combined Server running on http://localhost:${PORT}`)
// );


























// import express from "express";
// import fetch from "node-fetch";
// import cors from "cors";
// import dotenv from "dotenv";
// import crypto from "crypto";
// import session from "express-session";
// import passport from "passport";
// import Stripe from "stripe";

// import connectDB from "./config/db.js";
// import authRoutes from "./routes/authRoutes.js";
// import googleAuth from "./routes/googleAuth.js";
// import passwordRoutes from "./routes/passwordRoutes.js";
// import bookingRoutes from "./routes/bookingRoutes.js";

// import stripeRoutes from "./routes/stripeRoutes.js";
// import stripeWebhook from "./routes/stripeWebhook.js";
// import cookieParser from "cookie-parser";
// import ownerRoutes from "./routes/ownerRoutes.js";

// dotenv.config();
// connectDB();

// const app = express();

// /* ---------------------------------------------------------
//    MIDDLEWARE
// --------------------------------------------------------- */
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     credentials: true, // allow cookies
//   })
// );

// app.use(cookieParser());
// // Use session BEFORE JSON parsing
// app.use(
//   session({
//     secret: process.env.SESSION_SECRET || "sessionsecret",
//     resave: false,
//     saveUninitialized: false,
//     cookie: { secure: false }, // must be false on localhost
//   })
// );

// app.use(passport.initialize());
// app.use(passport.session());

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// /* ---------------------------------------------------------
//    STRIPE WEBHOOK
// --------------------------------------------------------- */
// app.post(
//   "/api/stripe/webhook",
//   express.raw({ type: "application/json" }),
//   stripeWebhook
// );

// /* ---------------------------------------------------------
//    ROUTES
// --------------------------------------------------------- */
// app.use("/api/auth", authRoutes);
// app.use("/auth", googleAuth);
// app.use("/api/password", passwordRoutes);
// app.use("/api/owners", ownerRoutes);


// // BOOKING ROUTES
// app.use("/api/bookings", bookingRoutes);




// app.use("/uploads", express.static("uploads"));
// app.use("/api/stripe", stripeRoutes);

// /* ---------------------------------------------------------
//    STRIPE PAYMENT
// --------------------------------------------------------- */
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// app.post("/api/payment/create-payment", async (req, res) => {
//   try {
//     const { totalPrice } = req.body;
//     if (!totalPrice) {
//       return res.status(400).json({ success: false, message: "Total price missing" });
//     }

//     const paymentIntent = await stripe.paymentIntents.create({
//       amount: totalPrice * 100,
//       currency: "inr",
//     });

//     res.json({ success: true, clientSecret: paymentIntent.client_secret });
//   } catch (error) {
//     console.error("❌ Stripe Payment Error:", error);
//     res.status(500).json({ success: false, message: "Stripe Payment Failed", error });
//   }
// });

// /* ---------------------------------------------------------
//    HOTELBEDS + UNSPLASH
// --------------------------------------------------------- */
// const generateSignature = (apiKey, secret) => {
//   const timestamp = Math.floor(Date.now() / 1000);
//   const signature = crypto.createHash("sha256").update(apiKey + secret + timestamp).digest("hex");
//   return { signature, timestamp };
// };

// const getRandomPrice = () => Math.round((Math.floor(Math.random() * (25000 - 5000 + 1)) + 5000) / 100) * 100;
// const getRandomRating = () => (Math.random() * 2 + 3).toFixed(1);

// app.get("/api/hotelbeds", async (req, res) => {
//   const { city } = req.query;
//   if (!city) return res.status(400).json({ error: "City parameter is required" });

//   try {
//     const apiKey = process.env.HOTELBEDS_API_KEY;
//     const secret = process.env.HOTELBEDS_API_SECRET;// FIXED HERE
//     const unsplashKey = process.env.UNSPLASH_API_KEY;

//     const { signature } = generateSignature(apiKey, secret);

//     const response = await fetch(
//       `https://api.test.hotelbeds.com/hotel-content-api/1.0/hotels?destinationCode=${city.toUpperCase()}&from=1&to=100&fields=name,categoryCode,city,address,images,ranking,minRate,maxRate`,
//       {
//         headers: {
//           "Api-key": apiKey,
//           "X-Signature": signature,
//           "Accept": "application/json",
//         }
//       }
//     );

    

//     if (!response.ok) {
//       const errorText = await response.text();
//       return res.status(response.status).json({ error: "Hotelbeds request failed", details: errorText });
//     }

//     const data = await response.json();
//     if (!data.hotels || data.hotels.length === 0) {
//       return res.status(404).json({ message: `No hotels found for ${city}` });
//     }

//     const hotels = data.hotels.map((h) => ({
//       name: h.name?.content || "Unnamed Hotel",
//       address: h.address?.content || h.city?.content,
//       rating: getRandomRating(),
//       price: getRandomPrice(),
//       image: h.images?.[0]?.path ? `https://photos.hotelbeds.com/giata/original/${h.images[0].path}` : null,
//     }));

//     const hotelsWithImages = await Promise.all(
//       hotels.map(async (hotel) => {
//         if (hotel.image) return hotel;
//         try {
//           const unsplashRes = await fetch(
//             `https://api.unsplash.com/search/photos?query=${encodeURIComponent(hotel.name + " hotel")}&client_id=${unsplashKey}&per_page=1`
//           );
//           const unsplashData = await unsplashRes.json();
//           hotel.image = unsplashData.results?.[0]?.urls?.small || `https://source.unsplash.com/400x300/?hotel,${city}`;
//         } catch (err) {
//           hotel.image = `https://source.unsplash.com/400x300/?hotel,${city}`;
//         }
//         return hotel;
//       })
//     );

//     res.json({ city: city.toUpperCase(), total: hotelsWithImages.length, hotels: hotelsWithImages });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Hotels fetch failed" });
//   }
// });

// /* ---------------------------------------------------------
//    HEALTH CHECK
// --------------------------------------------------------- */
// app.get("/", (req, res) => {
//   res.send("Backend Running Successfully! 🚀");
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));











































import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import dotenv from "dotenv";
import crypto from "crypto";
import session from "express-session";
import passport from "passport";
import Stripe from "stripe";
import cookieParser from "cookie-parser";
import path from "path";


import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import googleAuth from "./routes/googleAuth.js";
import passwordRoutes from "./routes/passwordRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";
import stripeRoutes from "./routes/stripeRoutes.js";
import stripeWebhook from "./routes/stripeWebhook.js";
import ownerRoutes from "./routes/ownerRoutes.js";

dotenv.config();
connectDB();

const app = express();


// MUST COME BEFORE ROUTES
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));


/* ---------------------------------------------------------
   CORS + Middlewares
--------------------------------------------------------- */
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(cookieParser());

app.use(
  session({
    secret: process.env.SESSION_SECRET || "sessionsecret",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false },
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* ---------------------------------------------------------
   STRIPE WEBHOOK
--------------------------------------------------------- */
app.post(
  "/api/stripe/webhook",
  express.raw({ type: "application/json" }),
  stripeWebhook
);

/* ---------------------------------------------------------
   ROUTES
--------------------------------------------------------- */
app.use("/api/auth", authRoutes);
app.use("/auth", googleAuth);
app.use("/api/password", passwordRoutes);
app.use("/api/owners", ownerRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/stripe", stripeRoutes);

/* ---------------------------------------------------------
   STRIPE PAYMENT
--------------------------------------------------------- */
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

app.post("/api/payment/create-payment", async (req, res) => {
  try {
    const { totalPrice } = req.body;
    if (!totalPrice) {
      return res.status(400).json({ success: false, message: "Total price missing" });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: totalPrice * 100,
      currency: "inr",
    });

    res.json({ success: true, clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error("❌ Stripe Payment Error:", error);
    res.status(500).json({ success: false, message: "Stripe Payment Failed", error });
  }
});

/* ---------------------------------------------------------
   HOTELBEDS + UNSPLASH
--------------------------------------------------------- */
const generateSignature = (apiKey, secret) => {
  const timestamp = Math.floor(Date.now() / 1000);
  const signature = crypto
    .createHash("sha256")
    .update(apiKey + secret + timestamp)
    .digest("hex");
  return { signature, timestamp };
};

const getRandomPrice = () =>
  Math.round(
    (Math.floor(Math.random() * (25000 - 5000 + 1)) + 5000) / 100
  ) * 100;

const getRandomRating = () => (Math.random() * 2 + 3).toFixed(1);

app.get("/api/hotelbeds", async (req, res) => {
  const { city } = req.query;
  if (!city) return res.status(400).json({ error: "City parameter is required" });

  try {
    const apiKey = process.env.HOTELBEDS_API_KEY;
    const secret = process.env.HOTELBEDS_API_SECRET;
    const unsplashKey = process.env.UNSPLASH_API_KEY;

    const { signature } = generateSignature(apiKey, secret);

    const response = await fetch(
      `https://api.test.hotelbeds.com/hotel-content-api/1.0/hotels?destinationCode=${city.toUpperCase()}&from=1&to=100&fields=name,categoryCode,city,address,images,ranking,minRate,maxRate`,
      {
        headers: {
          "Api-key": apiKey,
          "X-Signature": signature,
          "Accept": "application/json",
        },
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      return res
        .status(response.status)
        .json({ error: "Hotelbeds request failed", details: errorText });
    }

    const data = await response.json();
    if (!data.hotels?.length) {
      return res.status(404).json({ message: `No hotels found for ${city}` });
    }

    const hotels = data.hotels.map((h) => ({
      name: h.name?.content || "Unnamed Hotel",
      address: h.address?.content || h.city?.content,
      rating: getRandomRating(),
      price: getRandomPrice(),
      image: h.images?.[0]?.path
        ? `https://photos.hotelbeds.com/giata/original/${h.images[0].path}`
        : null,
    }));

    const hotelsWithImages = await Promise.all(
      hotels.map(async (hotel) => {
        if (hotel.image) return hotel;

        try {
          const unsplashRes = await fetch(
            `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
              hotel.name + " hotel"
            )}&client_id=${unsplashKey}&per_page=1`
          );
          const unsplashData = await unsplashRes.json();
          hotel.image =
            unsplashData.results?.[0]?.urls?.small ||
            `https://source.unsplash.com/400x300/?hotel,${city}`;
        } catch (err) {
          hotel.image = `https://source.unsplash.com/400x300/?hotel,${city}`;
        }

        return hotel;
      })
    );

    res.json({
      city: city.toUpperCase(),
      total: hotelsWithImages.length,
      hotels: hotelsWithImages,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Hotels fetch failed" });
  }
});

/* ---------------------------------------------------------
   DEFAULT CHECK
--------------------------------------------------------- */
app.get("/", (req, res) => {
  res.send("Backend Running Successfully! 🚀");
});

/* ---------------------------------------------------------
   START SERVER
--------------------------------------------------------- */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running at http://localhost:${PORT}`)
);
