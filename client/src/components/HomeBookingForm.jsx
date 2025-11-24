import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomeBookingForm = () => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [persons, setPersons] = useState("1");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!checkIn || !checkOut || !location) {
      alert("Please fill all fields before searching.");
      return;
    }

    navigate(
      `/hotels?location=${encodeURIComponent(location)}&persons=${persons}&checkIn=${checkIn}&checkOut=${checkOut}`
    );
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      <div className="bg-lightBlue rounded-full p-8">
        <div className="flex flex-wrap items-center justify-center gap-4">

          {/* ✅ Check-In & Check-Out Box */}
          <div className="bg-white rounded-xl p-4 shadow-lg flex items-center space-x-4 min-w-0 flex-1 max-w-xs">
            <img
              src="https://static.codia.ai/image/2025-10-23/FcvwZJ2PRA.png"
              alt="Calendar"
              className="w-6 h-6"
            />
            <div className="flex flex-col">
              <label className="font-inter text-sm font-semibold text-gray-600">
                Check In
              </label>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="border-none outline-none text-base font-medium"
              />
              <label className="font-inter text-sm font-semibold text-gray-600 mt-2">
                Check Out
              </label>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="border-none outline-none text-base font-medium"
              />
            </div>
          </div>

          {/* ✅ Persons Dropdown (1–5) */}
          <div className="bg-white rounded-xl p-4 shadow-lg flex items-center space-x-4 min-w-0 flex-1 max-w-xs">
            <img
              src="https://static.codia.ai/image/2025-10-23/OKFUrF8pcF.png"
              alt="Person"
              className="w-6 h-6"
            />
            <span className="font-inter font-semibold text-black">Persons</span>
            <select
              value={persons}
              onChange={(e) => setPersons(e.target.value)}
              className="border-none outline-none font-semibold text-black bg-transparent"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            
            
          </div>

          {/* ✅ Location Box */}
          <div className="bg-white rounded-xl p-4 shadow-lg flex items-center space-x-4 min-w-0 flex-1 max-w-xs">
            <img
              src="https://static.codia.ai/image/2025-10-23/7KgrZJG86c.png"
              alt="Location"
              className="w-6 h-6"
            />
            <input
              type="text"
              placeholder="Select Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="flex-1 border-none outline-none font-inter font-semibold text-black placeholder-gray-400"
            />
          </div>

          {/* ✅ Search Button */}
          <button
            onClick={handleSearch}
            className="bg-blue-700 text-white px-6 py-2 rounded-lg font-medium shadow-lg transition-colors"
          >
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeBookingForm;


