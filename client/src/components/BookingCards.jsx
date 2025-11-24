import React from 'react'

const BookingCards = () => {
  return (
    <div className="bg-white border-2 border-gray-300 rounded-lg p-4 max-w-sm">
      <div className="relative mb-4">
        <img 
          src="https://static.codia.ai/image/2025-10-28/1KhWZCxUtA.png" 
          alt="Blue Origin Fams" 
          className="w-full h-80 object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
        <div className="absolute top-4 right-4 bg-secondary text-white px-3 py-1 rounded-tr-2xl rounded-bl-2xl">
          <span className="font-poppins text-sm font-light">$200 per night</span>
        </div>
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="font-poppins text-xl font-normal mb-1">Blue Origin Fams</h3>
          <p className="font-poppins text-sm font-light">Galle, Sri Lanka</p>
        </div>
      </div>
      
      <div className="space-y-4 text-dark font-poppins">
        <div className="text-base">20 Jan - 22 Jan</div>
        <div className="text-base">02 Days</div>
        <div className="text-base leading-relaxed">
          Galle to Colombo Road 245, <br />
          Main Street, Galle.
        </div>
        <div className="text-base">Initial Payment $200</div>
        <div className="text-base font-medium">Total Payment $400</div>
      </div>
      
      <div className="flex gap-2 mt-6 justify-end">
        <button className="border border-gray-border rounded p-2">
          <img 
            src="https://static.codia.ai/image/2025-10-28/ZO2FjbfJgq.png" 
            alt="Edit" 
            className="w-8 h-8"
          />
        </button>
        <button className="border border-gray-border rounded p-2">
          <img 
            src="https://static.codia.ai/image/2025-10-28/FZXhEdLT04.png" 
            alt="Delete" 
            className="w-8 h-8"
          />
        </button>
      </div>
    </div>
  )
}

export default BookingCards
