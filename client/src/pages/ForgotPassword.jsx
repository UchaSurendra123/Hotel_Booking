// // import React, { useState } from "react";
// // import { toast, ToastContainer } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";

// // const ForgotPassword = () => {
// //   const [email, setEmail] = useState("");
// //   const [step, setStep] = useState(1); // 1 = enter email, 2 = token + new password
// //   const [token, setToken] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [confirmPassword, setConfirmPassword] = useState("");
// //   const [loading, setLoading] = useState(false);

// //   const API_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";

// //   // Step 1 → send reset token
// //   const handleSendToken = async () => {
// //     if (!email) return toast.error("Please enter your email!");
// //     setLoading(true);
// //     try {
// //       const res = await fetch(`${API_URL}/api/password/forgot-password`, {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({ email }),
// //       });
// //       const data = await res.json();
// //       if (!res.ok) toast.error(data.message);
// //       else {
// //         toast.success("✅ Reset token sent! Check your email.");
// //         setStep(2);
// //       }
// //     } catch (error) {
// //       toast.error("Something went wrong.");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   // Step 2 → reset password
// //   const handleResetPassword = async () => {
// //     if (!token || !password || !confirmPassword) return toast.error("All fields are required!");
// //     if (password !== confirmPassword) return toast.error("Passwords do not match!");
// //     if (password.length < 6) return toast.error("Password must be at least 6 characters long.");

// //     setLoading(true);
// //     try {
// //       const res = await fetch(`${API_URL}/api/password/reset-password`, {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({ token, password }),
// //       });
// //       const data = await res.json();
// //       if (!res.ok) toast.error(data.message);
// //       else {
// //         toast.success(data.message);
// //         setStep(1);
// //         setEmail(""); setToken(""); setPassword(""); setConfirmPassword("");
// //       }
// //     } catch (error) {
// //       toast.error("Something went wrong.");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="flex-1 flex flex-col justify-center px-8 py-8">
// //       <ToastContainer />
// //       <div className="max-w-[400px] mx-auto w-full">
// //         {step === 1 ? (
// //           <>
// //             <h2 className="text-center text-2xl font-semibold">Forgot Password</h2>
// //             <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)}
// //               className="w-full h-12 px-4 border rounded mb-4"/>
// //             <button onClick={handleSendToken} disabled={loading} className="w-full h-12 bg-blue-600 text-white rounded">
// //               {loading ? "Sending..." : "Send Reset Token"}
// //             </button>
// //           </>
// //         ) : (
// //           <>
// //             <h2 className="text-center text-2xl font-semibold">Reset Password</h2>
// //             <input type="text" placeholder="Token" value={token} onChange={e=>setToken(e.target.value)}
// //               className="w-full h-12 px-4 border rounded mb-4"/>
// //             <input type="password" placeholder="New Password" value={password} onChange={e=>setPassword(e.target.value)}
// //               className="w-full h-12 px-4 border rounded mb-4"/>
// //             <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={e=>setConfirmPassword(e.target.value)}
// //               className="w-full h-12 px-4 border rounded mb-4"/>
// //             <button onClick={handleResetPassword} disabled={loading} className="w-full h-12 bg-blue-600 text-white rounded">
// //               {loading ? "Updating..." : "Reset Password"}
// //             </button>
// //           </>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default ForgotPassword;



























// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const ForgetPassword = () => {
//   const [username, setUsername] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");

//   const navigate = useNavigate();

//   const handlePasswordReset = async (e) => {
//     e.preventDefault();

//     // ✅ Validation
//     if (!username || !newPassword || !confirmPassword) {
//       setError("Please fill all fields");
//       setMessage("");
//       return;
//     }

//     if (newPassword !== confirmPassword) {
//       setError("Passwords do not match");
//       setMessage("");
//       return;
//     }

//     try {
//       const res = await axios.post("http://localhost:5000/api/auth/forget-password", {
//         username,
//         newPassword,
//       });

//       if (res.data.success) {
//         setMessage("Password reset successfully!");
//         setError("");
//         setUsername("");
//         setNewPassword("");
//         setConfirmPassword("");
//       } else {
//         setError(res.data.message || "Failed to reset password");
//         setMessage("");
//       }
//     } catch (err) {
//       console.error(err);
//       setError("Something went wrong. Please try again.");
//       setMessage("");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
//       <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
//         <h2 className="text-2xl font-semibold text-gray-700 mb-6">Reset Password</h2>

//         <form onSubmit={handlePasswordReset} className="space-y-4">
//           {/* Username */}
//           <div>
//             <label className="block text-sm font-medium text-gray-600 mb-1">
//               Username
//             </label>
//             <input
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               placeholder="Enter your username"
//               className="w-full border px-4 py-2 rounded-lg"
//             />
//           </div>

//           {/* New Password */}
//           <div>
//             <label className="block text-sm font-medium text-gray-600 mb-1">
//               New Password
//             </label>
//             <input
//               type="password"
//               value={newPassword}
//               onChange={(e) => setNewPassword(e.target.value)}
//               placeholder="Enter new password"
//               className="w-full border px-4 py-2 rounded-lg"
//             />
//           </div>

//           {/* Confirm Password */}
//           <div>
//             <label className="block text-sm font-medium text-gray-600 mb-1">
//               Confirm Password
//             </label>
//             <input
//               type="password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               placeholder="Confirm new password"
//               className="w-full border px-4 py-2 rounded-lg"
//             />
//           </div>

//           {/* Inline Messages */}
//           {error && <p className="text-red-600 text-sm">{error}</p>}
//           {message && <p className="text-green-600 text-sm">{message}</p>}

//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
//           >
//             Reset Password
//           </button>
//         </form>

//         {/* Back to Login */}
//         <button
//           onClick={() => navigate("/login")}
//           className="w-full mt-4 bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition"
//         >
//           Back to Login
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ForgetPassword;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Eye, EyeOff } from "lucide-react"; // 👁 IMPORT ICONS

const ForgetPassword = () => {
  const [username, setUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // 👁 Password show/hide states
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  const handlePasswordReset = async (e) => {
    e.preventDefault();

    if (!username || !newPassword || !confirmPassword) {
      setError("Please fill all fields");
      setMessage("");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      setMessage("");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/auth/forget-password", {
        username,
        newPassword,
      });

      if (res.data.success) {
        setMessage("Password reset successfully!");
        setError("");
        setUsername("");
        setNewPassword("");
        setConfirmPassword("");
      } else {
        setError(res.data.message || "Failed to reset password");
        setMessage("");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
      setMessage("");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Reset Password</h2>

        <form onSubmit={handlePasswordReset} className="space-y-4">
          
          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="w-full border px-4 py-2 rounded-lg"
            />
          </div>

          {/* New Password */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              New Password
            </label>
            <input
              type={showNewPassword ? "text" : "password"}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter new password"
              className="w-full border px-4 py-2 rounded-lg pr-10"
            />

            {/* 👁 Eye icon */}
            <button
              type="button"
              onClick={() => setShowNewPassword(!showNewPassword)}
              className="absolute right-3 top-9 text-gray-600"
            >
              {showNewPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Confirm Password
            </label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm new password"
              className="w-full border px-4 py-2 rounded-lg pr-10"
            />

            {/* 👁 Eye icon */}
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-9 text-gray-600"
            >
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Messages */}
          {error && <p className="text-red-600 text-sm">{error}</p>}
          {message && <p className="text-green-600 text-sm">{message}</p>}

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Reset Password
          </button>
        </form>

        <button
          onClick={() => navigate("/login")}
          className="w-full mt-4 bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition"
        >
          Back to Login
        </button>
      </div>
    </div>
  );
};

export default ForgetPassword;          