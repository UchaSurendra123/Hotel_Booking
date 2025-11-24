import React from 'react'
import { useNavigate } from 'react-router-dom' // ✅ Import navigation hook

const Footer = () => {
  const navigate = useNavigate() // ✅ Initialize navigation

  const handleHotelRegister = () => {
    navigate('/hotel-registration') // ✅ Navigate to hotel registration page
  }

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* 🏨 Brand Info */}
          <div className="space-y-4">
            <h3 className="font-poppins font-medium text-4xl text-dark">
              <span className="text-secondary">Deccan</span>Stay
            </h3>
            <p className="text-gray-600 leading-6">
              We kaboom your beauty holiday<br />
              instantly and memorable.
            </p>
          </div>

          <div className="lg:col-span-1"></div>

          {/* 🏢 Hotel Owner CTA */}
          <div className="space-y-4 text-right lg:text-left">
            <h4 className="font-poppins font-medium text-2xl text-dark">
              Become a Hotel Owner
            </h4>
            <button
              onClick={handleHotelRegister}
              className="bg-blue-700 text-white px-6 py-2 rounded-lg font-medium shadow-lg transition-colors"
            >
              Register Now
            </button>
          </div>
        </div>

        {/* 📄 Footer Bottom */}
        <div className="mt-6 pt-1 border-t-4 border-primary">
          <p className="text-center text-gray-600 text-sm font-medium">
            © 2025 • All rights reserved • Deccan Stay
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
