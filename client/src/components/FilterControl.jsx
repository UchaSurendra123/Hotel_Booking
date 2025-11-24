import React from 'react'

const FilterControl = () => {
  const viewOptions = [
    { icon: 'https://static.codia.ai/image/2025-10-29/MVJHXrS7W8.png', active: false },
    { icon: 'https://static.codia.ai/image/2025-10-29/MARYiOYw1C.png', active: false },
    { icon: 'https://static.codia.ai/image/2025-10-29/Qf9BpgDk8Q.png', active: true },
    { icon: 'https://static.codia.ai/image/2025-10-29/URESC54Z9X.png', active: false },
    { icon: 'https://static.codia.ai/image/2025-10-29/mbXOa8hKPf.png', active: false }
  ]

  return (
    <div className="flex items-center justify-between mb-8">
      {/* Left Side - View Options */}
      <div className="flex space-x-4">
        {viewOptions.map((option, index) => (
          <button
            key={index}
            className={`w-14 h-14 border border-gray-300 rounded-lg overflow-hidden ${
              option.active ? 'ring-2 ring-primary' : ''
            }`}
          >
            <img 
              src={option.icon} 
              alt={`View option ${index + 1}`} 
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Right Side - Filters and Add Button */}
      <div className="flex space-x-4">
        <div className="flex items-center bg-white border border-gray-300 rounded-lg px-5 py-3">
          <span className="text-gray-dark tracking-wide mr-4">This Month</span>
          <img 
            src="https://static.codia.ai/image/2025-10-29/PFzozZMsuy.png" 
            alt="Dropdown" 
            className="w-6 h-6"
          />
        </div>

        <div className="flex items-center bg-white border border-gray-300 rounded-lg px-5 py-3">
          <span className="text-gray-dark tracking-wide mr-4">Bookings</span>
          <img 
            src="https://static.codia.ai/image/2025-10-29/RvgUGr70Af.png" 
            alt="Dropdown" 
            className="w-6 h-6"
          />
        </div>

        <button className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg hover:bg-blue-600 transition-colors">
          +
        </button>
      </div>
    </div>
  )
}

export default FilterControl
