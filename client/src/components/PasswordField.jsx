import React, { useState } from 'react'

const PasswordField = ({ label, placeholder, value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-2xl leading-9 text-black font-poppins">
          {label}
        </label>
      )}

      <div className="relative">
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder={placeholder}
          value={value || ''} // ✅ ensures it's always a string
          onChange={(e) => onChange && onChange(e.target.value)} // ✅ pass only string value
          className="w-full h-[70px] px-6 pr-16 text-[22px] leading-8 text-text-gray placeholder-text-gray bg-white border-2 border-border-gray rounded-[10px] focus:outline-none focus:border-primary-blue transition-colors"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2"
        >
          <img
            src="https://static.codia.ai/image/2025-10-27/wHR07tOuSJ.png"
            alt="Toggle password visibility"
            className="w-6 h-5"
          />
        </button>
      </div>
    </div>
  )
}

export default PasswordField
