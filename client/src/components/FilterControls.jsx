import React from 'react'

const FilterControls = () => {
  const dateOptions = [
    { icon: "https://static.codia.ai/image/2025-10-28/pP9OX644XO.png", active: false },
    { icon: "https://static.codia.ai/image/2025-10-28/vhL3R6vmmA.png", active: false },
    { icon: "https://static.codia.ai/image/2025-10-28/x4vWMFNWUT.png", active: true },
    { icon: "https://static.codia.ai/image/2025-10-28/BwQoqt8NXz.png", active: false },
    { icon: "https://static.codia.ai/image/2025-10-28/Lu8DHLFsWR.png", active: false }
  ]

  return (
    <div className="flex items-center gap-4">
      <div className="flex gap-4">
        {dateOptions.map((option, index) => (
          <div key={index} className="relative">
            <img 
              src={option.icon} 
              alt={`Option ${index + 1}`} 
              className="w-13 h-13 border border-gray-border rounded"
            />
            {option.active && (
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-primary rounded-full"></div>
            )}
          </div>
        ))}
      </div>
      
      <div className="flex gap-4 ml-8">
        <div className="flex items-center bg-white border border-gray-border rounded px-4 py-3 min-w-56">
          <span className="text-gray-600 text-sm tracking-wide">Booking</span>
          <img 
            src="https://static.codia.ai/image/2025-10-28/d01FupoweN.png" 
            alt="Dropdown" 
            className="w-6 h-6 ml-auto"
          />
        </div>
        
        <div className="flex items-center bg-white border border-gray-border rounded px-4 py-3 min-w-56">
          <span className="text-gray-600 text-sm tracking-wide">Refund</span>
          <img 
            src="https://static.codia.ai/image/2025-10-28/4AW0gBn0xq.png" 
            alt="Dropdown" 
            className="w-6 h-6 ml-auto"
          />
        </div>
      </div>
      
      <button className="bg-primary text-white rounded-full w-13 h-13 flex items-center justify-center ml-auto shadow-lg">
        <span className="text-2xl font-extrabold">+</span>
      </button>
    </div>
  )
}

export default FilterControls
