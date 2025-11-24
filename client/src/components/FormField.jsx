import React from 'react'

const FormField = ({ label, placeholder, type = 'text', value, onChange }) => {
  return (
    <div className="space-y-2">
      <label className="block text-2xl leading-9 text-black font-normal">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-[70px] px-6 py-4 bg-white border-2 border-border-gray rounded-[10px] text-[22px] leading-[33px] text-border-gray placeholder-border-gray focus:outline-none focus:border-primary-blue focus:text-black transition-colors"
      />
    </div>
  )
}

export default FormField
