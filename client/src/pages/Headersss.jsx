import React from 'react'

const Headersss = () => {
  return (
    <header className="bg-gray-bg px-6 py-8">
      <div className="flex justify-between items-start">
        {/* Left Side - Greeting */}
        <div>
          <h2 className="text-xl font-semibold text-black tracking-wide mb-2">
            Hello, Hotel Owner
          </h2>
          <p className="text-sm text-gray-medium tracking-wide">
            Have a nice day
          </p>
        </div>

        {/* Right Side - Profile & Notifications */}
        <div className="flex items-center space-x-6">
          {/* Notification Icon */}
          <img 
            src="https://static.codia.ai/image/2025-10-29/QGds66jYiY.png" 
            alt="Notifications" 
            className="w-6 h-6 cursor-pointer"
          />
          
          <div className="w-px h-12 bg-gray-300"></div>
          
          {/* Profile Section */}
          <div className="flex items-center space-x-4 cursor-pointer">
            <img 
              src="https://static.codia.ai/image/2025-10-29/sGbRkc9TJP.png" 
              alt="Profile" 
              className="w-11 h-11 rounded-full"
            />
            <div>
              <p className="font-semibold text-black tracking-wide">Welcome</p>
              <p className="text-xs text-black tracking-wide">Hotel Owner</p>
            </div>
            <img 
              src="https://static.codia.ai/image/2025-10-29/xEiEdQ0c7h.png" 
              alt="Dropdown" 
              className="w-6 h-6"
            />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Headersss
