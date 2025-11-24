// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import Refund from "./Refund";
// import Message from "./Message";
// import Help from "./Help";
// import Setting from "./Setting";

// /* ======================= 🧭 SIDEBAR ======================= */
// const Sidebars = ({ activePage, setActivePage }) => {
//   const navigate = useNavigate();

//   const menuItems = [
//     { icon: "https://static.codia.ai/image/2025-10-28/ueP3kyqN1D.png", label: "My Bookings", key: "My Bookings" },
//     { icon: "https://static.codia.ai/image/2025-10-28/oQ31oYDaf8.png", label: "Refunds", key: "refunds" },
//     { icon: "https://static.codia.ai/image/2025-10-28/Y6kOvWn5KB.png", label: "Messages", key: "messages" },
//     { icon: "https://static.codia.ai/image/2025-10-28/Xsfj5zyzaB.png", label: "Help", key: "help" },
//     { icon: "https://static.codia.ai/image/2025-10-28/cuopThxdCh.png", label: "Settings", key: "settings" },
//   ];

//   return (
//     <aside className="w-64 bg-white shadow-md flex flex-col py-6 justify-between">
//       <div>
//         <h2 className="font-poppins font-medium text-4xl text-dark px-6 mb-8">
//           <span className="text-secondary">Deccan</span>Stay
//         </h2>

//         <nav>
//           {menuItems.map((item) => (
//             <button
//               key={item.key}
//               onClick={() => setActivePage(item.key)}
//               className={`flex items-center w-full px-6 py-3 text-lg transition-colors ${
//                 activePage === item.key
//                   ? "bg-blue-700 text-white"
//                   : "text-gray-700 hover:bg-gray-100"
//               }`}
//             >
//               <img src={item.icon} alt={item.label} className="w-6 h-6 object-contain" />
//               <span className="ml-3">{item.label}</span>
//             </button>
//           ))}
//         </nav>
//       </div>

//       {/* 🔙 Back to Confirmation Page */}
//       <button
//         onClick={() => navigate("/Booking-confirmation")}
//         className="flex items-center justify-center bg-blue-100 text-blue-700 mx-6 py-3 rounded-lg font-medium hover:bg-blue-200 transition"
//       >
//         ← Back
//       </button>
//     </aside>
//   );
// };

// /* ======================= 🌤 HEADER ======================= */
// const Headerss = () => (
//   <header className="bg-gray-50 px-6 py-6 border-b border-gray-200">
//     <div className="flex justify-between items-center">
//       <div>
//         <h2 className="text-xl font-semibold text-black tracking-wide mb-1">
//           Hello, User
//         </h2>
//         <p className="text-sm text-gray-500">Have a nice day</p>
//       </div>

//       <div className="flex items-center gap-6">
//         <img
//           src="https://static.codia.ai/image/2025-10-28/WuAnhG6pOY.png"
//           alt="Notifications"
//           className="w-6 h-6"
//         />
//         <div className="w-px h-8 bg-gray-300"></div>
//         <div className="flex items-center gap-3 pr-2">
//           <img
//             src="https://static.codia.ai/image/2025-10-28/dBKtQVuRL8.png"
//             alt="Profile"
//             className="w-10 h-10 rounded-full"
//           />
//           <div>
//             <p className="font-semibold text-black">Welcome</p>
//             <p className="text-xs text-gray-500">User</p>
//           </div>
//           <img
//             src="https://static.codia.ai/image/2025-10-28/oqqvzXHJ08.png"
//             alt="Dropdown"
//             className="w-5 h-5"
//           />
//         </div>
//       </div>
//     </div>
//   </header>
// );

// /* ======================= 🔍 SEARCH + SORT ======================= */
// const SearchAndSort = ({ searchTerm, setSearchTerm, sortOrder, setSortOrder }) => (
//   <div className="flex items-center justify-between mb-8">
//     {/* Search */}
//     <div className="flex items-center bg-white rounded-2xl px-5 py-3 flex-1 max-w-3xl shadow-sm">
//       <img
//         src="https://static.codia.ai/image/2025-10-28/bms7dwkkhZ.png"
//         alt="Search"
//         className="w-4 h-4 mr-4"
//       />
//       <input
//         type="text"
//         placeholder="Search by hotel name"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         className="flex-1 outline-none text-base text-gray-600"
//       />
//     </div>

//     {/* Sort */}
//     <div className="flex items-center gap-3 ml-6">
//       <span className="font-semibold text-gray-600">Sort by</span>
//       <select
//         value={sortOrder}
//         onChange={(e) => setSortOrder(e.target.value)}
//         className="border border-gray-300 rounded-lg px-3 py-2 text-gray-700 outline-none"
//       >
//         <option value="asc">A → Z</option>
//         <option value="desc">Z → A</option>
//       </select>
//     </div>
//   </div>
// );

// /* ======================= 📦 MODAL ======================= */
// const BookingModal = ({ booking, onClose }) => {
//   if (!booking) return null;

//   return (
//     <div
//       className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50"
//       onClick={onClose}
//     >
//       <div
//         className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-6 relative"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <button
//           onClick={onClose}
//           className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-xl"
//         >
//           ✕
//         </button>

//         <img
//           src={booking.image}
//           alt={booking.name}
//           className="w-full h-56 object-cover rounded-xl mb-4"
//         />
//         <h2 className="text-2xl font-semibold text-gray-800 mb-2">
//           {booking.name}
//         </h2>
//         <p className="text-gray-500 mb-3">📍 {booking.location}</p>
//         <p className="text-gray-600">🗓 Check-in: {booking.checkin}</p>
//         <p className="text-gray-600 mb-2">🗓 Check-out: {booking.checkout}</p>
//         <p className="text-lg font-medium text-gray-800">
//           💰 Price: ₹{booking.price.toLocaleString()}
//         </p>
//         <p className="text-sm text-gray-500 mt-1">
//           Status: <span className="font-semibold text-green-600">{booking.status}</span>
//         </p>

//         <div className="mt-6 text-right">
//           <button
//             onClick={onClose}
//             className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition"
//           >
//             Close
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// /* ======================= 📊 MAIN DASHBOARD ======================= */
// const UserDashboard = () => {
//   const [activePage, setActivePage] = useState("dashboard");
//   const [bookings, setBookings] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [sortOrder, setSortOrder] = useState("asc");
//   const [selectedBooking, setSelectedBooking] = useState(null);

//   // Load bookings from localStorage
//   useEffect(() => {
//     const stored = JSON.parse(localStorage.getItem("userBookings")) || [];
//     setBookings(stored);
//   }, []);

//   const filteredBookings = bookings
//     .filter((b) => b.name.toLowerCase().includes(searchTerm.toLowerCase()))
//     .sort((a, b) =>
//       sortOrder === "asc"
//         ? a.name.localeCompare(b.name)
//         : b.name.localeCompare(a.name)
//     );

//   const renderContent = () => {
//     switch (activePage) {
//       case "refunds":
//         return <Refund />;
//       case "messages":
//         return <Message />;
//       case "help":
//         return <Help />;
//       case "settings":
//         return <Setting />;
//       default:
//         return (
//           <>
//             <SearchAndSort
//               searchTerm={searchTerm}
//               setSearchTerm={setSearchTerm}
//               sortOrder={sortOrder}
//               setSortOrder={setSortOrder}
//             />

//             {filteredBookings.length === 0 ? (
//               <p className="text-gray-500 text-center mt-10">
//                 No bookings found.
//               </p>
//             ) : (
//               <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {filteredBookings.map((booking) => (
//                   <div
//                     key={booking.id}
//                     className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
//                   >
//                     <img
//                       src={booking.image}
//                       alt={booking.name}
//                       className="w-full h-48 object-cover"
//                     />
//                     <div className="p-6">
//                       <h3 className="text-lg font-semibold text-gray-800 mb-1">
//                         {booking.name}
//                       </h3>
//                       <p className="text-sm text-gray-500 mb-2">
//                         📍 {booking.location}
//                       </p>
//                       <p className="text-sm text-gray-500">
//                         🗓 {booking.checkin} → {booking.checkout}
//                       </p>
//                       <p className="text-sm text-gray-700 font-medium mt-2">
//                         💰 ₹{booking.price.toLocaleString()}{" "}
//                         <span className="text-gray-500 text-sm ml-1">
//                           ({booking.status})
//                         </span>
//                       </p>

//                       <button
//                         onClick={() => setSelectedBooking(booking)}
//                         className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition"
//                       >
//                         View Details
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </section>
//             )}
//           </>
//         );
//     }
//   };

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       <Sidebars activePage={activePage} setActivePage={setActivePage} />
//       <div className="flex-1 flex flex-col">
//         <Headerss />
//         <main className="p-8 relative">
//           {renderContent()}
//           {selectedBooking && (
//             <BookingModal
//               booking={selectedBooking}
//               onClose={() => setSelectedBooking(null)}
//             />
//           )}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default UserDashboard;




















// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import Refund from "./Refund";
// import Message from "./Message";
// import Help from "./Help";
// import Setting from "./Setting";

// /* ======================= 🧭 SIDEBAR ======================= */
// const Sidebars = ({ activePage, setActivePage }) => {
//   const navigate = useNavigate();

//   const menuItems = [
//     { icon: "https://static.codia.ai/image/2025-10-28/ueP3kyqN1D.png", label: "My Bookings", key: "dashboard" },
//     { icon: "https://static.codia.ai/image/2025-10-28/oQ31oYDaf8.png", label: "Refunds", key: "refunds" },
//     { icon: "https://static.codia.ai/image/2025-10-28/Y6kOvWn5KB.png", label: "Messages", key: "messages" },
//     { icon: "https://static.codia.ai/image/2025-10-28/Xsfj5zyzaB.png", label: "Help", key: "help" },
//     { icon: "https://static.codia.ai/image/2025-10-28/cuopThxdCh.png", label: "Settings", key: "settings" },
//   ];

//   return (
//     <aside className="w-64 bg-white shadow-md flex flex-col py-6 justify-between">
//       <div>
//         <h2 className="font-poppins font-medium text-4xl text-dark px-6 mb-8">
//           <span className="text-secondary">Deccan</span>Stay
//         </h2>

//         <nav>
//           {menuItems.map((item) => (
//             <button
//               key={item.key}
//               onClick={() => setActivePage(item.key)}
//               className={`flex items-center w-full px-6 py-3 text-lg transition-colors ${
//                 activePage === item.key
//                   ? "bg-blue-700 text-white"
//                   : "text-gray-700 hover:bg-gray-100"
//               }`}
//             >
//               <img src={item.icon} alt={item.label} className="w-6 h-6 object-contain" />
//               <span className="ml-3">{item.label}</span>
//             </button>
//           ))}
//         </nav>
//       </div>

//       <button
//   onClick={() => navigate("/booking-confirmation")}
//   className="flex items-center justify-center bg-blue-100 text-blue-700 mx-6 py-3 rounded-lg font-medium hover:bg-blue-200 transition"
// >
//   ← Back 
// </button>

//     </aside>
//   );
// };

// /* ======================= 🌤 HEADER ======================= */
// const Headerss = () => (
//   <header className="bg-gray-50 px-6 py-6 border-b border-gray-200">
//     <div className="flex justify-between items-center">
//       <div>
//         <h2 className="text-xl font-semibold text-black tracking-wide mb-1">
//           Hello, User
//         </h2>
//         <p className="text-sm text-gray-500">Have a nice day</p>
//       </div>

//       <div className="flex items-center gap-6">
//         <img
//           src="https://static.codia.ai/image/2025-10-28/WuAnhG6pOY.png"
//           alt="Notifications"
//           className="w-6 h-6"
//         />
//         <div className="w-px h-8 bg-gray-300"></div>
//         <div className="flex items-center gap-3 pr-2">
//           <img
//             src="https://static.codia.ai/image/2025-10-28/dBKtQVuRL8.png"
//             alt="Profile"
//             className="w-10 h-10 rounded-full"
//           />
//           <div>
//             <p className="font-semibold text-black">Welcome</p>
//             <p className="text-xs text-gray-500">User</p>
//           </div>
//           <img
//             src="https://static.codia.ai/image/2025-10-28/oqqvzXHJ08.png"
//             alt="Dropdown"
//             className="w-5 h-5"
//           />
//         </div>
//       </div>
//     </div>
//   </header>
// );

// /* ======================= 🔍 SEARCH + SORT ======================= */
// const SearchAndSort = ({ searchTerm, setSearchTerm, sortOrder, setSortOrder }) => (
//   <div className="flex items-center justify-between mb-8">
//     <div className="flex items-center bg-white rounded-2xl px-5 py-3 flex-1 max-w-3xl shadow-sm">
//       <img
//         src="https://static.codia.ai/image/2025-10-28/bms7dwkkhZ.png"
//         alt="Search"
//         className="w-4 h-4 mr-4"
//       />
//       <input
//         type="text"
//         placeholder="Search by hotel name"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         className="flex-1 outline-none text-base text-gray-600"
//       />
//     </div>

//     <div className="flex items-center gap-3 ml-6">
//       <span className="font-semibold text-gray-600">Sort by</span>
//       <select
//         value={sortOrder}
//         onChange={(e) => setSortOrder(e.target.value)}
//         className="border border-gray-300 rounded-lg px-3 py-2 text-gray-700 outline-none"
//       >
//         <option value="asc">A → Z</option>
//         <option value="desc">Z → A</option>
//       </select>
//     </div>
//   </div>
// );

// /* ======================= 📦 BOOKING MODAL ======================= */
// const BookingModal = ({ booking, onClose }) => {
//   if (!booking) return null;

//   return (
//     <div
//       className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50"
//       onClick={onClose}
//     >
//       <div
//         className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-6 relative"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <button
//           onClick={onClose}
//           className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-xl"
//         >
//           ✕
//         </button>

//         <img
//           src={booking.image}
//           alt={booking.hotelName}
//           className="w-full h-56 object-cover rounded-xl mb-4"
//         />
//         <h2 className="text-2xl font-semibold text-gray-800 mb-2">
//           {booking.hotelName}
//         </h2>
//         <p className="text-gray-500 mb-3">📍 {booking.city}</p>
//         <p className="text-gray-600">🗓 Check-in: {booking.checkIn}</p>
//         <p className="text-gray-600 mb-2">🗓 Check-out: {booking.checkOut}</p>
//         <p className="text-lg font-medium text-gray-800">
//           💰 Price: ₹{booking.totalPrice?.toLocaleString()}
//         </p>

//         <div className="mt-6 text-right">
//           <button
//             onClick={onClose}
//             className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition"
//           >
//             Close
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// /* ======================= 📊 MAIN DASHBOARD ======================= */
// const UserDashboard = () => {
//   const [activePage, setActivePage] = useState("dashboard");
//   const [bookings, setBookings] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [sortOrder, setSortOrder] = useState("asc");
//   const [selectedBooking, setSelectedBooking] = useState(null);

//   // 🔹 Fetch bookings from MongoDB
//   useEffect(() => {
//     const fetchBookings = async () => {
//       try {
//         const res = await fetch("http://localhost:5000/api/bookings");
//         const data = await res.json();
//         setBookings(data || []);
//       } catch (err) {
//         console.error("Error fetching bookings:", err);
//       }
//     };
//     fetchBookings();
//   }, []);

//   const filteredBookings = bookings
//     .filter((b) =>
//       b.hotelName?.toLowerCase().includes(searchTerm.toLowerCase())
//     )
//     .sort((a, b) =>
//       sortOrder === "asc"
//         ? a.hotelName.localeCompare(b.hotelName)
//         : b.hotelName.localeCompare(a.hotelName)
//     );

//   const renderContent = () => {
//     switch (activePage) {
//       case "refunds":
//         return <Refund />;
//       case "messages":
//         return <Message />;
//       case "help":
//         return <Help />;
//       case "settings":
//         return <Setting />;
//       default:
//         return (
//           <>
//             <SearchAndSort
//               searchTerm={searchTerm}
//               setSearchTerm={setSearchTerm}
//               sortOrder={sortOrder}
//               setSortOrder={setSortOrder}
//             />

//             {filteredBookings.length === 0 ? (
//               <p className="text-gray-500 text-center mt-10">No bookings found.</p>
//             ) : (
//               <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {filteredBookings.map((booking) => (
//                   <div
//                     key={booking._id}
//                     className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
//                   >
//                     <img
//                       src={booking.image}
//                       alt={booking.hotelName}
//                       className="w-full h-48 object-cover"
//                     />
//                     <div className="p-6">
//                       <h3 className="text-lg font-semibold text-gray-800 mb-1">
//                         {booking.hotelName}
//                       </h3>
//                       <p className="text-sm text-gray-500 mb-2">📍 {booking.city}</p>
//                       <p className="text-sm text-gray-500">
//                         🗓 {booking.checkIn} → {booking.checkOut}
//                       </p>
//                       <p className="text-sm text-gray-700 font-medium mt-2">
//                         💰 ₹{booking.totalPrice?.toLocaleString()}
//                       </p>

//                       <button
//                         onClick={() => setSelectedBooking(booking)}
//                         className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition"
//                       >
//                         View Details
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </section>
//             )}
//           </>
//         );
//     }
//   };

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       <Sidebars activePage={activePage} setActivePage={setActivePage} />
//       <div className="flex-1 flex flex-col">
//         <Headerss />
//         <main className="p-8 relative">
//           {renderContent()}
//           {selectedBooking && (
//             <BookingModal booking={selectedBooking} onClose={() => setSelectedBooking(null)} />
//           )}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default UserDashboard;
















































import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Refund from "./Refund";
import Message from "./Message";
import Help from "./Help";
import Setting from "./Setting";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
/* ======================= 🧭 SIDEBAR ======================= */
const Sidebars = ({ activePage, setActivePage }) => {
  const navigate = useNavigate();

  const menuItems = [
    { icon: "https://static.codia.ai/image/2025-10-28/ueP3kyqN1D.png", label: "My Bookings", key: "dashboard" },
    { icon: "https://static.codia.ai/image/2025-10-28/oQ31oYDaf8.png", label: "Refunds", key: "refunds" },
    { icon: "https://static.codia.ai/image/2025-10-28/Y6kOvWn5KB.png", label: "Messages", key: "messages" },
    { icon: "https://static.codia.ai/image/2025-10-28/Xsfj5zyzaB.png", label: "Help", key: "help" },
    { icon: "https://static.codia.ai/image/2025-10-28/cuopThxdCh.png", label: "Settings", key: "settings" },
  ];

  return (
    <aside className="w-64 bg-white shadow-md flex flex-col py-6 justify-between">
      <div>
        <h2 className="font-poppins font-medium text-4xl text-dark px-6 mb-8">
          <span className="text-secondary">Deccan</span>Stay
        </h2>

        <nav>
          {menuItems.map((item) => (
            <button
              key={item.key}
              onClick={() => setActivePage(item.key)}
              className={`flex items-center w-full px-6 py-3 text-lg transition-colors ${
                activePage === item.key
                  ? "bg-blue-700 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <img src={item.icon} alt={item.label} className="w-6 h-6 object-contain" />
              <span className="ml-3">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      <button
        onClick={() => navigate("/booking-confirmation")}
        className="flex items-center justify-center bg-blue-100 text-blue-700 mx-6 py-3 rounded-lg font-medium hover:bg-blue-200 transition"
      >
        ← Back
      </button>
    </aside>
  );
};


/* ======================= 🌤 HEADER ======================= */
const Headerss = () => {
  const { user } = useContext(AuthContext);

  // Display username: use user.name if available, else fallback to email
  const displayName = user?.name || user?.email || "User";

  return (
    <header className="bg-gray-50 px-6 py-6 border-b border-gray-200 sticky top-0 z-50">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold text-black tracking-wide mb-1">
            Hello, {displayName}
          </h2>
          <p className="text-sm text-gray-500">Have a nice day</p>
        </div>

        <div className="flex items-center gap-6">
          <img
            src="https://static.codia.ai/image/2025-10-28/WuAnhG6pOY.png"
            alt="Notifications"
            className="w-6 h-6"
          />
          <div className="w-px h-8 bg-gray-300"></div>
          <div className="flex items-center gap-3 pr-2">
            <img
              src="https://static.codia.ai/image/2025-10-28/dBKtQVuRL8.png"
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-semibold text-black">Welcome</p>
              <p className="text-xs text-gray-500">{displayName}</p>
            </div>
            <img
              src="https://static.codia.ai/image/2025-10-28/oqqvzXHJ08.png"
              alt="Dropdown"
              className="w-5 h-5"
            />
          </div>
        </div>
      </div>
    </header>
  );
};


/* ======================= 🔍 SEARCH + SORT ======================= */
const SearchAndSort = ({ searchTerm, setSearchTerm, sortOrder, setSortOrder }) => (
  <div className="flex items-center justify-between mb-8">
    <div className="flex items-center bg-white rounded-2xl px-5 py-3 flex-1 max-w-3xl shadow-sm">
      <img
        src="https://static.codia.ai/image/2025-10-28/bms7dwkkhZ.png"
        alt="Search"
        className="w-4 h-4 mr-4"
      />
      <input
        type="text"
        placeholder="Search by hotel name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="flex-1 outline-none text-base text-gray-600"
      />
    </div>

    <div className="flex items-center gap-3 ml-6">
      <span className="font-semibold text-gray-600">Sort by</span>
      <select
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
        className="border border-gray-300 rounded-lg px-3 py-2 text-gray-700 outline-none"
      >
        <option value="asc">A → Z</option>
        <option value="desc">Z → A</option>
      </select>
    </div>
  </div>
);

/* ======================= 📦 BOOKING MODAL ======================= */
const BookingModal = ({ booking, onClose }) => {
  if (!booking) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-xl"
        >
          ✕
        </button>

        <img
          src={booking.image}
          alt={booking.hotelName}
          className="w-full h-56 object-cover rounded-xl mb-4"
        />

        <h2 className="text-2xl font-semibold text-gray-800 mb-2">{booking.hotelName}</h2>
        <p className="text-gray-500 mb-3">📍 {booking.city}</p>
        <p className="text-gray-600">🗓 Check-in: {booking.checkIn}</p>
        <p className="text-gray-600 mb-2">🗓 Check-out: {booking.checkOut}</p>
        <p className="text-lg font-medium text-gray-800">
          💰 Price: ₹{booking.totalPrice?.toLocaleString()}
        </p>

        <div className="mt-6 text-right">
          <button
            onClick={onClose}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

/* ======================= 📊 MAIN DASHBOARD ======================= */
const UserDashboard = () => {
  const { user } = useContext(AuthContext);

  const [activePage, setActivePage] = useState("dashboard");
  const [bookings, setBookings] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [selectedBooking, setSelectedBooking] = useState(null);

  

  /* -------- Fetch User Bookings -------- */
 useEffect(() => {
  if (!user?.email) return;

  const fetchBookings = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/bookings/user-bookings?email=${user.email}`
      );
      setBookings(response.data);
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  };

  fetchBookings();
}, [user]);

  /* -------- Safety to prevent filter error -------- */
  const safeBookings = Array.isArray(bookings) ? bookings : [];

  const filteredBookings = safeBookings
    .filter((b) =>
      b?.hotelName?.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) =>
      sortOrder === "asc"
        ? a.hotelName.localeCompare(b.hotelName)
        : b.hotelName.localeCompare(a.hotelName)
    );

  /* -------- Page Switch -------- */
  const renderContent = () => {
    switch (activePage) {
      case "refunds":
        return <Refund />;
      case "messages":
        return <Message />;
      case "help":
        return <Help />;
      case "settings":
        return <Setting />;

      default:
        return (
          <>
            <SearchAndSort
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              sortOrder={sortOrder}
              setSortOrder={setSortOrder}
            />

            {filteredBookings.length === 0 ? (
              <p className="text-gray-500 text-center mt-10">No bookings found.</p>
            ) : (
              <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredBookings.map((booking) => (
                  <div
                    key={booking._id}
                    className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
                  >
                    <img
                      src={booking.image}
                      alt={booking.hotelName}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">
                        {booking.hotelName}
                      </h3>
                      <p className="text-sm text-gray-500 mb-2">📍 {booking.city}</p>
                      <p className="text-sm text-gray-500">
                        🗓 {booking.checkIn} → {booking.checkOut}
                      </p>
                      <p className="text-sm text-gray-700 font-medium mt-2">
                        💰 ₹{booking.totalPrice?.toLocaleString()}
                      </p>

                      <button
                        onClick={() => setSelectedBooking(booking)}
                        className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </section>
            )}
          </>
        );
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebars activePage={activePage} setActivePage={setActivePage} />
      <div className="flex-1 flex flex-col">
        <Headerss />

        <main className="p-8 relative">
          {renderContent()}

          {selectedBooking && (
            <BookingModal
              booking={selectedBooking}
              onClose={() => setSelectedBooking(null)}
            />
          )}
        </main>
      </div>
    </div>
  );
};

export default UserDashboard;
