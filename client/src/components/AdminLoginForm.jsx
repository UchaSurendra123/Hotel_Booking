import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminLoginForm = ({ onAdminLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "admin123") {
      localStorage.setItem("isAdminAuthenticated", "true");
      onAdminLogin?.();
      navigate("/admin-dashboard");
    } else {
      alert("Invalid credentials! Use admin / admin123");
    }
  };

  return (
    <div className="flex-1 flex flex-col justify-center px-8 sm:px-16">
      <div className="max-w-sm mx-auto w-full bg-white p-8 rounded-2xl shadow-md border border-gray-100">
        <h2 className="text-3xl font-semibold text-center text-black mb-2">
          Admin Login
        </h2>
        <p className="text-gray-600 text-center mb-6 text-sm">
          Please login to access your admin dashboard
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter admin username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full h-9 text-sm px-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

         
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter admin password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-9 text-sm px-3 pr-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-2 flex items-center"
              >
                <img
                  src="https://static.codia.ai/image/2025-10-27/wHR07tOuSJ.png"
                  alt="Toggle password visibility"
                  className="w-6 h-5 opacity-80 hover:opacity-100 transition"
                />
              </button>
            </div>
          </div>

         
          <div className="text-right">
            <button
              type="button"
              onClick={() => navigate("/admin-reset-password")}
              className="text-blue-600 text-sm hover:underline"
            >
              Forgot Password?
            </button>
          </div>

         
          <button
            type="submit"
            className="w-full h-10 bg-blue-700 text-white text-base font-medium rounded-lg hover:bg-blue-800 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLoginForm;
