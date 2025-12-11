import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "react-toastify"; 

const API_URL = "http://localhost:5000/api/auth/login";
const GOOGLE_LOGIN_URL = "http://localhost:5000/api/auth/google-login";

const InputField = ({ label, placeholder, value, onChange, type = "text" }) => (
  <div className="w-full mb-3">
    <label className="block text-[14px] font-medium text-gray-700 mb-1">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required
      className="w-full h-10 px-3 text-[14px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
    />
  </div>
);

const PasswordField = ({ label, placeholder, value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full mb-3">
      <label className="block text-[14px] font-medium text-gray-700 mb-1">{label}</label>
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required
          className="w-full h-10 px-3 pr-10 text-[14px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-all"
        >
          {showPassword ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
};

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleCreateAccount = () => navigate("/register");
  const handleForgotPassword = () => navigate("/forgot-password");

  useEffect(() => {
    if (window.google) {
      window.google.accounts.id.initialize({
        client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        callback: handleGoogleResponse,
      });

      window.google.accounts.id.renderButton(
        document.getElementById("google-signin-button"),
        { theme: "outline", size: "medium", width: "100%" }
      );
    }
  }, []);

  const handleGoogleResponse = async (response) => {
    try {
      setLoading(true);
      const res = await fetch(GOOGLE_LOGIN_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: response.credential }),
      });
      const data = await res.json();
      if (res.ok) {
        toast.success("Logged in with Google 🎉"); 
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        navigate("/");
      } else toast.error(data.message || "Google login failed"); 
    } catch (err) {
      console.error(err);
      toast.error("Server error during Google login"); 
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!username || !password) {
      toast.warn("Please enter both username and password"); 
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: username.trim(), password: password.trim() }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Login successful 🎉"); 
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        setTimeout(() => navigate("/"), 1200);
      } else {
        toast.error(data.message || "Invalid username or password"); 
      }
    } catch (err) {
      console.error(err);
      toast.error("Server error — please check backend connection."); 
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-1 flex flex-col justify-center px-6 py-6 bg-white">
      <div className="max-w-[400px] mx-auto w-full bg-white p-6 rounded-lg shadow">
        <div className="mb-6 text-center">
          <h2 className="text-[20px] font-semibold leading-[1.2] mb-1 text-gray-900">
            <span className="text-blue-600">Welcome</span> Back
          </h2>
          <p className="text-[12px] text-gray-600">Please login to your account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          {error && <p className="text-red-500 text-[13px]">{error}</p>}

          <InputField
            label="Username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <PasswordField
            label="Password"
            placeholder="Enter your password"
            value={password}
            onChange={(val) => setPassword(val)}
          />

          <div className="flex justify-end pt-1">
            <button
              type="button"
              onClick={handleForgotPassword}
              className="text-[12px] text-blue-600 hover:underline"
            >
              Forgot Password?
            </button>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <button
              type="submit"
              disabled={loading}
              className="w-40 h-9 bg-blue-600 text-white text-[13px] font-medium rounded-lg hover:bg-blue-700 transition-all"
            >
              {loading ? "Logging in..." : "Login"}
            </button>

            <p> Or Continue With </p>

            <div id="google-signin-button" style={{ width: "170px", height: "36px" }}></div>
          </div>

          <p className="text-[12px] text-gray-600 text-center mt-3">
            Don’t have an account?{" "}
            <button
              type="button"
              onClick={handleCreateAccount}
              className="text-blue-600 font-medium hover:underline"
            >
              Create Account
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
