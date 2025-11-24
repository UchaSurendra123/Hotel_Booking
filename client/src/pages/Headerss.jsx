import React from 'react'

const Headerss = () => {
  return (
    <header className="bg-gray-bg px-6 py-8">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-xl font-semibold text-black tracking-wide mb-2">
            Hello, User
          </h2>
          <p className="text-sm text-gray-light tracking-wide">
            Have a nice day
          </p>
        </div>
        
        <div className="flex items-center gap-6">
          <img 
            src="https://static.codia.ai/image/2025-10-28/WuAnhG6pOY.png" 
            alt="Notifications" 
            className="w-6 h-6"
          />
          
          <div className="w-px h-12 bg-gray-300"></div>
          
          <div className="flex items-center gap-4 pr-2">
            <img 
              src="https://static.codia.ai/image/2025-10-28/dBKtQVuRL8.png" 
              alt="Profile" 
              className="w-11 h-11 rounded-full"
            />
            <div className="flex items-center gap-4">
              <div>
                <p className="font-semibold text-black tracking-wide">John Wick</p>
                <p className="text-xs text-black tracking-wide">User</p>
              </div>
              <img 
                src="https://static.codia.ai/image/2025-10-28/oqqvzXHJ08.png" 
                alt="Dropdown" 
                className="w-6 h-6"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Headerss































