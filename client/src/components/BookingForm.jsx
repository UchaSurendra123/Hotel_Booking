import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BookingForm = ({ hotel }) => {
  const [days, setDays] = useState(1);
  const [checkIn, setCheckIn] = useState(""); // 🗓️ check-in date
  const navigate = useNavigate();

  if (!hotel) return null;

  const handleIncrement = () => setDays((prev) => prev + 1);
  const handleDecrement = () => days > 1 && setDays((prev) => prev - 1);
  const handleCancel = () => navigate("/");

  // 💰 Calculate total in INR
  const totalPrice = hotel.price * days;

  // 📅 Calculate check-out date
  const getCheckoutDate = () => {
    if (!checkIn) return "";
    const checkInDate = new Date(checkIn);
    checkInDate.setDate(checkInDate.getDate() + days);
    return checkInDate.toISOString().split("T")[0];
  };

  // 🚀 Navigate to Payment Page with data
  const handleBookNow = () => {
    if (!checkIn) {
      alert("Please select a check-in date before booking.");
      return;
    }

    navigate("/payment", {
      state: {
        hotelName: hotel.name,
        totalPrice,
        days,
        checkIn,
        checkOut: getCheckoutDate(),
      },
    });
  };

  return (
    <div className="w-full max-w-md space-y-6 border border-gray-300 rounded-2xl p-6 shadow-md bg-white">
      {/* Hotel Name */}
      <h2 className="text-2xl font-semibold text-primary-blue text-center">
        {hotel.name}
      </h2>

      {/* Duration Selector */}
      <div className="space-y-3">
        <label className="block text-base text-primary-blue font-medium">
          How long will you stay?
        </label>
        <div className="flex items-center bg-gray-100 rounded">
          <button
            onClick={handleDecrement}
            className="w-11 h-11 bg-red-500 rounded-l flex items-center justify-center text-white font-bold text-xl hover:bg-red-600 transition-colors"
          >
            -
          </button>
          <div className="flex-1 h-11 flex items-center justify-center text-primary-blue text-base">
            {days} {days === 1 ? "Day" : "Days"}
          </div>
          <button
            onClick={handleIncrement}
            className="w-11 h-11 bg-[#1ABC9C] rounded-r flex items-center justify-center text-white font-bold text-xl transition-colors"
          >
            +
          </button>
        </div>
      </div>

      {/* 📅 Date Pickers */}
      <div className="space-y-4">
        <div>
          <label className="block text-base text-primary-blue font-medium mb-2">
            Check-in Date
          </label>
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-base text-primary-blue font-medium mb-2">
            Check-out Date
          </label>
          <input
            type="date"
            value={getCheckoutDate()}
            readOnly
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-500 bg-gray-100 cursor-not-allowed"
          />
        </div>
      </div>

      {/* 💸 Price Info */}
      <div className="py-4 text-gray-700">
        <p className="font-light text-base leading-relaxed">
          You will pay{" "}
          <span className="text-primary-blue font-semibold">
            ₹{totalPrice.toLocaleString("en-IN")}
          </span>
          <br />
          for{" "}
          <span className="text-primary-blue font-semibold">
            {days} {days === 1 ? "Day" : "Days"}
          </span>
        </p>
      </div>

      {/* 🧭 Buttons */}
      <div className="space-y-4 pt-4">
        <button
          onClick={handleBookNow}
          className="w-full h-14 bg-blue-600 text-white font-medium text-lg rounded-lg hover:bg-blue-700 transition-colors"
        >
          Book Now
        </button>
        <button
          onClick={handleCancel}
          className="w-full h-12 bg-gray-200 text-gray-600 font-normal text-lg rounded hover:bg-gray-300 transition-colors"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default BookingForm;
