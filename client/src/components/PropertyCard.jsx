import React from 'react'

const PropertyCard = ({ hotel }) => {
  if (!hotel) return null

  return (
    <div className="border border-gray-300 rounded-2xl p-6 shadow-md w-full lg:w-1/2 bg-white">
      {/* 🏨 Hotel Image — same as home page */}
      <div className="w-full h-80 rounded-lg overflow-hidden mb-6">
        <img
          src={hotel.image} // uses same image URL passed from home page
          alt={hotel.name}
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* 🏠 Hotel Name */}
      <h3 className="text-2xl font-semibold text-primary-blue mb-2">
        {hotel.name}
      </h3>

      {/* 📍 Hotel Location */}
      {hotel.location && (
        <p className="text-gray-500 text-base mb-3">
          📍 {hotel.location}
        </p>
      )}

      {/* 📄 Description */}
      {hotel.description && (
        <p className="text-gray-600 text-base mb-4">
          {hotel.description}
        </p>
      )}

      {/* 💰 Price in ₹ per day */}
      <p className="text-xl font-medium text-primary-blue">
        ₹{hotel.price?.toLocaleString('en-IN')} per day
      </p>
    </div>
  )
}

export default PropertyCard
