import React from 'react'

const ActionButtons = () => {
  const handlePayNow = () => {
    // Handle payment logic here
    console.log('Processing payment...')
  }

  const handleCancel = () => {
    // Handle cancel logic here
    console.log('Payment cancelled')
  }

  return (
    <div className="flex justify-center space-x-4 mt-16">
      <button
        onClick={handlePayNow}
        className="px-16 py-4 bg-button-blue text-white text-2xl font-medium rounded-lg hover:bg-blue-700 transition-colors"
      >
        Pay Now
      </button>
      
      <button
        onClick={handleCancel}
        className="px-8 py-3 bg-light-gray text-gray-500 text-lg rounded hover:bg-gray-200 transition-colors"
      >
        Cancel
      </button>
    </div>
  )
}

export default ActionButtons
