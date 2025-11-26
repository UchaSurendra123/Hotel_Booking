// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { toast, ToastContainer } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";

// // const ResetPassword = () => {
// //   const [token, setToken] = useState(""); // token from email
// //   const [password, setPassword] = useState("");
// //   const [confirmPassword, setConfirmPassword] = useState("");
// //   const [loading, setLoading] = useState(false);
// //   const navigate = useNavigate();

// //   const API_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";

// //   const handleResetPassword = async () => {
// //     if (!token || !password || !confirmPassword) {
// //       toast.error("All fields are required!");
// //       return;
// //     }

// //     if (password !== confirmPassword) {
// //       toast.error("Passwords do not match!");
// //       return;
// //     }

// //     if (password.length < 6) {
// //       toast.error("Password must be at least 6 characters long.");
// //       return;
// //     }

// //     setLoading(true);
// //     try {
// //       const res = await fetch(`${API_URL}/api/password/reset-password`, {
// //         method: "PUT",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({ token, password }), // token in body
// //       });

// //       const data = await res.json();

// //       if (!res.ok) {
// //         toast.error(data.message || "Password reset failed!");
// //       } else {
// //         toast.success("✅ Password reset successful! Redirecting to login...");
// //         setTimeout(() => navigate("/login"), 2000);
// //       }
// //     } catch (error) {
// //       toast.error("Something went wrong. Try again.");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="flex-1 flex flex-col justify-center px-8 py-8">
// //       <ToastContainer />
// //       <div className="max-w-[400px] mx-auto w-full">
// //         <h2 className="text-[24px] font-semibold text-gray-900 mb-2 text-center">
// //           Reset Password
// //         </h2>
// //         <p className="text-[14px] text-gray-600 mb-6 text-center">
// //           Enter the token you received in email and set your new password.
// //         </p>

// //         {/* Token */}
// //         <input
// //           type="text"
// //           placeholder="Enter reset token"
// //           value={token}
// //           onChange={(e) => setToken(e.target.value)}
// //           required
// //           className="w-full h-[50px] px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 mb-4"
// //         />

// //         {/* New Password */}
// //         <input
// //           type="password"
// //           placeholder="Enter new password"
// //           value={password}
// //           onChange={(e) => setPassword(e.target.value)}
// //           required
// //           className="w-full h-[50px] px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 mb-4"
// //         />

// //         {/* Confirm Password */}
// //         <input
// //           type="password"
// //           placeholder="Confirm new password"
// //           value={confirmPassword}
// //           onChange={(e) => setConfirmPassword(e.target.value)}
// //           required
// //           className="w-full h-[50px] px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 mb-4"
// //         />

// //         <button
// //           onClick={handleResetPassword}
// //           disabled={loading}
// //           className="w-full h-[45px] bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all"
// //         >
// //           {loading ? "Updating..." : "Reset Password"}
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ResetPassword;

































// import React, { useState } from "react";
// import axios from "axios";

// const ResetPassword = () => {
//   const [username, setUsername] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage("");
//     setError("");

//     // Validation
//     if (!username || !newPassword || !confirmPassword) {
//       return setError("All fields are required");
//     }
//     if (newPassword !== confirmPassword) {
//       return setError("Passwords do not match");
//     }

//     try {
//       // Call your backend API to reset password
//       const res = await axios.post("http://localhost:5000/api/auth/reset-password", {
//         username,
//         newPassword,
//       });

//       setMessage(res.data.message || "Password reset successfully");
//       setUsername("");
//       setNewPassword("");
//       setConfirmPassword("");
//     } catch (err) {
//       setError(err.response?.data?.error || "Failed to reset password");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
//       <div className="bg-white rounded-2xl p-8 shadow-md w-full max-w-md">
//         <h2 className="text-xl font-semibold mb-6">Reset Password</h2>

//         {/* Inline messages */}
//         {message && <p className="text-green-600 mb-4">{message}</p>}
//         {error && <p className="text-red-600 mb-4">{error}</p>}

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Username
//             </label>
//             <input
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               className="w-full border px-4 py-2 rounded-lg"
//               placeholder="Enter your username"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               New Password
//             </label>
//             <input
//               type="password"
//               value={newPassword}
//               onChange={(e) => setNewPassword(e.target.value)}
//               className="w-full border px-4 py-2 rounded-lg"
//               placeholder="Enter new password"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Confirm New Password
//             </label>
//             <input
//               type="password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               className="w-full border px-4 py-2 rounded-lg"
//               placeholder="Confirm new password"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700"
//           >
//             Reset Password
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ResetPassword;


import React, { useState } from "react";
import axios from "axios";
import { Eye, EyeOff } from "lucide-react"; // 👈 Install: npm install lucide-react

const ResetPassword = () => {
  const [username, setUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    if (!username || !newPassword || !confirmPassword) {
      return setError("All fields are required");
    }
    if (newPassword !== confirmPassword) {
      return setError("Passwords do not match");
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/reset-password",
        {
          username,
          newPassword,
        }
      );

      setMessage(res.data.message || "Password reset successfully");
      setUsername("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (err) {
      setError(err.response?.data?.error || "Failed to reset password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white rounded-2xl p-8 shadow-md w-full max-w-md">
        <h2 className="text-xl font-semibold mb-6">Reset Password</h2>

        {message && <p className="text-green-600 mb-4">{message}</p>}
        {error && <p className="text-red-600 mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border px-4 py-2 rounded-lg"
              placeholder="Enter your username"
            />
          </div>

          {/* New Password */}
          <div className="relative">
  <label className="block text-sm font-medium text-gray-700 mb-1">
    New Password
  </label>
  <input
    type={showNewPassword ? "text" : "password"}
    value={newPassword}
    onChange={(e) => setNewPassword(e.target.value)}
    className="w-full border px-4 py-2 rounded-lg pr-10"
    placeholder="Enter new password"
  />

  <button
    type="button"
    onClick={() => setShowNewPassword(!showNewPassword)}
    className="absolute right-3 top-9 text-gray-500"
  >
    {showNewPassword ? <EyeOff size={20} /> : <Eye size={20} />}
  </button>
</div>


          {/* Confirm Password */}
          <div className="relative">
  <label className="block text-sm font-medium text-gray-700 mb-1">
    Confirm Password
  </label>
  <input
    type={showConfirmPassword ? "text" : "password"}
    value={confirmPassword}
    onChange={(e) => setConfirmPassword(e.target.value)}
    className="w-full border px-4 py-2 rounded-lg pr-10"
    placeholder="Confirm new password"
  />

  <button
    type="button"
    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
    className="absolute right-3 top-9 text-gray-500"
  >
    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
  </button>
</div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;        