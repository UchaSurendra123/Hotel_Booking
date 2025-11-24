// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { Eye, EyeOff } from 'lucide-react'

// const InputField = ({ label, placeholder, value, onChange, type = 'text' }) => {
//   return (
//     <div className="w-full">
//       <label className="block text-[16px] font-semibold text-gray-700 mb-2">
//         {label}
//       </label>
//       <input
//         type={type}
//         placeholder={placeholder}
//         value={value}
//         onChange={onChange}
//         required
//         className="w-full h-[52px] px-4 text-[17px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//       />
//     </div>
//   )
// }

// const PasswordField = ({ label, placeholder, value, onChange }) => {
//   const [showPassword, setShowPassword] = useState(false)

//   return (
//     <div className="w-full">
//       <label className="block text-[16px] font-semibold text-gray-700 mb-2">
//         {label}
//       </label>
//       <div className="relative">
//         <input
//           type={showPassword ? 'text' : 'password'}
//           placeholder={placeholder}
//           value={value}
//           onChange={(e) => onChange(e.target.value)}
//           required
//           className="w-full h-[52px] px-4 pr-12 text-[17px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//         />
//         <button
//           type="button"
//           onClick={() => setShowPassword(!showPassword)}
//           className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors focus:outline-none"
//         >
//           {showPassword ? (
//             <Eye className="w-5 h-5" />
//           ) : (
//             <EyeOff className="w-5 h-5" />
//           )}
//         </button>
//       </div>
//     </div>
//   )
// }

// const LoginForm = () => {
//   const [username, setUsername] = useState('')
//   const [password, setPassword] = useState('')
//   const navigate = useNavigate()

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     console.log('Login attempt:', { username, password })
//     navigate('/')
//   }

//   const handleCreateAccount = () => {
//     navigate('/register')
//   }

//   const handleGoogleLogin = () => {
//     console.log('Google login initiated')
//   }

//   return (
//     <div className="flex-1 flex flex-col justify-center px-8 py-8">
//       <div className="max-w-[500px] mx-auto w-full">
//         {/* Header */}
//         <div className="mb-8 text-center">
//           <h2 className="text-[24px] font-semibold leading-[1.2] mb-1 text-gray-900">
//             <span style={{ color: '#3256EB' }}>Welcome</span> Back
//           </h2>
//           <p className="text-[13px] text-gray-600">
//             Please login to your account
//           </p>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* Input Fields */}
//           <InputField
//             label="Username"
//             placeholder="Enter your username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />

//           <PasswordField
//             label="Password"
//             placeholder="Enter your password"
//             value={password}
//             onChange={(value) => setPassword(value)}
//           />

//           {/* Forgot Password Link */}
//           <div className="flex justify-end pt-1">
//             <button
//               type="button"
//               className="text-[13px] text-blue-600 hover:underline transition-all"
//             >
//               Forgot Password?
//             </button>
//           </div>

//           {/* Login Button */}
//           <button
//             type="submit"
//             className="w-full h-[44px] bg-blue-600 text-white text-[15px] font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mt-5"
//           >
//             Login
//           </button>

//           {/* Divider */}
//           <div className="relative my-5">
//             <div className="absolute inset-0 flex items-center">
//               <div className="w-full border-t border-gray-300"></div>
//             </div>
//             <div className="relative flex justify-center text-sm">
//               <span className="px-4 bg-white text-gray-500 text-[13px]">
//                 Or continue with
//               </span>
//             </div>
//           </div>

//           {/* Google Login Button */}
//           <button
//             type="button"
//             onClick={handleGoogleLogin}
//             className="w-full h-[44px] bg-white border-2 border-gray-300 text-gray-700 text-[15px] font-medium rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 flex items-center justify-center gap-3 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
//           >
//             <svg className="w-5 h-5" viewBox="0 0 24 24">
//               <path
//                 fill="#4285F4"
//                 d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
//               />
//               <path
//                 fill="#34A853"
//                 d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
//               />
//               <path
//                 fill="#FBBC05"
//                 d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
//               />
//               <path
//                 fill="#EA4335"
//                 d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
//               />
//             </svg>
//             Login with Google
//           </button>

//           {/* Terms and Conditions */}
//           <p className="text-[12px] leading-[1.5] text-gray-600 text-center mt-5">
//             By logging in, you agree to our{' '}
//             <button type="button" className="text-blue-600 hover:underline">
//               Terms & Conditions
//             </button>
//           </p>

//           {/* Create Account Link */}
//           <div className="text-center mt-5 pt-4 border-t border-gray-200">
//             <p className="text-[14px] text-gray-600">
//               Don't have an account?{' '}
//               <button
//                 type="button"
//                 onClick={handleCreateAccount}
//                 className="text-blue-600 font-semibold hover:underline transition-all"
//               >
//                 Create Account
//               </button>
//             </p>
//           </div>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default LoginForm






















// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Eye, EyeOff } from "lucide-react";

// const API_URL = "http://localhost:5000/api/auth/login"; // backend login endpoint

// const InputField = ({ label, placeholder, value, onChange, type = "text" }) => (
//   <div className="w-full">
//     <label className="block text-[16px] font-semibold text-gray-700 mb-2">
//       {label}
//     </label>
//     <input
//       type={type}
//       placeholder={placeholder}
//       value={value}
//       onChange={onChange}
//       required
//       className="w-full h-[52px] px-4 text-[17px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//     />
//   </div>
// );

// const PasswordField = ({ label, placeholder, value, onChange }) => {
//   const [showPassword, setShowPassword] = useState(false);

//   return (
//     <div className="w-full">
//       <label className="block text-[16px] font-semibold text-gray-700 mb-2">
//         {label}
//       </label>
//       <div className="relative">
//         <input
//           type={showPassword ? "text" : "password"}
//           placeholder={placeholder}
//           value={value}
//           onChange={(e) => onChange(e.target.value)}
//           required
//           className="w-full h-[52px] px-4 pr-12 text-[17px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//         />
//         <button
//           type="button"
//           onClick={() => setShowPassword(!showPassword)}
//           className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors focus:outline-none"
//         >
//           {showPassword ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
//         </button>
//       </div>
//     </div>
//   );
// };

// const LoginForm = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   // Handle login request
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!username || !password) {
//       alert("⚠️ Please enter both username and password!");
//       return;
//     }

//     try {
//       setLoading(true);

//       const response = await fetch(API_URL, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ username, password }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         // ✅ Save user & token in localStorage
//         localStorage.setItem("token", data.token);
//         localStorage.setItem("user", JSON.stringify(data.user));

//         alert("✅ Login successful!");
//         navigate("/dashboard"); // redirect to dashboard
//       } else {
//         alert(data.message || "❌ Invalid username or password!");
//       }
//     } catch (error) {
//       console.error("❌ Login error:", error);
//       alert("Server error — please check backend connection.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleCreateAccount = () => {
//     navigate("/register");
//   };

//   const handleGoogleLogin = () => {
//     alert("Google Login integration coming soon!");
//   };

//   return (
//     <div className="flex-1 flex flex-col justify-center px-8 py-8">
//       <div className="max-w-[500px] mx-auto w-full">
//         {/* Header */}
//         <div className="mb-8 text-center">
//           <h2 className="text-[24px] font-semibold leading-[1.2] mb-1 text-gray-900">
//             <span style={{ color: "#3256EB" }}>Welcome</span> Back
//           </h2>
//           <p className="text-[13px] text-gray-600">
//             Please login to your account
//           </p>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* Username Field */}
//           <InputField
//             label="Username"
//             placeholder="Enter your username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />

//           {/* Password Field */}
//           <PasswordField
//             label="Password"
//             placeholder="Enter your password"
//             value={password}
//             onChange={(value) => setPassword(value)}
//           />

//           {/* Forgot Password */}
//           <div className="flex justify-end pt-1">
//             <button
//               type="button"
//               className="text-[13px] text-blue-600 hover:underline transition-all"
//             >
//               Forgot Password?
//             </button>
//           </div>

//           {/* Login Button */}
//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full h-[44px] bg-blue-600 text-white text-[15px] font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-sm mt-5"
//           >
//             {loading ? "Logging in..." : "Login"}
//           </button>

//           {/* Divider */}
//           <div className="relative my-5">
//             <div className="absolute inset-0 flex items-center">
//               <div className="w-full border-t border-gray-300"></div>
//             </div>
//             <div className="relative flex justify-center text-sm">
//               <span className="px-4 bg-white text-gray-500 text-[13px]">
//                 Or continue with
//               </span>
//             </div>
//           </div>

//           {/* Google Login */}
//           <button
//             type="button"
//             onClick={handleGoogleLogin}
//             className="w-full h-[44px] bg-white border-2 border-gray-300 text-gray-700 text-[15px] font-medium rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 flex items-center justify-center gap-3"
//           >
//             <svg className="w-5 h-5" viewBox="0 0 24 24">
//               <path
//                 fill="#4285F4"
//                 d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
//               />
//               <path
//                 fill="#34A853"
//                 d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
//               />
//               <path
//                 fill="#FBBC05"
//                 d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
//               />
//               <path
//                 fill="#EA4335"
//                 d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
//               />
//             </svg>
//             Login with Google
//           </button>

//           {/* Terms */}
//           <p className="text-[12px] text-gray-600 text-center mt-5">
//             By logging in, you agree to our{" "}
//             <button type="button" className="text-blue-600 hover:underline">
//               Terms & Conditions
//             </button>
//           </p>

//           {/* Register Link */}
//           <div className="text-center mt-5 pt-4 border-t border-gray-200">
//             <p className="text-[14px] text-gray-600">
//               Don’t have an account?{" "}
//               <button
//                 type="button"
//                 onClick={handleCreateAccount}
//                 className="text-blue-600 font-semibold hover:underline"
//               >
//                 Create Account
//               </button>
//             </p>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;



































// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { Eye, EyeOff } from "lucide-react";

// const API_URL = "http://localhost:5000/api/auth/login"; // backend login
// const GOOGLE_LOGIN_URL = "http://localhost:5000/api/auth/google-login"; // backend Google login

// const InputField = ({ label, placeholder, value, onChange, type = "text" }) => (
//   <div className="w-full">
//     <label className="block text-[16px] font-semibold text-gray-700 mb-2">
//       {label}
//     </label>
//     <input
//       type={type}
//       placeholder={placeholder}
//       value={value}
//       onChange={onChange}
//       required
//       className="w-full h-[52px] px-4 text-[17px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//     />
//   </div>
// );

// const PasswordField = ({ label, placeholder, value, onChange }) => {
//   const [showPassword, setShowPassword] = useState(false);

//   return (
//     <div className="w-full">
//       <label className="block text-[16px] font-semibold text-gray-700 mb-2">
//         {label}
//       </label>
//       <div className="relative">
//         <input
//           type={showPassword ? "text" : "password"}
//           placeholder={placeholder}
//           value={value}
//           onChange={(e) => onChange(e.target.value)}
//           required
//           className="w-full h-[52px] px-4 pr-12 text-[17px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//         />
//         <button
//           type="button"
//           onClick={() => setShowPassword(!showPassword)}
//           className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors focus:outline-none"
//         >
//           {showPassword ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
//         </button>
//       </div>
//     </div>
//   );
// };

// const LoginForm = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   // Initialize Google Sign-In
//   useEffect(() => {
//     if (window.google) {
//       window.google.accounts.id.initialize({
//         client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
//         callback: handleGoogleResponse,
//       });

//       window.google.accounts.id.renderButton(
//         document.getElementById("google-signin-button"),
//         { theme: "outline", size: "large", width: "100%" }
//       );
//     }
//   }, []);

//   const handleGoogleResponse = async (response) => {
//     try {
//       setLoading(true);
//       const res = await fetch(GOOGLE_LOGIN_URL, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ token: response.credential }),
//       });
//       const data = await res.json();

//       if (res.ok) {
//         localStorage.setItem("token", data.token);
//         localStorage.setItem("user", JSON.stringify(data.user));
//         navigate("/dashboard");
//       } else {
//         setError(data.message || "Google login failed");
//       }
//     } catch (err) {
//       console.error("Google login error:", err);
//       setError("Server error during Google login");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     if (!username || !password) {
//       setError("Please enter both username and password");
//       return;
//     }

//     try {
//       setLoading(true);
//       const response = await fetch(API_URL, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           username: username.trim(),
//           password: password.trim(),
//         }),
//       });
//       const data = await response.json();

//       if (response.ok) {
//         localStorage.setItem("token", data.token);
//         localStorage.setItem("user", JSON.stringify(data.user));
//         navigate("/dashboard");
//       } else {
//         setError(data.message || "Invalid username or password");
//       }
//     } catch (err) {
//       console.error("Login error:", err);
//       setError("Server error — please check backend connection.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleCreateAccount = () => navigate("/register");

//   return (
//     <div className="flex-1 flex flex-col justify-center px-8 py-8">
//       <div className="max-w-[500px] mx-auto w-full">
//         <div className="mb-8 text-center">
//           <h2 className="text-[24px] font-semibold leading-[1.2] mb-1 text-gray-900">
//             <span style={{ color: "#3256EB" }}>Welcome</span> Back
//           </h2>
//           <p className="text-[13px] text-gray-600">Please login to your account</p>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           {error && <p className="text-red-500 text-[14px]">{error}</p>}

//           <InputField
//             label="Username"
//             placeholder="Enter your username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />

//           <PasswordField
//             label="Password"
//             placeholder="Enter your password"
//             value={password}
//             onChange={(val) => setPassword(val)}
//           />

//           <div className="flex justify-end pt-1">
//             <button
//               type="button"
//               className="text-[13px] text-blue-600 hover:underline transition-all"
//             >
//               Forgot Password?
//             </button>
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full h-[44px] bg-blue-600 text-white text-[15px] font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-sm mt-5"
//           >
//             {loading ? "Logging in..." : "Login"}
//           </button>

//           <div className="relative my-5">
//             <div className="absolute inset-0 flex items-center">
//               <div className="w-full border-t border-gray-300"></div>
//             </div>
//             <div className="relative flex justify-center text-sm">
//               <span className="px-4 bg-white text-gray-500 text-[13px]">Or continue with</span>
//             </div>
//           </div>

//           {/* Google Sign-In Button */}
//           <div id="google-signin-button" className="mt-3"></div>

//           <div className="text-center mt-5 pt-4 border-t border-gray-200">
//             <p className="text-[14px] text-gray-600">
//               Don’t have an account?{" "}
//               <button
//                 type="button"
//                 onClick={handleCreateAccount}
//                 className="text-blue-600 font-semibold hover:underline"
//               >
//                 Create Account
//               </button>
//             </p>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;








































// ---- FIXED LOGINFORM.JSX ----

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

const API_URL = "http://localhost:5000/api/auth/login";
const GOOGLE_LOGIN_URL = "http://localhost:5000/api/auth/google-login";

const InputField = ({ label, placeholder, value, onChange, type = "text" }) => (
  <div className="w-full mb-3">
    <label className="block text-[14px] font-medium text-gray-700 mb-1">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required
      className="w-full h-10 px-3 text-[14px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
    />
  </div>
);

const PasswordField = ({ label, placeholder, value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full mb-3">
      <label className="block text-[14px] font-medium text-gray-700 mb-1">{label}</label>
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required
          className="w-full h-10 px-3 pr-10 text-[14px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-all"
        >
          {showPassword ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
};

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleCreateAccount = () => navigate("/register");
  const handleForgotPassword = () => navigate("/forgot-password");

  useEffect(() => {
    if (window.google) {
      window.google.accounts.id.initialize({
        client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        callback: handleGoogleResponse,
      });

      window.google.accounts.id.renderButton(
        document.getElementById("google-signin-button"),
        { theme: "outline", size: "medium", width: "100%" }
      );
    }
  }, []);

  const handleGoogleResponse = async (response) => {
    try {
      setLoading(true);
      const res = await fetch(GOOGLE_LOGIN_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: response.credential }),
      });
      const data = await res.json();
      if (res.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        navigate("/");
      } else setError(data.message || "Google login failed");
    } catch (err) {
      console.error(err);
      setError("Server error during Google login");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!username || !password) return setError("Please enter both username and password");

    try {
      setLoading(true);
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: username.trim(), password: password.trim() }),
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        navigate("/");
      } else setError(data.message || "Invalid username or password");
    } catch (err) {
      console.error(err);
      setError("Server error — please check backend connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-1 flex flex-col justify-center px-6 py-6">
      <div className="max-w-[400px] mx-auto w-full">
        <div className="mb-6 text-center">
          <h2 className="text-[20px] font-semibold leading-[1.2] mb-1 text-gray-900">
            <span className="text-blue-600">Welcome</span> Back
          </h2>
          <p className="text-[12px] text-gray-600">Please login to your account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          {error && <p className="text-red-500 text-[13px]">{error}</p>}

          <InputField
            label="Username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <PasswordField
            label="Password"
            placeholder="Enter your password"
            value={password}
            onChange={(val) => setPassword(val)}
          />

          <div className="flex justify-end pt-1">
            <button
              type="button"
              onClick={handleForgotPassword}
              className="text-[12px] text-blue-600 hover:underline"
            >
              Forgot Password?
            </button>
          </div>

          <div className="flex flex-col items-center space-y-2">
  <button
    type="submit"
    disabled={loading}
    className="w-40 h-9 bg-blue-600 text-white text-[13px] font-medium rounded-lg hover:bg-blue-700 transition-all"
  >
    {loading ? "Logging in..." : "Login"}
  </button>
<p > Or Continue With </p>
  <div
    id="google-signin-button"
    style={{ width: "170px", height: "36px" }}
  ></div>
</div>


          <p className="text-[12px] text-gray-600 text-center mt-3">
            Don’t have an account?{" "}
            <button
              type="button"
              onClick={handleCreateAccount}
              className="text-blue-600 font-medium hover:underline"
            >
              Create Account
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
