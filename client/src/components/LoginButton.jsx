import React from 'react'

const LoginButton = () => {
  return (
    <button
      type="submit"
      className="w-full h-20 bg-primary-blue text-light-gray text-[30px] font-medium leading-[45px] rounded-[10px] hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2"
    >
      Login
    </button>
  )
}

export default LoginButton
