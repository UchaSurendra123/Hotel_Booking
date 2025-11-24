import React from 'react'
import { useNavigate } from 'react-router-dom' // ✅ Import navigation

const RegisterSuccess = () => {
  const navigate = useNavigate()

  const handleBackToLogin = () => {
    navigate('/login') // ✅ Navigate to login page
  }

  return (
    <div 
      className="min-h-screen bg-gray-50 relative overflow-hidden"
      style={{
        backgroundImage: `url('https://static.codia.ai/image/2025-10-23/FhXZboVxqG.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Main Content Container */}
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="relative">
          {/* White Card Container */}
          <div 
            className="bg-white/90 border border-gray-200 rounded-[30px] p-16 text-center shadow-lg"
            style={{ width: '1271px', height: '606px' }}
          >
            {/* Logo */}
            <h1 className="text-5xl font-medium mb-16" style={{ color: '#152C5B' }}>
              <span style={{ color: '#3252DF' }}>Deccan</span>Stay.
            </h1>

            {/* Success Icon */}
            <div className="flex justify-center mb-8">
              <img 
                src="https://static.codia.ai/image/2025-10-27/Mq37rdH80o.png" 
                alt="Success checkmark"
                className="w-24 h-24"
              />
            </div>

            {/* Success Message */}
            <h2 
              className="text-6xl font-medium mb-6"
              style={{ 
                color: '#3252DF',
                lineHeight: '96px'
              }}
            >
              Account Created Successfully
            </h2>

            {/* Subtitle */}
            <p 
              className="text-2xl mb-16"
              style={{ 
                color: '#152C5B',
                lineHeight: '36px'
              }}
            >
              Please Check Your Email
            </p>

            {/* ✅ Back to Login Button */}
            <button 
              onClick={handleBackToLogin}
              className="bg-blue-600 text-white px-16 py-4 rounded-lg text-4xl font-medium hover:bg-blue-700 transition-colors"
              style={{ 
                backgroundColor: '#003DFC',
                height: '80px',
                lineHeight: '60px'
              }}
            >
              Back to Login Page
            </button>
          </div>

          {/* Decorative Elements */}
          <div className="absolute bottom-0 left-0">
            <img 
              src="https://static.codia.ai/image/2025-10-27/q1npbnQvgf.png" 
              alt="Decorative element"
              className="w-8 h-5"
              style={{
                position: 'absolute',
                left: '566px',
                bottom: '-20px'
              }}
            />
          </div>
          
          <div className="absolute bottom-0 center">
            <img 
              src="https://static.codia.ai/image/2025-10-27/aPTRtmZccd.png" 
              alt="Decorative element"
              className="w-10 h-6"
              style={{
                position: 'absolute',
                left: '621px',
                bottom: '-23px'
              }}
            />
          </div>
          
          <div className="absolute bottom-0 right-0">
            <img 
              src="https://static.codia.ai/image/2025-10-27/kdBzG0e0sU.png" 
              alt="Decorative element"
              className="w-8 h-5"
              style={{
                position: 'absolute',
                left: '684px',
                bottom: '-20px'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterSuccess
