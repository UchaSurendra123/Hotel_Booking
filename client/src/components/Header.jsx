// // import React from "react";
// // import { useNavigate } from "react-router-dom";

// // const Header = () => {
// //   const navigate = useNavigate();

// //   return (
// //     <header className="bg-white border-b border-gray-200 fixed top-0 left-0 w-full z-50 shadow-md">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="flex justify-between items-center h-20">
// //           {/* Logo */}
// //           <div
// //             className="flex items-center cursor-pointer"
// //             onClick={() => navigate("/")}
// //           >
// //             <h1 className="font-poppins font-medium text-4xl text-dark">
// //               <span className="text-secondary">Deccan</span>Stay
// //             </h1>
// //           </div>

// //           {/* Navigation Links */}
// //           <nav className="hidden md:flex space-x-8">
// //             <button
// //               onClick={() => navigate("/")}
// //               className="text-primary font-normal hover:text-secondary transition"
// //             >
// //               Home
// //             </button>

// //             <button
// //               onClick={() => navigate("/hotels")}
// //               className="text-secondary font-normal hover:text-primary transition"
// //             >
// //               Hotels
// //             </button>

// //             <button
// //               onClick={() => navigate("/about")}
// //               className="text-secondary font-normal hover:text-primary transition"
// //             >
// //               About
// //             </button>

// //             <button
// //               onClick={() => navigate("/contact")}
// //               className="text-secondary font-normal hover:text-primary transition"
// //             >
// //               Contact
// //             </button>
// //           </nav>

// //           {/* Login & Admin Buttons */}
// //           <div className="flex items-center space-x-4">
// //             <button
// //               onClick={() => navigate("/admin-dashboard")}
// //               className="bg-blue-700 text-white px-6 py-2 rounded-lg font-medium shadow-lg hover:bg-blue-800 transition-colors"
// //             >
// //               Admin Dashboard
// //             </button>

// //             <button
// //               onClick={() => navigate("/login")}
// //               className="bg-blue-700 text-white px-6 py-2 rounded-lg font-medium shadow-lg hover:bg-blue-800 transition-colors"
// //             >
// //               Login
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </header>
// //   );
// // };

// // export default Header;

























// // import React, { useEffect, useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { User } from "lucide-react";

// // const Header = () => {
// //   const navigate = useNavigate();
// //   const [user, setUser] = useState(null);

// //   // ✅ Load user info from localStorage on mount
// //   useEffect(() => {
// //     const storedUser = localStorage.getItem("user");
// //     if (storedUser) {
// //       setUser(JSON.parse(storedUser));
// //     }
// //   }, []);

// //   // ✅ Handle logout
// //   const handleLogout = () => {
// //     localStorage.removeItem("user");
// //     setUser(null);
// //     navigate("/login");
// //   };

// //   return (
// //     <header className="bg-white border-b border-gray-200 fixed top-0 left-0 w-full z-50 shadow-md">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="flex justify-between items-center h-20">
// //           {/* Logo */}
// //           <div
// //             className="flex items-center cursor-pointer"
// //             onClick={() => navigate("/")}
// //           >
// //             <h1 className="font-poppins font-medium text-4xl text-dark">
// //               <span className="text-secondary">Deccan</span>Stay
// //             </h1>
// //           </div>

// //           {/* Navigation Links */}
// //           <nav className="hidden md:flex space-x-8">
// //             <button
// //               onClick={() => navigate("/")}
// //               className="text-primary font-normal hover:text-secondary transition"
// //             >
// //               Home
// //             </button>

// //             <button
// //               onClick={() => navigate("/hotels")}
// //               className="text-secondary font-normal hover:text-primary transition"
// //             >
// //               Hotels
// //             </button>

// //             <button
// //               onClick={() => navigate("/about")}
// //               className="text-secondary font-normal hover:text-primary transition"
// //             >
// //               About
// //             </button>

// //             <button
// //               onClick={() => navigate("/contact")}
// //               className="text-secondary font-normal hover:text-primary transition"
// //             >
// //               Contact
// //             </button>
// //           </nav>

// //           {/* Right Side (Admin / User) */}
// //           <div className="flex items-center space-x-4">
// //             <button
// //               onClick={() => navigate("/admin-dashboard")}
// //               className="bg-blue-700 text-white px-6 py-2 rounded-lg font-medium shadow-lg hover:bg-blue-800 transition-colors"
// //             >
// //               Admin Dashboard
// //             </button>

// //             {/* ✅ If logged in → show user name + icon */}
// //             {user ? (
// //               <div className="relative group">
// //                 <button
// //                   className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-200 transition-all"
// //                 >
// //                   <User className="w-5 h-5 text-blue-600" />
// //                   <span className="font-medium text-gray-800">
// //                     {user.name}
// //                   </span>
// //                 </button>

// //                 {/* Dropdown (logout) */}
// //                 <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-150">
// //                   <button
// //                     onClick={handleLogout}
// //                     className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-t-lg"
// //                   >
// //                     Logout
// //                   </button>
// //                 </div>
// //               </div>
// //             ) : (
// //               // If not logged in → show Login button
// //               <button
// //                 onClick={() => navigate("/login")}
// //                 className="bg-blue-700 text-white px-6 py-2 rounded-lg font-medium shadow-lg hover:bg-blue-800 transition-colors"
// //               >
// //                 Login
// //               </button>
// //             )}
// //           </div>
// //         </div>
// //       </div>
// //     </header>
// //   );
// // };

// // export default Header;







































// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { User } from "lucide-react";

// const Header = () => {
//   const navigate = useNavigate();
//   const [user, setUser] = useState(null);

//   // Load user info from localStorage
//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//     }
//   }, []);

//   // Logout handler
//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     localStorage.removeItem("token");
//     setUser(null);
//     navigate("/login");
//   };

//   return (
//     <header className="bg-white border-b border-gray-200 fixed top-0 left-0 w-full z-50 shadow-md">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-20">
//           {/* Logo */}
//           <div
//             className="flex items-center cursor-pointer"
//             onClick={() => navigate("/")}
//           >
//             <h1 className="font-poppins font-medium text-4xl text-dark">
//               <span className="text-secondary">Deccan</span>Stay
//             </h1>
//           </div>

//           {/* Navigation Links */}
//           <nav className="hidden md:flex space-x-8">
//             <button
//               onClick={() => navigate("/")}
//               className="text-primary font-normal hover:text-secondary transition"
//             >
//               Home
//             </button>

//             <button
//               onClick={() => navigate("/hotels")}
//               className="text-secondary font-normal hover:text-primary transition"
//             >
//               Hotels
//             </button>

//             <button
//               onClick={() => navigate("/about")}
//               className="text-secondary font-normal hover:text-primary transition"
//             >
//               About
//             </button>

//             <button
//               onClick={() => navigate("/contact")}
//               className="text-secondary font-normal hover:text-primary transition"
//             >
//               Contact
//             </button>
//           </nav>

//           {/* Right Side */}
//           <div className="flex items-center space-x-4">
//             <button
//               onClick={() => navigate("/admin-dashboard")}
//               className="bg-blue-700 text-white px-6 py-2 rounded-lg font-medium shadow-lg hover:bg-blue-800 transition-colors"
//             >
//               Admin Login
//             </button>

//             {user ? (
//               <div className="relative group">
//                 <button className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-200 transition-all">
                  
//                   <User className="w-5 h-5 text-blue-600" />
//                   <p className="font-bold">welcome,</p>
//                   <span className="font-medium text-gray-800">
//                     {/* Show name if exists, otherwise email */}
//                     {user.name ? user.name : user.email}
//                   </span>
//                 </button>

//                 {/* Dropdown for logout */}
//                 <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-150">
//                   <button
//                     onClick={handleLogout}
//                     className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-t-lg"
//                   >
//                     Logout
//                   </button>
//                 </div>
//               </div>
//             ) : (
//               <button
//                 onClick={() => navigate("/login")}
//                 className="bg-blue-700 text-white px-6 py-2 rounded-lg font-medium shadow-lg hover:bg-blue-800 transition-colors"
//               >
//                 User Login
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;


import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { User } from "lucide-react";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [user, setUser] = useState(null);

  // 🔥 Update header whenever route changes (including after login)
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      setUser(null);
    }
  }, [location.pathname]);

  // 🔥 Logout
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  };

  return (
    <header className="bg-white border-b border-gray-200 fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <div
            className="flex items-center cursor-pointer"
            onClick={() => navigate("/")}
          >
            <h1 className="font-poppins font-medium text-4xl text-dark">
              <span className="text-secondary">Deccan</span>Stay
            </h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8 font-poppins font-medium">
  <button
    onClick={() => navigate("/")}
    className="text-dark hover:text-secondary transition"
  >
    Home
  </button>

  <button
    onClick={() => navigate("/hotels")}
    className="text-dark hover:text-primary transition"
  >
    Hotels
  </button>

  <button
    onClick={() => navigate("/about")}
    className="text-dark hover:text-primary transition"
  >
    About
  </button>

  <button
    onClick={() => navigate("/contact")}
    className="text-dark hover:text-primary transition"
  >
    Contact
  </button>
</nav>


          {/* Right Side */}
          <div className="flex items-center space-x-4">

            {/* If user logged in → show MY BOOKINGS */}
            {user ? (
              <button
                onClick={() => navigate("/user-dashboard")}
                className="bg-blue-700 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-blue-800"
              >
                My Bookings
              </button>
            ) : (
              <button
                onClick={() => navigate("/admin-dashboard")}
                className="bg-blue-700 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-blue-800"
              >
                Admin Login
              </button>
            )}

            {/* User Dropdown */}
            {user ? (
              <div className="relative group">
                <button className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-200 transition-all">
                  <User className="w-5 h-5 text-blue-600" />
                  <p className="font-bold">Welcome,</p>
                  <span className="font-medium text-gray-800">
                    {user.name || user.email}
                  </span>
                </button>

                <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => navigate("/login")}
                className="bg-blue-700 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-blue-800"
              >
                User Login
              </button>
            )}

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 