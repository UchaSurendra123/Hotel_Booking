// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'

// const FormField = ({ label, placeholder, type = "text", value, onChange, error }) => {
//   return (
//     <div className="space-y-2">
//       <label className="block text-[14px] font-medium text-gray-700">
//         {label}
//       </label>
//       <input
//         type={type}
//         placeholder={placeholder}
//         value={value}
//         onChange={(e) => onChange(e.target.value)}
//         className={`w-full h-[50px] px-4 text-[15px] border-2 ${
//           error ? 'border-red-500' : 'border-gray-300'
//         } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200`}
//       />
//       {error && <p className="text-red-500 text-[13px] mt-1">{error}</p>}
//     </div>
//   )
// }

// const PasswordField = ({ label, placeholder, value, onChange, error }) => {
//   const [showPassword, setShowPassword] = useState(false)

//   return (
//     <div className="space-y-2">
//       <label className="block text-[14px] font-medium text-gray-700">
//         {label}
//       </label>
//       <div className="relative">
//         <input
//           type={showPassword ? "text" : "password"}
//           placeholder={placeholder}
//           value={value}
//           onChange={(e) => onChange(e.target.value)}
//           className={`w-full h-[50px] px-4 pr-12 text-[15px] border-2 ${
//             error ? 'border-red-500' : 'border-gray-300'
//           } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200`}
//         />
//         <button
//           type="button"
//           onClick={() => setShowPassword(!showPassword)}
//           className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
//         >
//           {showPassword ? (
//             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
//             </svg>
//           ) : (
//             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
//             </svg>
//           )}
//         </button>
//       </div>
//       {error && <p className="text-red-500 text-[13px] mt-1">{error}</p>}
//     </div>
//   )
// }

// const RegisterForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     country: '',
//     username: '',
//     password: ''
//   })

//   const [errors, setErrors] = useState({})

//   const navigate = useNavigate()

//   const handleInputChange = (field, value) => {
//     setFormData(prev => ({
//       ...prev,
//       [field]: value
//     }))
//     if (errors[field]) {
//       setErrors(prev => ({
//         ...prev,
//         [field]: ''
//       }))
//     }
//   }

//   const validateForm = () => {
//     const newErrors = {}
//     if (!formData.name.trim()) newErrors.name = 'Name is required'
//     if (!formData.email.trim()) {
//       newErrors.email = 'Email is required'
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = 'Please enter a valid email address'
//     }
//     if (!formData.phone.trim()) newErrors.phone = 'Phone number is required'
//     if (!formData.country.trim()) newErrors.country = 'Country is required'
//     if (!formData.username.trim()) newErrors.username = 'Username is required'
//     if (!formData.password) {
//       newErrors.password = 'Password is required'
//     } else if (formData.password.length < 6) {
//       newErrors.password = 'Password must be at least 6 characters'
//     }
//     return newErrors
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     const validationErrors = validateForm()
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors)
//       window.scrollTo({ top: 0, behavior: 'smooth' })
//       return
//     }
//     console.log('Form submitted:', formData)
//     navigate('/register-success')
//   }

//   const handleLoginClick = () => {
//     navigate('/login')
//   }

//   return (
//     <div className="flex-1 flex flex-col justify-center px-8 py-8">
//       <div className="max-w-[500px] mx-auto w-full">
//         {/* Header */}
//         <div className="mb-6 text-center">
//           <h2 className="text-[28px] font-semibold leading-[1.2] text-gray-900 mb-1">
//             <span style={{ color: '#3256EB' }}>Create</span> Account
//           </h2>
//           <p className="text-[14px] text-gray-600">
//             Join us today and get started
//           </p>
//         </div>

//         {/* Form Section */}
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <FormField label="Name" placeholder="Enter your name" value={formData.name} onChange={(value) => handleInputChange('name', value)} error={errors.name} />
//           <FormField label="Email" placeholder="name@gmail.com" type="email" value={formData.email} onChange={(value) => handleInputChange('email', value)} error={errors.email} />
//           <FormField label="Phone Number" placeholder="With Country Code" value={formData.phone} onChange={(value) => handleInputChange('phone', value)} error={errors.phone} />
//           <FormField label="Country" placeholder="Country Name" value={formData.country} onChange={(value) => handleInputChange('country', value)} error={errors.country} />
//           <FormField label="Username" placeholder="Choose a username" value={formData.username} onChange={(value) => handleInputChange('username', value)} error={errors.username} />
//           <PasswordField label="Password" placeholder="6+ characters" value={formData.password} onChange={(value) => handleInputChange('password', value)} error={errors.password} />

//           <p className="text-[13px] leading-[1.5] text-gray-600 pt-2">
//             By signing up, you agree to our{' '}
//             <button type="button" className="text-blue-600 hover:underline">
//               Terms & Conditions
//             </button>
//           </p>

//           <button type="submit" className="w-full h-[50px] bg-blue-600 text-white text-[16px] font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
//             Register
//           </button>

//           <div className="text-center mt-6 pt-4 border-t border-gray-200">
//             <p className="text-[15px] text-gray-600">
//               Already have an account?{' '}
//               <button type="button" onClick={handleLoginClick} className="text-blue-600 font-semibold hover:underline transition-all">
//                 Login
//               </button>
//             </p>
//           </div>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default RegisterForm




























import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormField = ({ label, placeholder, type = "text", value, onChange, error }) => {
  return (
    <div className="space-y-2">
      <label className="block text-[14px] font-medium text-gray-700">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full h-[45px] px-3 text-[14px] border-2 ${
          error ? "border-red-500" : "border-gray-300"
        } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200`}
      />
      {error && <p className="text-red-500 text-[13px] mt-1">{error}</p>}
    </div>
  );
};

const PasswordField = ({ label, placeholder, value, onChange, error }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-2">
      <label className="block text-[14px] font-medium text-gray-700">{label}</label>

      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full h-[45px] px-3 pr-10 text-[14px] border-2 ${
            error ? "border-red-500" : "border-gray-300"
          } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200`}
        />

        {/* 👁️ SVG ICONS ADDED HERE */}
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600"
        >
          {showPassword ? (
            // Eye Open SVG
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 
                7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          ) : (
            // Eye Closed SVG
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 
                0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 
                114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 
                7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 
                5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 
                0L21 21" />
            </svg>
          )}
        </button>
      </div>

      {error && <p className="text-red-500 text-[13px] mt-1">{error}</p>}
    </div>
  );
};

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.country.trim()) newErrors.country = "Country is required";
    if (!formData.username.trim()) newErrors.username = "Username is required";
    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!data.success) {
        alert(data.message || "Registration failed");
        return;
      }

      alert("Registration successful!");
      navigate("/login");
    } catch (err) {
      alert("Server Error. Try again.");
    }
  };

  return (
    <div className="flex-1 flex flex-col justify-center px-8 py-8">
      <div className="max-w-[500px] mx-auto w-full">
        <div className="mb-6 text-center">
          <h2 className="text-[28px] font-semibold text-gray-900 mb-1">
            <span style={{ color: "#3256EB" }}>Create</span> Account
          </h2>
          <p className="text-[14px] text-gray-600">Join us today and get started</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">

          <FormField label="Name" placeholder="Enter your name" value={formData.name}
            onChange={(v) => handleInputChange("name", v)} error={errors.name} />

          <FormField label="Email" placeholder="name@gmail.com" type="email" value={formData.email}
            onChange={(v) => handleInputChange("email", v)} error={errors.email} />

          <FormField label="Phone Number" placeholder="With Country Code" value={formData.phone}
            onChange={(v) => handleInputChange("phone", v)} error={errors.phone} />

          <FormField label="Country" placeholder="Country Name" value={formData.country}
            onChange={(v) => handleInputChange("country", v)} error={errors.country} />

          <FormField label="Username" placeholder="Choose a username" value={formData.username}
            onChange={(v) => handleInputChange("username", v)} error={errors.username} />

          <PasswordField label="Password" placeholder="6+ characters" value={formData.password}
            onChange={(v) => handleInputChange("password", v)} error={errors.password} />

          {/* 🔹 SMALLER REGISTER BUTTON */}
          <button
  type="submit"
  className="w-[160px] h-[42px] mx-auto block bg-blue-600 text-white text-[14px] font-medium rounded-lg hover:bg-blue-700 transition-all"
>
  Register
</button>
        </form>

        <div className="text-center mt-6 pt-4 border-t border-gray-200">
          <p className="text-[15px] text-gray-600">
            Already have an account?{" "}
            <button onClick={() => navigate("/login")} className="text-blue-600 font-semibold hover:underline">
              Login
            </button>
          </p>
        </div>

      </div>
    </div>
  );
};

export default RegisterForm;












