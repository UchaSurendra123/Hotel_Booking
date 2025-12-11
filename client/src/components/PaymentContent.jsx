import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PaymentForm from "./PaymentForm";

const PaymentContent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [bookingData, setBookingData] = useState(null);

  
  useEffect(() => {
    const data =
      location.state?.booking ||
      JSON.parse(localStorage.getItem("bookingData"));

    if (data) {
      setBookingData(data);
      localStorage.setItem("bookingData", JSON.stringify(data));
    }
  }, [location.state]);

  
  const formatPrice = (value) => {
    const num = Number(value);
    return isNaN(num) ? "₹0" : `₹${num.toLocaleString("en-IN")}`;
  };

  if (!bookingData) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl text-gray-600 mb-4">No booking details found.</h2>
        <button
          onClick={() => navigate("/")}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          Back to Home
        </button>
      </div>
    );
  }

 
  const city = bookingData.city;


  const basePrice = Number(bookingData.totalPrice) || 0;

  
  const finalAmount = basePrice;

  return (
    <div className="flex flex-col lg:flex-row gap-12 py-10">

     
      <div className="flex-1 border border-gray-200 rounded-2xl p-6 shadow-md bg-white">
        <h2 className="text-2xl font-semibold text-primary-blue mb-4">
          Booking Summary
        </h2>

        <p className="text-gray-700"><strong>Hotel:</strong> {bookingData.hotelName}</p>
        <p className="text-gray-700"><strong>City:</strong> {city}</p>
        <p className="text-gray-700"><strong>Check-in:</strong> {bookingData.checkIn}</p>
        <p className="text-gray-700"><strong>Check-out:</strong> {bookingData.checkOut}</p>
        <p className="text-gray-700"><strong>Guests:</strong> {bookingData.guests}</p>

        <p className="text-gray-800 text-lg mt-4">
          <strong>Total:</strong>{" "}
          <span className="text-primary-blue font-semibold">
            {formatPrice(finalAmount)}
          </span>
        </p>
      </div>

     
      <PaymentForm bookingData={bookingData} />
    </div>
  );
};

export default PaymentContent;
