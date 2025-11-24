import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// 🌐 Public Components
import Header from "./components/Header";
import Hero from "./components/Hero";
import DemoHotels from "./components/DemoHotels";
import Footer from "./components/Footer";
import BookingPage from "./pages/BookingPage";
import HotelDetail from "./pages/HotelDetail";
import HotelsList from "./pages/HotelsList";
import About from "./pages/About";
import Contact from "./pages/Contact";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import RegisterSuccess from "./components/RegisterSuccess";
import VerificationSuccess from "./components/VerificationSuccess";
import HotelRegistrationForm from "./components/HotelRegistrationForm";
import PaymentStepper from "./components/PaymentStepper";
import PaymentContent from "./components/PaymentContent";
import BookingConfirmation from "./components/BookingConfirmation";

// 🧭 Admin Components
import Sidebar from "./components/Sidebar";
import Headers from "./components/Headers";
import Dashboard from "./pages/Dashboard";
import AdminLogin from "./pages/AdminLogin";

// 🆕 Admin Sub Pages
import Refund from "./pages/Refund";
import Message from "./pages/Message";
import Help from "./pages/Help";
import Setting from "./pages/Setting";
import UserBookings from "./pages/UserBookings";

// 🆕 User / Owner Pages
import UserDashboard from "./pages/UserDashboard";
import OwnerDashboard from "./pages/OwnerDashboard";

// 🆕 Password Pages
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import ResetPasswordAdmin from "./pages/ResetPasswordAdmin";

// 🧱 Layouts
const DashboardLayoutNew = ({ children, onLogout }) => (
  <div className="flex min-h-screen bg-gray-100">
    <Sidebar onLogout={onLogout} />
    <div className="flex-1 flex flex-col">
      <Headers />
      <main className="flex-1 p-6">{children}</main>
    </div>
  </div>
);

const PublicLayout = ({ children }) => (
  <div className="min-h-screen bg-white font-poppins flex flex-col">
    <Header />
    <div className="pt-20"> {/* 👈 Adds space below fixed header */}</div>
    <main className="flex-grow">{children}</main>
    <Footer />
  </div>
);

function App() {
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);

  // ✅ Restore admin login from localStorage
  useEffect(() => {
    const loggedIn = localStorage.getItem("isAdminAuthenticated") === "true";
    setIsAdminAuthenticated(loggedIn);
  }, []);

  // ✅ Handle admin login/logout
  const handleAdminLogin = () => {
    setIsAdminAuthenticated(true);
    localStorage.setItem("isAdminAuthenticated", "true");
  };

  const handleAdminLogout = () => {
    setIsAdminAuthenticated(false);
    localStorage.removeItem("isAdminAuthenticated");
  };

  return (
    <Router>
      <Routes>
        {/* 🌐 Public Pages */}
        <Route
          path="/"
          element={
            <PublicLayout>
              <Hero />
              <DemoHotels/>
            </PublicLayout>
          }
        />
        <Route
          path="/book"
          element={
            <PublicLayout>
              <BookingPage />
            </PublicLayout>
          }
        />
        <Route
          path="/hotel/:id"
          element={
            <PublicLayout>
              <HotelDetail />
            </PublicLayout>
          }
        />
        <Route
          path="/hotels"
          element={
            <PublicLayout>
              <HotelsList />
            </PublicLayout>
          }
        />
        <Route
          path="/payment"
          element={
            <PublicLayout>
              <section className="max-w-7xl mx-auto px-4 py-10">
                <PaymentStepper />
                <div className="mt-8">
                  <PaymentContent />
                </div>
              </section>
            </PublicLayout>
          }
        />
        <Route
          path="/booking-confirmation"
          element={
            <PublicLayout>
              <BookingConfirmation />
            </PublicLayout>
          }
        />

        {/* 🧭 User Dashboard Pages */}
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/owner-dashboard" element={<OwnerDashboard />} />

        {/* 🔑 Auth Pages */}
        <Route
          path="/login"
          element={
            <PublicLayout>
              <LoginPage />
            </PublicLayout>
          }
        />
        <Route
          path="/register"
          element={
            <PublicLayout>
              <RegisterPage />
            </PublicLayout>
          }
        />
        <Route
          path="/register-success"
          element={
            <PublicLayout>
              <RegisterSuccess />
            </PublicLayout>
          }
        />
        <Route
          path="/verification-success"
          element={
            <PublicLayout>
              <VerificationSuccess />
            </PublicLayout>
          }
        />
        <Route
          path="/hotel-registration"
          element={
            <PublicLayout>
              <HotelRegistrationForm />
            </PublicLayout>
          }
        />
        <Route
          path="/about"
          element={
            <PublicLayout>
              <About />
            </PublicLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <PublicLayout>
              <Contact />
            </PublicLayout>
          }
        />
  

          {/* 🆕 Password Pages */}
        <Route
          path="/forgot-password"
          element={
            <PublicLayout>
              <ForgotPassword />
            </PublicLayout>
          }
        />
        <Route
          path="/reset-password"
          element={
            <PublicLayout>
              <ResetPassword />
            </PublicLayout>
          }
        />

        {/* 🆕 Admin Password Pages */}
        <Route
          path="/admin-forgot-password"
          element={
            <PublicLayout>
              <ForgotPassword />
            </PublicLayout>
          }
        />
        <Route
          path="/admin-reset-password"
          element={
            <PublicLayout>
              <ResetPasswordAdmin />
            </PublicLayout>
          }
        />

        {/* 🔐 Admin Login */}
        <Route
          path="/admin-login"
          element={
            isAdminAuthenticated ? (
              <Navigate to="/admin-dashboard" replace />
            ) : (
              <AdminLogin onAdminLogin={handleAdminLogin} />
            )
          }
        />

        {/* 🧭 Protected Admin Dashboard */}
        <Route
          path="/admin-dashboard"
          element={
            isAdminAuthenticated ? (
              <DashboardLayoutNew onLogout={handleAdminLogout}>
                <Dashboard />
              </DashboardLayoutNew>
            ) : (
              <Navigate to="/admin-login" replace />
            )
          }
        />

        {/* 🧾 Admin Sub Pages */}
        <Route
          path="/admin-dashboard/bookings"
          element={
            isAdminAuthenticated ? (
              <DashboardLayoutNew onLogout={handleAdminLogout}>
                <UserBookings />
              </DashboardLayoutNew>
            ) : (
              <Navigate to="/admin-login" replace />
            )
          }
        />
        <Route
          path="/admin-dashboard/refund"
          element={
            isAdminAuthenticated ? (
              <DashboardLayoutNew onLogout={handleAdminLogout}>
                <Refund />
              </DashboardLayoutNew>
            ) : (
              <Navigate to="/admin-login" replace />
            )
          }
        />
        <Route
          path="/admin-dashboard/message"
          element={
            isAdminAuthenticated ? (
              <DashboardLayoutNew onLogout={handleAdminLogout}>
                <Message />
              </DashboardLayoutNew>
            ) : (
              <Navigate to="/admin-login" replace />
            )
          }
        />
        <Route
          path="/admin-dashboard/help"
          element={
            isAdminAuthenticated ? (
              <DashboardLayoutNew onLogout={handleAdminLogout}>
                <Help />
              </DashboardLayoutNew>
            ) : (
              <Navigate to="/admin-login" replace />
            )
          }
        />
        <Route
          path="/admin-dashboard/setting"
          element={
            isAdminAuthenticated ? (
              <DashboardLayoutNew onLogout={handleAdminLogout}>
                <Setting />
              </DashboardLayoutNew>
            ) : (
              <Navigate to="/admin-login" replace />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

