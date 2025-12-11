import React from 'react'

const Headers = () => {
  return (
    <header className="bg-gray-50 px-6 py-6 border-b border-gray-200 sticky top-0 z-50">
      <div className="flex justify-between items-center">
       
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-1">
            Hello, Admin
          </h2>
          <p className="text-sm text-gray-500">Have a nice day</p>
        </div>

        
        <div className="flex items-center space-x-6">
         
          

          
          

         
          <img
            src="https://static.codia.ai/image/2025-10-28/KOim5Xi8Vx.png"
            alt="Notifications"
            className="w-6 h-6 cursor-pointer hover:opacity-80 transition"
          />

         
          <div className="w-px h-10 bg-gray-300"></div>

         
          <div className="flex items-center space-x-4 cursor-pointer">
           
            
            <div>
              <p className="font-semibold text-gray-800">Welcome</p>
              <p className="text-sm text-gray-600">Admin</p>
            </div>
            <img
              src="https://static.codia.ai/image/2025-10-28/8vaQ6zP589.png"
              alt="Dropdown"
              className="w-6 h-6"
            />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Headers
