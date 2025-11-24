import React from 'react'

const InputField = ({ label, placeholder, value, onChange, type = 'text' }) => {
  return (
    <div className="space-y-2">
      <label className="block text-2xl leading-9 text-black font-poppins">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full h-[70px] px-6 text-[22px] leading-8 text-text-gray placeholder-text-gray bg-white border-2 border-border-gray rounded-[10px] focus:outline-none focus:border-primary-blue transition-colors"
      />
    </div>
  )
}

export default InputField
