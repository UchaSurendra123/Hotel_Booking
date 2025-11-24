import React from 'react'

const FormInput = ({ label, placeholder, type = 'text', value, onChange }) => {
  return (
    <div className="space-y-3">
      <label className="block text-lg font-normal text-black">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-16 px-6 text-lg text-black placeholder-text-gray bg-white border-2 border-border-gray rounded-lg focus:outline-none focus:border-primary-blue transition-colors duration-200"
      />
    </div>
  )
}

export default FormInput
