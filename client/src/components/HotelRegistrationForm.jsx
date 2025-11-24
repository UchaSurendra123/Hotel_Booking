// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'

// const FormInput = ({ label, placeholder, type = "text", value, onChange, error }) => {
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

// const PasswordInput = ({ label, placeholder, value, onChange, error }) => {
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

// const FileUploadInput = ({ label, placeholder, onChange, error }) => {
//   const [fileNames, setFileNames] = useState([])

//   const handleFileChange = (e) => {
//     const files = Array.from(e.target.files)
//     if (files.length > 0) {
//       setFileNames(files.map(f => f.name))
//       onChange(files)
//     }
//   }

//   const displayText = fileNames.length > 0 
//     ? `${fileNames.length} file${fileNames.length > 1 ? 's' : ''} selected`
//     : placeholder

//   return (
//     <div className="space-y-2">
//       <label className="block text-[14px] font-medium text-gray-700">
//         {label}
//       </label>
//       <div className="relative">
//         <input
//           type="file"
//           onChange={handleFileChange}
//           multiple
//           className="hidden"
//           id={label.replace(/\s+/g, '-').toLowerCase()}
//         />
//         <label
//           htmlFor={label.replace(/\s+/g, '-').toLowerCase()}
//           className={`w-full h-[50px] px-4 text-[15px] border-2 ${
//             error ? 'border-red-500' : 'border-gray-300'
//           } rounded-lg flex items-center justify-between cursor-pointer hover:border-blue-500 transition-all duration-200 bg-white`}
//         >
//           <span className={fileNames.length > 0 ? "text-gray-900" : "text-gray-400"}>
//             {displayText}
//           </span>
//           <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
//           </svg>
//         </label>
//       </div>
//       {error && <p className="text-red-500 text-[13px] mt-1">{error}</p>}
//     </div>
//   )
// }

// const HotelRegistrationForm = () => {
//   const navigate = useNavigate()

//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phoneNo: '',
//     country: '',
//     nic: '',
    
//     hotelName: '',
//     registrationNo: '',
//     address: '',
//     uploadImages: null,
//     uploadDocuments: null,
//     facilities: ''
//   })

//   const [errors, setErrors] = useState({})

//   const handleInputChange = (name, value) => {
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }))
//     if (errors[name]) {
//       setErrors(prev => ({
//         ...prev,
//         [name]: ''
//       }))
//     }
//   }

//   const validateForm = () => {
//     const newErrors = {}

//     if (!formData.name.trim()) newErrors.name = 'Full name is required'
//     if (!formData.email.trim()) {
//       newErrors.email = 'Email is required'
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = 'Please enter a valid email'
//     }
//     if (!formData.phoneNo.trim()) newErrors.phoneNo = 'Phone number is required'
//     if (!formData.country.trim()) newErrors.country = 'Country is required'
//     if (!formData.nic.trim()) newErrors.nic = 'NIC is required'
    
//     if (!formData.hotelName.trim()) newErrors.hotelName = 'Hotel name is required'
//     if (!formData.registrationNo.trim()) newErrors.registrationNo = 'Registration number is required'
//     if (!formData.address.trim()) newErrors.address = 'Hotel address is required'
//     if (!formData.uploadImages) newErrors.uploadImages = 'Please upload hotel images'
//     if (!formData.uploadDocuments) newErrors.uploadDocuments = 'Please upload registration documents'
//     if (!formData.facilities.trim()) newErrors.facilities = 'Please describe hotel facilities'

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
//     navigate('/verification-success')
//   }

 

//   return (
//     <div className="min-h-screen bg-gray-50 px-6 py-6">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="flex flex-col items-center justify-center mb-6">
//           <h2 className="text-[32px] font-semibold text-gray-900 text-center">
//             <span className="text-[#3256EB]">Register</span> Your Hotel
//           </h2>
//           <p className="text-gray-600 text-[15px] mt-2">
//             List your property and grow your bookings with us!
//           </p>
//         </div>

//         {/* Form Container */}
//         <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
//           <form onSubmit={handleSubmit}>
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-6">
//               {/* Left Column - Personal Info */}
//               <div className="space-y-5">
//                 <div className="mb-6">
//                   <h3 className="text-[18px] font-semibold text-gray-900 pb-2 border-b border-gray-200">
//                     Personal Information
//                   </h3>
//                 </div>

//                 <FormInput label="Full Name" placeholder="Enter your full name" value={formData.name} onChange={(value) => handleInputChange('name', value)} error={errors.name} />
//                 <FormInput label="Email Address" placeholder="name@example.com" type="email" value={formData.email} onChange={(value) => handleInputChange('email', value)} error={errors.email} />
//                 <FormInput label="Phone Number" placeholder="With country code (e.g., +1234567890)" value={formData.phoneNo} onChange={(value) => handleInputChange('phoneNo', value)} error={errors.phoneNo} />
//                 <FormInput label="Country" placeholder="Select your country" value={formData.country} onChange={(value) => handleInputChange('country', value)} error={errors.country} />
//                 <FormInput label="National Identity Card" placeholder="Enter your NIC number" value={formData.nic} onChange={(value) => handleInputChange('nic', value)} error={errors.nic} />
                
//               </div>

//               {/* Right Column - Hotel Info */}
//               <div className="space-y-5">
//                 <div className="mb-6">
//                   <h3 className="text-[18px] font-semibold text-gray-900 pb-2 border-b border-gray-200">
//                     Hotel Information
//                   </h3>
//                 </div>

//                 <FormInput label="Hotel Name" placeholder="Enter hotel name" value={formData.hotelName} onChange={(value) => handleInputChange('hotelName', value)} error={errors.hotelName} />
//                 <FormInput label="Registration Number" placeholder="Business registration number" value={formData.registrationNo} onChange={(value) => handleInputChange('registrationNo', value)} error={errors.registrationNo} />
//                 <FormInput label="Hotel Address" placeholder="Full address with city and postal code" value={formData.address} onChange={(value) => handleInputChange('address', value)} error={errors.address} />

//                 <FileUploadInput label="Hotel Images" placeholder="Upload hotel photos" onChange={(value) => handleInputChange('uploadImages', value)} error={errors.uploadImages} />
//                 <FileUploadInput label="Registration Documents" placeholder="Upload business documents" onChange={(value) => handleInputChange('uploadDocuments', value)} error={errors.uploadDocuments} />

//                 <div className="space-y-2">
//                   <label className="block text-[14px] font-medium text-gray-700">
//                     Hotel Facilities
//                   </label>
//                   <textarea
//                     placeholder="Describe available facilities (e.g., WiFi, Pool, Parking, Restaurant)"
//                     value={formData.facilities}
//                     onChange={(e) => handleInputChange('facilities', e.target.value)}
//                     rows="4"
//                     className={`w-full px-4 py-3 text-[15px] border-2 ${
//                       errors.facilities ? 'border-red-500' : 'border-gray-300'
//                     } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none`}
//                   />
//                   {errors.facilities && <p className="text-red-500 text-[13px] mt-1">{errors.facilities}</p>}
//                 </div>
//               </div>
//             </div>

//             {/* Terms and Submit Section */}
//             <div className="mt-8 pt-6 border-t border-gray-200">
//               <p className="text-[13px] text-gray-600 text-center mb-4">
//                 By registering, you agree to our{' '}
//                 <button type="button" className="text-blue-600 hover:underline">
//                   Terms & Conditions
//                 </button>{' '}
//                 and{' '}
//                 <button type="button" className="text-blue-600 hover:underline">
//                   Privacy Policy
//                 </button>
//               </p>

//               <div className="flex flex-col items-center gap-4">
//                 <button
//                   type="submit"
//                   className="w-full sm:w-auto min-w-[280px] h-[50px] bg-blue-600 text-white text-[16px] font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//                 >
//                   Register Hotel
//                 </button>

                
//               </div>
//             </div>
//           </form>
//         </div>

//         {/* Help Text */}
//         <p className="text-center text-[13px] text-gray-500 mt-6">
//           Need help? Contact our support team at{' '}
//           <a href="mailto:support@deccanstay.com" className="text-blue-600 hover:underline">
//             support@deccanstay.com
//           </a>
//         </p>
//       </div>
//     </div>
//   )
// }
// export default HotelRegistrationForm

















import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Generic Input Component
const FormInput = ({ label, placeholder, type = 'text', value, onChange, error }) => (
  <div className="space-y-2">
    <label className="block text-[14px] font-medium text-gray-700">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`w-full h-[50px] px-4 text-[15px] border-2 ${
        error ? 'border-red-500' : 'border-gray-300'
      } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200`}
    />
    {error && <p className="text-red-500 text-[13px] mt-1">{error}</p>}
  </div>
);

// Password Input Component (if needed in future)
const PasswordInput = ({ label, placeholder, value, onChange, error }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-2">
      <label className="block text-[14px] font-medium text-gray-700">{label}</label>
      <div className="relative">
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full h-[50px] px-4 pr-12 text-[15px] border-2 ${
            error ? 'border-red-500' : 'border-gray-300'
          } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200`}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
        >
          {showPassword ? 'Hide' : 'Show'}
        </button>
      </div>
      {error && <p className="text-red-500 text-[13px] mt-1">{error}</p>}
    </div>
  );
};

// File Upload Component (Kept exactly as requested)
const FileUploadInput = ({ label, placeholder, onChange, error }) => {
  const [fileNames, setFileNames] = useState([]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      setFileNames(files.map((f) => f.name));
      onChange(files);
    }
  };

  const displayText =
    fileNames.length > 0
      ? `${fileNames.length} file${fileNames.length > 1 ? 's' : ''} selected`
      : placeholder;

  return (
    <div className="space-y-2">
      <label className="block text-[14px] font-medium text-gray-700">{label}</label>
      <div className="relative">
        <input
          type="file"
          onChange={handleFileChange}
          multiple
          className="hidden"
          id={label.replace(/\s+/g, '-').toLowerCase()}
        />
        <label
          htmlFor={label.replace(/\s+/g, '-').toLowerCase()}
          className={`w-full h-[50px] px-4 text-[15px] border-2 ${
            error ? 'border-red-500' : 'border-gray-300'
          } rounded-lg flex items-center justify-between cursor-pointer hover:border-blue-500 transition-all duration-200 bg-white`}
        >
          <span className={fileNames.length > 0 ? 'text-gray-900' : 'text-gray-400'}>{displayText}</span>
          <svg
            className="w-5 h-5 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            />
          </svg>
        </label>
      </div>
      {error && <p className="text-red-500 text-[13px] mt-1">{error}</p>}
    </div>
  );
};

const HotelRegistrationForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNo: '',
    country: '',
    nic: '',
    hotelName: '',
    registrationNo: '',
    address: '',
    uploadImages: null,
    uploadDocuments: null,
    facilities: '',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email';
    if (!formData.phoneNo.trim()) newErrors.phoneNo = 'Phone number is required';
    if (!formData.country.trim()) newErrors.country = 'Country is required';
    if (!formData.nic.trim()) newErrors.nic = 'NIC is required';

    if (!formData.hotelName.trim()) newErrors.hotelName = 'Hotel name is required';
    if (!formData.registrationNo.trim()) newErrors.registrationNo = 'Registration number is required';
    if (!formData.address.trim()) newErrors.address = 'Hotel address is required';
    if (!formData.uploadImages) newErrors.uploadImages = 'Please upload hotel images';
    if (!formData.uploadDocuments) newErrors.uploadDocuments = 'Please upload registration documents';
    if (!formData.facilities.trim()) newErrors.facilities = 'Please describe hotel facilities';

    return newErrors;
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  const validationErrors = validateForm();
  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  try {
    const data = new FormData();
    for (const key in formData) {
      if (formData[key]) {
        if (key === 'uploadImages' || key === 'uploadDocuments') {
          formData[key].forEach(file => data.append(key, file));
        } else {
          data.append(key, formData[key]);
        }
      }
    }

    const response = await fetch("http://localhost:5000/api/owners/register-owner", {
  method: 'POST',
  body: data, // do NOT set headers['Content-Type']
});

    if (!response.ok) throw new Error('Failed to register hotel');

    const result = await response.json();
    console.log('Hotel saved:', result);
    navigate('/verification-success');
  } catch (error) {
    console.error(error);
    alert('Failed to register hotel');
  }
};


  return (
    <div className="min-h-screen bg-gray-50 px-6 py-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center justify-center mb-6">
          <h2 className="text-[32px] font-semibold text-gray-900 text-center">
            <span className="text-[#3256EB]">Register</span> Your Hotel
          </h2>
          <p className="text-gray-600 text-[15px] mt-2">
            List your property and grow your bookings with us!
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-6">
              {/* Left Column - Personal Info */}
              <div className="space-y-5">
                <h3 className="text-[18px] font-semibold text-gray-900 pb-2 border-b border-gray-200">
                  Personal Information
                </h3>
                <FormInput
                  label="Full Name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(v) => handleInputChange('name', v)}
                  error={errors.name}
                />
                <FormInput
                  label="Email Address"
                  placeholder="name@example.com"
                  type="email"
                  value={formData.email}
                  onChange={(v) => handleInputChange('email', v)}
                  error={errors.email}
                />
                <FormInput
                  label="Phone Number"
                  placeholder="With country code (e.g., +1234567890)"
                  value={formData.phoneNo}
                  onChange={(v) => handleInputChange('phoneNo', v)}
                  error={errors.phoneNo}
                />
                <FormInput
                  label="Country"
                  placeholder="Enter  your country Name"
                  value={formData.country}
                  onChange={(v) => handleInputChange('country', v)}
                  error={errors.country}
                />
                <FormInput
                  label="National Identity Card"
                  placeholder="Enter your NIC number (e.g., pancard, aadharcard , voter Id)"
                  value={formData.nic}
                  onChange={(v) => handleInputChange('nic', v)}
                  error={errors.nic}
                />
              </div>

              {/* Right Column - Hotel Info */}
              <div className="space-y-5">
                <h3 className="text-[18px] font-semibold text-gray-900 pb-2 border-b border-gray-200">
                  Hotel Information
                </h3>
                <FormInput
                  label="Hotel Name"
                  placeholder="Enter hotel name"
                  value={formData.hotelName}
                  onChange={(v) => handleInputChange('hotelName', v)}
                  error={errors.hotelName}
                />
                <FormInput
                  label="Registration Number"
                  placeholder="Business registration number"
                  value={formData.registrationNo}
                  onChange={(v) => handleInputChange('registrationNo', v)}
                  error={errors.registrationNo}
                />
                <FormInput
                  label="Hotel Address"
                  placeholder="Full address with city and postal code"
                  value={formData.address}
                  onChange={(v) => handleInputChange('address', v)}
                  error={errors.address}
                />

                <FileUploadInput
                  label="Hotel Images"
                  placeholder="Upload hotel photos"
                  onChange={(v) => handleInputChange('uploadImages', v)}
                  error={errors.uploadImages}
                />
                <FileUploadInput
                  label="Registration Documents"
                  placeholder="Upload business documents"
                  onChange={(v) => handleInputChange('uploadDocuments', v)}
                  error={errors.uploadDocuments}
                />

                <div className="space-y-2">
                  <label className="block text-[14px] font-medium text-gray-700">Hotel Facilities</label>
                  <textarea
                    placeholder="Describe available facilities (e.g., WiFi, Pool, Parking, Restaurant)"
                    value={formData.facilities}
                    onChange={(e) => handleInputChange('facilities', e.target.value)}
                    rows="4"
                    className={`w-full px-4 py-3 text-[15px] border-2 ${
                      errors.facilities ? 'border-red-500' : 'border-gray-300'
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none`}
                  />
                  {errors.facilities && <p className="text-red-500 text-[13px] mt-1">{errors.facilities}</p>}
                </div>
              </div>
            </div>

            {/* Terms and Submit */}
            <div className="mt-8 pt-6 border-t border-gray-200 text-center">
              <p className="text-[13px] text-gray-600 mb-4">
                By registering, you agree to our{' '}
                <button type="button" className="text-blue-600 hover:underline">
                  Terms & Conditions
                </button>{' '}
                and{' '}
                <button type="button" className="text-blue-600 hover:underline">
                  Privacy Policy
                </button>
              </p>
              <button
                type="submit"
                className="w-[160px] h-[42px] mx-auto block bg-blue-600 text-white text-[14px] font-medium rounded-lg hover:bg-blue-700 transition-all"
              >
                Register Hotel
              </button>
            </div>
          </form>
        </div>

        {/* Support */}
        <p className="text-center text-[13px] text-gray-500 mt-6">
          Need help? Contact our support team at{' '}
          <a href="mailto:support@deccanstay.com" className="text-blue-600 hover:underline">
            support@deccanstay.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default HotelRegistrationForm;
