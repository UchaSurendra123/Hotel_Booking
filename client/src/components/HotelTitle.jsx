import React from "react";

const HotelTitle = ({ hotel }) => {
  return (
    <div className="text-center lg:text-left">
      <h1 className="text-3xl font-bold text-gray-900">{hotel.name}</h1>
      <p className="text-gray-600 mt-2">{hotel.location || "Beautiful place to stay"}</p>
    </div>
  );
};

export default HotelTitle;
