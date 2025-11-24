import React from 'react'
import NavigationHeader from './NavigationHeader'
import ConfirmationContent from './ConfirmationContent'

const BookingConfirmation = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto bg-white font-poppins">
      <NavigationHeader />
      <ConfirmationContent />
    </div>
  )
}

export default BookingConfirmation
