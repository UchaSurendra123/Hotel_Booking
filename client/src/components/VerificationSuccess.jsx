import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import navigation hook

const VerificationSuccess = () => {
  const navigate = useNavigate(); // ✅ Initialize navigate function

  const handleViewDashboard = () => {
    // Navigate to dashboard page
     navigate("/owner-dashboard");
  };

  return (
    <div className="min-h-screen relative overflow-hidden font-poppins">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://static.codia.ai/image/2025-10-28/sgSQ9f8Sr0.png')`,
        }}
      />

      {/* Main Content Container */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        {/* Verification Card */}
        <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-[30px] p-12 max-w-md w-full text-center shadow-lg">
          {/* Logo */}
          <h1 className="font-poppins font-medium text-4xl text-dark">
            <span className="text-secondary">Deccan</span>
            <span className="text-primary-blue">Stay</span>
          </h1>

          {/* Success Icon */}
          <div className="flex justify-center mb-8">
            <img
              src="https://static.codia.ai/image/2025-10-28/OxjE2EeAYy.png"
              alt="Success checkmark"
              className="w-[100px] h-[100px]"
            />
          </div>

          {/* Success Message */}
          <p className="text-primary-blue text-xl font-medium mb-12 leading-relaxed">
             we verified, Now You can Access Dashboard
          </p>

          {/* View Dashboard Button */}
          <button
            onClick={handleViewDashboard}
            className="w-full h-10 bg-blue-700 text-white text-[20px] font-medium leading-[20px] rounded-[10px]"
          >
            View Dashboard
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-8">
        <img
          src="https://static.codia.ai/image/2025-10-28/rGDUewwcDi.png"
          alt="Decorative element"
          className="w-8 h-5 opacity-60"
        />
        <img
          src="https://static.codia.ai/image/2025-10-28/v1HW8yzAFp.png"
          alt="Decorative element"
          className="w-10 h-6 opacity-60"
        />
        <img
          src="https://static.codia.ai/image/2025-10-28/9kv1BiJ0hE.png"
          alt="Decorative element"
          className="w-8 h-5 opacity-60"
        />
      </div>
    </div>
  );
};

export default VerificationSuccess;
