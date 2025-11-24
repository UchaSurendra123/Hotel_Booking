import React from 'react'

const NavigationHeader = () => {
  return (
    <header className="relative w-full h-20 bg-white flex items-center justify-center">
      <h1 className="text-primary-blue text-[26px] font-medium leading-[39px]">
        DeccanStay
      </h1>
      <div className="absolute bottom-0 left-0 w-full h-px bg-light-gray"></div>
    </header>
  )
}

export default NavigationHeader
