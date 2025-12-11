import React from "react";
import { useNavigate } from "react-router-dom";

const BookingCard = ({ hotel }) => {
  const navigate = useNavigate();

  if (!hotel) return null;

  const handleBookNow = () => {
    
    navigate("/book", { state: { hotel } });
  };

  return (
    <div className="border border-light-gray rounded-2xl p-8 h-fit shadow-md bg-white">
      <div className="mb-8">
        <h3 className="text-2xl font-medium leading-8 text-primary mb-4">
          Start Booking
        </h3>

        <div className="text-4xl leading-10 text-primary">
          <span className="text-accent">
            ₹ {hotel.price?.toLocaleString("en-IN")}
          </span>
          <span className="text-gray-text text-base ml-1"> per day</span>
        </div>
      </div>

      <button
        onClick={handleBookNow}
        className="w-full bg-secondary text-white py-3 px-6 rounded-lg font-medium text-lg shadow-lg hover:bg-blue-700 transition-colors"
      >
        Book Now!
      </button>
    </div>
  );
};

export default BookingCard;

