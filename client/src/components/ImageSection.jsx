import React from 'react'

const ImageSection = () => {
  return (
    <div className="relative w-[700px] h-[90vh] flex-shrink-0 ml-8 my-8">
      <img 
        src="https://static.codia.ai/image/2025-10-27/H86w2cMBW9.png" 
        alt="Hotel background" 
        className="w-full h-full object-cover rounded-xl shadow-lg"
      />
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white bg-opacity-70 border border-gray-300 rounded-[30px] w-[662px] h-[480px] flex items-center justify-center relative">
           <h1 className="text-[80px] font-medium leading-[120px] text-center">
            <span style={{ color: '#3256EB' }}>Deccan</span>
            <span className="text-dark-blue">Stay</span>
          </h1>
        </div>
      </div>

      <div className="absolute bottom-[200px] left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
        <img 
          src="https://static.codia.ai/image/2025-10-27/J4QCBGr3dB.png" 
          alt="Social icon" 
          className="w-4 h-[18px]"
        />
        <img 
          src="https://static.codia.ai/image/2025-10-27/gdSfr7pSbt.png" 
          alt="Social icon" 
          className="w-5 h-[23px]"
        />
        <img 
          src="https://static.codia.ai/image/2025-10-27/UKjyzZcxtB.png" 
          alt="Social icon" 
          className="w-4 h-[18px]"
        />
      </div>
    </div>
  )
}

export default ImageSection
