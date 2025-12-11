
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ConfirmationContent = () => {
  const navigate = useNavigate();
  const [isSaving, setIsSaving] = useState(true);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
const [userLoading, setUserLoading] = useState(true);
  
  useEffect(() => {
  const fetchUser = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        console.log("❌ No JWT token found");
        setUser(null);
        setUserLoading(false);
        return;
      }

      const res = await axios.get("http://localhost:5000/api/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUser(res.data.user);
    } catch (err) {
      console.error("❌ Failed to fetch user:", err);
      setUser(null);
    } finally {
      setUserLoading(false);
    }
  };

  fetchUser();
}, []);
  
  useEffect(() => {
    const bookingData = JSON.parse(localStorage.getItem("bookingData"));

    if (!bookingData) {
      console.warn("❌ No bookingData found in localStorage");
      setIsSaving(false);
      return;
    }

    if (userLoading) return; 
if (!user || !user.email) {
  setError("⚠ You must be logged in to save a booking.");
  setIsSaving(false);
  return;
}

    const saveBooking = async () => {
      try {
        console.log("📤 Sending booking to DB:", bookingData);

        
        const payload = { ...bookingData, email: user.email, name: user.name };

       const token = localStorage.getItem("token");

const res = await axios.post(
  "http://localhost:5000/api/bookings",
  payload,
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
);


        console.log("✅ Booking stored in MongoDB:", res.data);

        localStorage.removeItem("bookingData");
        setIsSaving(false);
      } catch (err) {
        console.error("❌ Failed to save booking:", err);
        setError("⚠ Failed to save booking. Please check backend.");
        setIsSaving(false);
      }
    };

    if (isSaving) saveBooking();
  }, [isSaving, user]);

  const handleBackToHome = () => navigate("/");
  

  return (
    <main className="flex flex-col items-center px-4 py-12">
      <div className="w-[280px] h-[60px] mb-12">
        <img
          src="https://static.codia.ai/image/2025-10-27/MyOS0BcaM2.png"
          alt="Booking Steps"
          className="w-full h-full object-cover"
        />
      </div>

      <h1 className="text-dark-blue text-4xl font-semibold text-center mb-6">
        Payment Completed Successfully
      </h1>

      {error && (
        <p className="text-red-600 font-medium mb-4">
          {error}
        </p>
      )}

      <div className="w-[362px] h-[330px] mb-8">
        <img
          src="https://static.codia.ai/image/2025-10-27/QanXbFDoGK.png"
          alt="Payment Confirmation"
          className="w-full h-full object-cover"
        />
      </div>

      <p className="text-primary-blue text-lg font-light text-center mb-12 max-w-md">
        Your booking details have been sent to your email & phone.
      </p>

      <div className="flex flex-col items-center space-y-2">
        <button
          onClick={handleBackToHome}
          className="bg-blue-700 text-white px-6 py-2 rounded-lg font-medium shadow-lg hover:bg-blue-800"
        >
          Back to Home
        </button>

        
      </div>
    </main>
  );
};

export default ConfirmationContent;  