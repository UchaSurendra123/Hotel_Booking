import React from 'react'

const BookingDetails = () => {
  return (
    <div className="flex-1">
      <h2 className="text-2xl text-primary-blue mb-8">Transfer LankaStay:</h2>
      
      <div className="space-y-6">
        <div>
          <p className="text-2xl text-primary-blue leading-10">
            2 Days at Blue Origin Fams,<br />
            Galle, Sri Lanka
          </p>
        </div>
        
        <div>
          <p className="text-2xl font-medium text-primary-blue">
            Total: <span className="font-normal">$400 USD</span>
          </p>
        </div>
        
        <div>
          <p className="text-2xl text-primary-blue">
            Initial Payment: <span className="font-medium">$200</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default BookingDetails
