import React from "react";
import Header from "../components/Header";
import ImageSection from "../components/ImageSection";
import AdminLoginForm from "../components/AdminLoginForm";
import Footer from "../components/Footer"; // ✅ Import Footer

const AdminLogin = ({ onAdminLogin }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white font-poppins">
      {/* 🌐 Sticky Navbar */}
      <div className="sticky top-0 z-50 bg-white shadow-md">
        <Header />
      </div>

      {/* 🖼️ Split Layout: Left (Deccan Stay) + Right (Admin Login Form) */}
      <div className="flex flex-1 items-stretch mt-20">
        {/* 🏨 Left Side - Deccan Stay Image */}
        <ImageSection />

        {/* 🧾 Right Side - Admin Login Form */}
        <div className="flex-1 flex items-center justify-center px-10 py-16">
          <div className="max-w-md w-full">
            <AdminLoginForm onAdminLogin={onAdminLogin} />
          </div>
        </div>
      </div>

      {/* 👣 Footer Section */}
      <Footer />
    </div>
  );
};

export default AdminLogin;
