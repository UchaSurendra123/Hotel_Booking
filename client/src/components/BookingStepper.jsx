import React from "react";

const BookingStepper = () => {
  return (
    <div className="flex items-center justify-center mt-12 mb-16">
      <div className="flex items-center space-x-8">
        {/* Step 1 - Completed (Green Background, White Tick) */}
        <div className="flex flex-col items-center">
          <div className="w-14 h-14 bg-[#1ABC9C] rounded-full flex items-center justify-center shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="3"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        {/* Connector line */}
        <div className="w-28 h-px bg-gray-300"></div>

        {/* Step 2 - Gray circle with number 2 */}
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center shadow-sm">
            <span className="text-2xl font-semibold text-gray-700">2</span>
          </div>
        </div>

        {/* Connector line */}
        <div className="w-28 h-px bg-gray-300"></div>

        {/* Step 3 - Gray circle with number 3 */}
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center shadow-sm">
            <span className="text-2xl font-semibold text-gray-700">3</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingStepper;

