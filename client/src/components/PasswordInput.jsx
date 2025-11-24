import React, { useState } from 'react'

const PasswordInput = ({ label, placeholder, value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className="space-y-3">
      <label className="block text-lg font-normal text-black">
        {label}
      </label>
      <div className="relative">
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full h-16 px-6 pr-16 text-lg text-black placeholder-text-gray bg-white border-2 border-border-gray rounded-lg focus:outline-none focus:border-primary-blue transition-colors duration-200"
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-5 flex items-center justify-center"
        >
          <img
            src="https://static.codia.ai/image/2025-10-28/VutTEgKWCg.png"
            alt="Toggle password visibility"
            className="w-full h-full object-contain"
          />
        </button>
      </div>
    </div>
  )
}

export default PasswordInput
