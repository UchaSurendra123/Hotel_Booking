import React from 'react'

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="font-poppins font-medium text-4xl text-dark">
            Forget Busy Work,<br />
            Start Next Vacation
          </h1>
          
          <p className="text-gray text-lg leading-relaxed">
            We provide what you need to enjoy your<br />
            holiday with family. Time to make another<br />
            memorable moments.
          </p>
          
          <div className="flex flex-wrap gap-8 pt-8">
            <div className="flex items-center space-x-3">
              <img src="https://static.codia.ai/image/2025-10-23/fcyhuP4szj.png" alt="Travelers" className="w-8 h-8" />
              <span className="text-gray">
                <span className="text-secondary font-medium">2500</span> Users
              </span>
            </div>
            
            <div className="flex items-center space-x-3">
              <img src="https://static.codia.ai/image/2025-10-23/75LHSFXtb1.png" alt="Treasure" className="w-8 h-8" />
              <span className="text-gray">
                <span className="text-secondary font-medium">200</span> treasure
              </span>
            </div>
            
            <div className="flex items-center space-x-3">
              <img src="https://static.codia.ai/image/2025-10-23/YcnzEKDxf8.png" alt="Cities" className="w-8 h-8" />
              <span className="text-gray">
                <span className="text-secondary font-medium">100</span> cities
              </span>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="relative z-10">
            <img 
              src="https://plus.unsplash.com/premium_photo-1754262061287-355cf78819dc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1032" 
              alt="Hotel Room" 
              className="w-full h-auto rounded-2xl"
            />
          </div>
          <div className="absolute inset-0 border-2 border-gray-200 rounded-2xl transform translate-x-4 translate-y-4"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
