
import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

const PaymentForm = () => {
  const [bookingData, setBookingData] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  
  const { user, token } = useContext(AuthContext);

  useEffect(() => {
    const stored = localStorage.getItem("bookingData");
    if (stored) setBookingData(JSON.parse(stored));
  }, []);

  const handlePayNow = async () => {
    if (!user || !token) {
      alert("You must be logged in to book");
      return;
    }

    if (!bookingData) {
      alert("Booking details not found.");
      return;
    }

    const finalPrice =
      bookingData.totalPrice ||
      bookingData.total ||
      bookingData.amount ||
      bookingData.price ||
      0;

    if (!finalPrice || finalPrice <= 0) {
      alert("Invalid price — cannot continue.");
      return;
    }

    const payload = {
  name: user.name,
  email: user.email,
  phone: user.phone || "",

  hotelName: bookingData.hotelName,
  city: bookingData.city,
  checkIn: bookingData.checkIn,
  checkOut: bookingData.checkOut,
  guests: bookingData.guests,
  image: bookingData.image,

  totalPrice: finalPrice,
};

    setLoading(true);

    try {
      
      const saveRes = await axios.post(
        "http://localhost:5000/api/bookings",
        payload,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      console.log("📌 Booking Saved:", saveRes.data);

      
      const checkoutRes = await axios.post(
        "http://localhost:5000/api/stripe/create-checkout-session",
        payload
      );

      if (!checkoutRes.data.url) {
        alert("Stripe URL missing");
        return;
      }

      
      window.location.href = checkoutRes.data.url;
    } catch (err) {
      console.error("💥 Payment error:", err);
      alert("Payment error. Check backend logs.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-1 relative px-6 py-8 max-w-lg mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold text-primary-blue mb-2">
          Secure Payment
        </h2>
        <p className="text-base text-gray-600 italic">
          You will be redirected to Stripe Checkout
        </p>
      </div>

      <div className="flex flex-col items-center pt-6 space-y-4">
        <button
          onClick={handlePayNow}
          disabled={loading}
          className="w-48 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-all"
        >
          {loading ? "Processing..." : "Pay Now"}
        </button>

        <button
          onClick={() => navigate("/")}
          className="w-48 py-3 bg-gray-200 text-gray-700 text-lg font-medium rounded-lg hover:bg-gray-300 transition-all"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default PaymentForm;
