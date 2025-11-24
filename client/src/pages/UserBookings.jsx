// import React, { useState } from "react";

// const UserBookings = () => {
//   const [bookings, setBookings] = useState([
//     {
//       id: 1,
//       userName: "Rahul Verma",
//       hotelName: "Deccan Stay",
//       price: "₹4500",
//       persons: 2,
//       bookedDate: "2025-10-25",
//     },
//     {
//       id: 2,
//       userName: "Ananya Gupta",
//       hotelName: "Hyatt Regency",
//       price: "₹7800",
//       persons: 3,
//       bookedDate: "2025-10-29",
//     },
//     {
//       id: 3,
//       userName: "Vikram Singh",
//       hotelName: "Taj Banjara",
//       price: "₹9800",
//       persons: 4,
//       bookedDate: "2025-09-20",
//     },
//   ]);

//   const [searchQuery, setSearchQuery] = useState("");
//   const [sortOrder, setSortOrder] = useState("latest");
//   const [editingId, setEditingId] = useState(null);
//   const [deletingId, setDeletingId] = useState(null);
//   const [editData, setEditData] = useState({
//     userName: "",
//     hotelName: "",
//     price: "",
//     persons: "",
//     bookedDate: "",
//   });

//   // 🔹 Filter + Sort logic
//   const filteredBookings = bookings
//     .filter(
//       (b) =>
//         b.userName.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         b.hotelName.toLowerCase().includes(searchQuery.toLowerCase())
//     )
//     .sort((a, b) => {
//       const dateA = new Date(a.bookedDate);
//       const dateB = new Date(b.bookedDate);
//       return sortOrder === "latest" ? dateB - dateA : dateA - dateB;
//     });

//   const toggleSort = () => {
//     setSortOrder((prev) => (prev === "latest" ? "oldest" : "latest"));
//   };

//   const handleEdit = (booking) => {
//     setEditingId(booking.id);
//     setDeletingId(null);
//     setEditData({ ...booking });
//   };

//   const handleDeleteClick = (id) => {
//     setDeletingId(id);
//     setEditingId(null);
//   };

//   const confirmDelete = (id) => {
//     setBookings(bookings.filter((b) => b.id !== id));
//     setDeletingId(null);
//   };

//   const cancelDelete = () => {
//     setDeletingId(null);
//   };

//   const handleChange = (e) => {
//     setEditData({ ...editData, [e.target.name]: e.target.value });
//   };

//   const handleSave = (id) => {
//     const updatedBookings = bookings.map((b) =>
//       b.id === id ? { ...editData, id } : b
//     );
//     setBookings(updatedBookings);
//     setEditingId(null);
//   };

//   const handleCancelEdit = () => {
//     setEditingId(null);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col">
//       <main className="flex-1 p-8">
//         <h1 className="text-2xl font-bold text-primary mb-8">
//           List of Hotel Bookings
//         </h1>

//         {/* 🔹 Search + Sort */}
//         <div className="bg-white rounded-2xl shadow p-6 mb-10">
//           <div className="flex flex-wrap items-center justify-between gap-4">
//             <div className="relative flex-1 min-w-[200px]">
//               <input
//                 type="text"
//                 placeholder="Search by user or hotel"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-xl focus:ring-2 focus:ring-primary focus:outline-none"
//               />
//               <img
//                 src="https://static.codia.ai/image/2025-10-28/AArAoh8bEY.png"
//                 alt="Search"
//                 className="absolute left-3 top-3 w-5 h-5 opacity-70"
//               />
//             </div>

//             <button
//               onClick={toggleSort}
//               className="flex items-center gap-2 bg-gray-100 px-4 py-3 rounded-xl hover:bg-gray-200 transition"
//             >
//               <span className="font-semibold text-gray-700">
//                 Sort by: {sortOrder === "latest" ? "Latest" : "Oldest"}
//               </span>
//               <img
//                 src="https://static.codia.ai/image/2025-10-28/NbKmztY1gj.png"
//                 alt="Sort"
//                 className="w-4 h-4"
//               />
//             </button>
//           </div>
//         </div>

//         {/* 🔹 Table */}
//         <div className="bg-white rounded-2xl shadow p-6">
//           <div className="overflow-x-auto">
//             <table className="min-w-full text-left border-collapse">
//               <thead>
//                 <tr className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
//                   <th className="py-3 px-6 rounded-l-xl">User Name</th>
//                   <th className="py-3 px-6">Hotel Name</th>
//                   <th className="py-3 px-6">Price</th>
//                   <th className="py-3 px-6">No. of Persons</th>
//                   <th className="py-3 px-6">Booked Date</th>
//                   <th className="py-3 px-6 rounded-r-xl">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredBookings.map((booking) =>
//                   editingId === booking.id ? (
//                     <tr key={booking.id} className="border-b bg-blue-50">
//                       <td className="py-3 px-6">
//                         <input
//                           type="text"
//                           name="userName"
//                           value={editData.userName}
//                           onChange={handleChange}
//                           className="w-full border rounded-lg px-2 py-1"
//                         />
//                       </td>
//                       <td className="py-3 px-6">
//                         <input
//                           type="text"
//                           name="hotelName"
//                           value={editData.hotelName}
//                           onChange={handleChange}
//                           className="w-full border rounded-lg px-2 py-1"
//                         />
//                       </td>
//                       <td className="py-3 px-6">
//                         <input
//                           type="text"
//                           name="price"
//                           value={editData.price}
//                           onChange={handleChange}
//                           className="w-full border rounded-lg px-2 py-1"
//                         />
//                       </td>
//                       <td className="py-3 px-6">
//                         <input
//                           type="number"
//                           name="persons"
//                           value={editData.persons}
//                           onChange={handleChange}
//                           className="w-full border rounded-lg px-2 py-1"
//                         />
//                       </td>
//                       <td className="py-3 px-6">
//                         <input
//                           type="date"
//                           name="bookedDate"
//                           value={editData.bookedDate}
//                           onChange={handleChange}
//                           className="w-full border rounded-lg px-2 py-1"
//                         />
//                       </td>
//                       <td className="py-3 px-6 flex gap-3">
//                         <button
//                           onClick={() => handleSave(booking.id)}
//                           className="text-green-600 font-semibold text-sm hover:underline"
//                         >
//                           Save
//                         </button>
//                         <button
//                           onClick={handleCancelEdit}
//                           className="text-gray-500 text-sm hover:underline"
//                         >
//                           Cancel
//                         </button>
//                       </td>
//                     </tr>
//                   ) : deletingId === booking.id ? (
//                     <tr key={booking.id} className="bg-red-50 border-b">
//                       <td colSpan="6" className="py-4 px-6 text-center">
//                         <span className="text-gray-700 font-semibold mr-4">
//                           Are you sure you want to delete this booking?
//                         </span>
//                         <button
//                           onClick={() => confirmDelete(booking.id)}
//                           className="text-red-600 font-semibold hover:underline mx-1"
//                         >
//                           Yes
//                         </button>
//                         <button
//                           onClick={cancelDelete}
//                           className="text-gray-500 hover:underline mx-1"
//                         >
//                           No
//                         </button>
//                       </td>
//                     </tr>
//                   ) : (
//                     <tr
//                       key={booking.id}
//                       className="border-b hover:bg-gray-50 transition"
//                     >
//                       <td className="py-3 px-6">{booking.userName}</td>
//                       <td className="py-3 px-6">{booking.hotelName}</td>
//                       <td className="py-3 px-6">{booking.price}</td>
//                       <td className="py-3 px-6">{booking.persons}</td>
//                       <td className="py-3 px-6">{booking.bookedDate}</td>
//                       <td className="py-3 px-6 flex justify-center gap-3">
//                         <img
//                           src="https://static.codia.ai/image/2025-10-28/71q6BGj9ra.png"
//                           alt="Edit"
//                           className="w-5 h-5 cursor-pointer hover:scale-110 transition"
//                           onClick={() => handleEdit(booking)}
//                         />
//                         <img
//                           src="https://static.codia.ai/image/2025-10-28/S8r5ZKB0Fy.png"
//                           alt="Delete"
//                           className="w-5 h-5 cursor-pointer hover:scale-110 transition"
//                           onClick={() => handleDeleteClick(booking.id)}
//                         />
//                       </td>
//                     </tr>
//                   )
//                 )}
//                 {filteredBookings.length === 0 && (
//                   <tr>
//                     <td
//                       colSpan="6"
//                       className="text-center py-6 text-gray-500 italic"
//                     >
//                       No bookings found.
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default UserBookings;























// import React, { useState, useEffect } from "react";
// import axios from "axios";
// const UserBookings = () => {
//   const [bookings, setBookings] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [sortOrder, setSortOrder] = useState("latest");
//   const [editingId, setEditingId] = useState(null);
//   const [deletingId, setDeletingId] = useState(null);
//   const [editData, setEditData] = useState({
//     userName: "",
//     hotelName: "",
//     price: "",
//     persons: "",
//     bookedDate: "",
//   });

//   // ✅ Fetch all bookings from backend
//   useEffect(() => {
//   const fetchAllBookings = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/api/bookings/all-bookings");
//       setBookings(response.data);
//     } catch (error) {
//       console.error("Admin fetch error:", error);
//     }
//   };

//   fetchAllBookings();
// }, []);

//   // 🔹 Filter + Sort logic
//   const filteredBookings = bookings
//     .filter(
//       (b) =>
//         b.userName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         b.hotelName?.toLowerCase().includes(searchQuery.toLowerCase())
//     )
//     .sort((a, b) => {
//       const dateA = new Date(a.bookedDate);
//       const dateB = new Date(b.bookedDate);
//       return sortOrder === "latest" ? dateB - dateA : dateA - dateB;
//     });

//   const toggleSort = () =>
//     setSortOrder((prev) => (prev === "latest" ? "oldest" : "latest"));

//   // ✏️ Edit / Delete / Save
//   const handleEdit = (booking) => {
//     setEditingId(booking._id);
//     setDeletingId(null);
//     setEditData({ ...booking });
//   };

//   const handleDeleteClick = (id) => {
//     setDeletingId(id);
//     setEditingId(null);
//   };

//   const confirmDelete = async (id) => {
//     try {
//       await fetch(`http://localhost:5000/api/bookings/${id}`, {
//         method: "DELETE",
//       });
//       setBookings(bookings.filter((b) => b._id !== id));
//     } catch (err) {
//       console.error("❌ Error deleting booking:", err);
//     }
//     setDeletingId(null);
//   };

//   const cancelDelete = () => setDeletingId(null);

//   const handleChange = (e) => {
//     setEditData({ ...editData, [e.target.name]: e.target.value });
//   };

//   const handleSave = async (id) => {
//     try {
//       const res = await fetch(`http://localhost:5000/api/bookings/${id}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(editData),
//       });
//       const data = await res.json();

//       if (data.success) {
//         const updatedBookings = bookings.map((b) =>
//           b._id === id ? data.booking : b
//         );
//         setBookings(updatedBookings);
//         setEditingId(null);
//       } else {
//         console.error("⚠️ Error updating booking:", data.message);
//       }
//     } catch (err) {
//       console.error("❌ Error saving booking:", err);
//     }
//   };

//   const handleCancelEdit = () => setEditingId(null);

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col">
//       <main className="flex-1 p-8">
//         <h1 className="text-2xl font-bold text-primary mb-8">
//           List of Hotel Bookings
//         </h1>

//         {/* 🔹 Search + Sort */}
//         <div className="bg-white rounded-2xl shadow p-6 mb-10">
//           <div className="flex flex-wrap items-center justify-between gap-4">
//             <div className="relative flex-1 min-w-[200px]">
//               <input
//                 type="text"
//                 placeholder="Search by user or hotel"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-xl focus:ring-2 focus:ring-primary focus:outline-none"
//               />
//               <img
//                 src="https://static.codia.ai/image/2025-10-28/AArAoh8bEY.png"
//                 alt="Search"
//                 className="absolute left-3 top-3 w-5 h-5 opacity-70"
//               />
//             </div>

//             <button
//               onClick={toggleSort}
//               className="flex items-center gap-2 bg-gray-100 px-4 py-3 rounded-xl hover:bg-gray-200 transition"
//             >
//               <span className="font-semibold text-gray-700">
//                 Sort by: {sortOrder === "latest" ? "Latest" : "Oldest"}
//               </span>
//               <img
//                 src="https://static.codia.ai/image/2025-10-28/NbKmztY1gj.png"
//                 alt="Sort"
//                 className="w-4 h-4"
//               />
//             </button>
//           </div>
//         </div>

//         {/* 🔹 Table */}
//         <div className="bg-white rounded-2xl shadow p-6">
//           <div className="overflow-x-auto">
//             <table className="min-w-full text-left border-collapse">
//               <thead>
//                 <tr className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
//                   <th className="py-3 px-6 rounded-l-xl">User Name</th>
//                   <th className="py-3 px-6">Hotel Name</th>
//                   <th className="py-3 px-6">Price</th>
//                   <th className="py-3 px-6">No. of Persons</th>
//                   <th className="py-3 px-6">Booked Date</th>
//                   <th className="py-3 px-6 rounded-r-xl">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredBookings.map((booking) =>
//                   editingId === booking._id ? (
//                     <tr key={booking._id} className="border-b bg-blue-50">
//                       <td className="py-3 px-6">
//                         <input
//                           type="text"
//                           name="userName"
//                           value={editData.userName}
//                           onChange={handleChange}
//                           className="w-full border rounded-lg px-2 py-1"
//                         />
//                       </td>
//                       <td className="py-3 px-6">
//                         <input
//                           type="text"
//                           name="hotelName"
//                           value={editData.hotelName}
//                           onChange={handleChange}
//                           className="w-full border rounded-lg px-2 py-1"
//                         />
//                       </td>
//                       <td className="py-3 px-6">
//                         <input
//                           type="text"
//                           name="price"
//                           value={editData.price}
//                           onChange={handleChange}
//                           className="w-full border rounded-lg px-2 py-1"
//                         />
//                       </td>
//                       <td className="py-3 px-6">
//                         <input
//                           type="number"
//                           name="persons"
//                           value={editData.persons}
//                           onChange={handleChange}
//                           className="w-full border rounded-lg px-2 py-1"
//                         />
//                       </td>
//                       <td className="py-3 px-6">
//                         <input
//                           type="date"
//                           name="bookedDate"
//                           value={editData.bookedDate?.split("T")[0] || ""}
//                           onChange={handleChange}
//                           className="w-full border rounded-lg px-2 py-1"
//                         />
//                       </td>
//                       <td className="py-3 px-6 flex gap-3">
//                         <button
//                           onClick={() => handleSave(booking._id)}
//                           className="text-green-600 font-semibold text-sm hover:underline"
//                         >
//                           Save
//                         </button>
//                         <button
//                           onClick={handleCancelEdit}
//                           className="text-gray-500 text-sm hover:underline"
//                         >
//                           Cancel
//                         </button>
//                       </td>
//                     </tr>
//                   ) : deletingId === booking._id ? (
//                     <tr key={booking._id} className="bg-red-50 border-b">
//                       <td colSpan="6" className="py-4 px-6 text-center">
//                         <span className="text-gray-700 font-semibold mr-4">
//                           Are you sure you want to delete this booking?
//                         </span>
//                         <button
//                           onClick={() => confirmDelete(booking._id)}
//                           className="text-red-600 font-semibold hover:underline mx-1"
//                         >
//                           Yes
//                         </button>
//                         <button
//                           onClick={cancelDelete}
//                           className="text-gray-500 hover:underline mx-1"
//                         >
//                           No
//                         </button>
//                       </td>
//                     </tr>
//                   ) : (
//                     <tr
//                       key={booking._id}
//                       className="border-b hover:bg-gray-50 transition"
//                     >
//                       <td className="py-3 px-6">{booking.userName}</td>
//                       <td className="py-3 px-6">{booking.hotelName}</td>
//                       <td className="py-3 px-6">{booking.price}</td>
//                       <td className="py-3 px-6">{booking.persons}</td>
//                       <td className="py-3 px-6">
//                         {new Date(booking.bookedDate).toLocaleDateString()}
//                       </td>
//                       <td className="py-3 px-6 flex justify-center gap-3">
//                         <img
//                           src="https://static.codia.ai/image/2025-10-28/71q6BGj9ra.png"
//                           alt="Edit"
//                           className="w-5 h-5 cursor-pointer hover:scale-110 transition"
//                           onClick={() => handleEdit(booking)}
//                         />
//                         <img
//                           src="https://static.codia.ai/image/2025-10-28/S8r5ZKB0Fy.png"
//                           alt="Delete"
//                           className="w-5 h-5 cursor-pointer hover:scale-110 transition"
//                           onClick={() => handleDeleteClick(booking._id)}
//                         />
//                       </td>
//                     </tr>
//                   )
//                 )}
//                 {filteredBookings.length === 0 && (
//                   <tr>
//                     <td
//                       colSpan="6"
//                       className="text-center py-6 text-gray-500 italic"
//                     >
//                       No bookings found.
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default UserBookings;


















































































import React, { useState, useEffect } from "react";
import axios from "axios";

const UserBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("latest");
  const [editingId, setEditingId] = useState(null);
  const [deletingId, setDeletingId] = useState(null);

  const [editData, setEditData] = useState({
    name: "",
    hotelName: "",
    totalPrice: "",
    guests: "",
    createdAt: "",
  });

  // ✅ Fetch all bookings
  useEffect(() => {
    const fetchAllBookings = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/bookings/all-bookings"
        );
        setBookings(response.data);
      } catch (error) {
        console.error("Admin fetch error:", error);
      }
    };

    fetchAllBookings();
  }, []);

  // 🔹 Filter + Sort logic
  const filteredBookings = bookings
    .filter(
      (b) =>
        b.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        b.hotelName?.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);
      return sortOrder === "latest" ? dateB - dateA : dateA - dateB;
    });

  const toggleSort = () =>
    setSortOrder((prev) => (prev === "latest" ? "oldest" : "latest"));

  // ✏️ Edit / Delete / Save Logic
  const handleEdit = (booking) => {
    setEditingId(booking._id);
    setDeletingId(null);
    setEditData({
      name: booking.name,
      hotelName: booking.hotelName,
      totalPrice: booking.totalPrice,
      guests: booking.guests,
      createdAt: booking.createdAt,
    });
  };

  const handleDeleteClick = (id) => {
    setDeletingId(id);
    setEditingId(null);
  };

  const confirmDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/bookings/${id}`);
      setBookings(bookings.filter((b) => b._id !== id));
    } catch (err) {
      console.error("❌ Error deleting booking:", err);
    }
    setDeletingId(null);
  };

  const cancelDelete = () => setDeletingId(null);

  const handleChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const handleSave = async (id) => {
    try {
      const res = await axios.put(
        `http://localhost:5000/api/bookings/${id}`,
        editData
      );

      if (res.data.success) {
        const updatedBookings = bookings.map((b) =>
          b._id === id ? res.data.booking : b
        );
        setBookings(updatedBookings);
        setEditingId(null);
      } else {
        console.error("⚠️ Error updating booking:", res.data.message);
      }
    } catch (err) {
      console.error("❌ Error saving booking:", err);
    }
  };

  const handleCancelEdit = () => setEditingId(null);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold text-primary mb-8">
          List of Hotel Bookings
        </h1>

        {/* 🔹 Search + Sort */}
        <div className="bg-white rounded-2xl shadow p-6 mb-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="relative flex-1 min-w-[200px]">
              <input
                type="text"
                placeholder="Search by user or hotel"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-xl focus:ring-2 focus:ring-primary"
              />
            </div>

            <button
              onClick={toggleSort}
              className="bg-gray-100 px-4 py-3 rounded-xl hover:bg-gray-200 transition"
            >
              Sort by:{" "}
              <span className="font-semibold">
                {sortOrder === "latest" ? "Latest" : "Oldest"}
              </span>
            </button>
          </div>
        </div>

        {/* 🔹 Table */}
        <div className="bg-white rounded-2xl shadow p-6">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
                  <th className="py-3 px-6 rounded-l-xl">User Name</th>
                  <th className="py-3 px-6">Hotel Name</th>
                  <th className="py-3 px-6">Price</th>
                  <th className="py-3 px-6">No. of Persons</th>
                  <th className="py-3 px-6">Booked Date</th>
                  <th className="py-3 px-6 rounded-r-xl">Actions</th>
                </tr>
              </thead>

              <tbody>
                {filteredBookings.map((booking) =>
                  editingId === booking._id ? (
                    // ✏️ Editable row
                    <tr key={booking._id} className="border-b bg-blue-50">
                      <td className="py-3 px-6">
                        <input
                          type="text"
                          name="name"
                          value={editData.name}
                          onChange={handleChange}
                          className="w-full border rounded-lg px-2 py-1"
                        />
                      </td>

                      <td className="py-3 px-6">
                        <input
                          type="text"
                          name="hotelName"
                          value={editData.hotelName}
                          onChange={handleChange}
                          className="w-full border rounded-lg px-2 py-1"
                        />
                      </td>

                      <td className="py-3 px-6">
                        <input
                          type="number"
                          name="totalPrice"
                          value={editData.totalPrice}
                          onChange={handleChange}
                          className="w-full border rounded-lg px-2 py-1"
                        />
                      </td>

                      <td className="py-3 px-6">
                        <input
                          type="number"
                          name="guests"
                          value={editData.guests}
                          onChange={handleChange}
                          className="w-full border rounded-lg px-2 py-1"
                        />
                      </td>

                      <td className="py-3 px-6">
                        <input
                          type="date"
                          name="createdAt"
                          value={editData.createdAt?.split("T")[0]}
                          onChange={handleChange}
                          className="w-full border rounded-lg px-2 py-1"
                        />
                      </td>

                      <td className="py-3 px-6 flex gap-3">
                        <button
                          onClick={() => handleSave(booking._id)}
                          className="text-green-600 font-semibold hover:underline"
                        >
                          Save
                        </button>
                        <button
                          onClick={handleCancelEdit}
                          className="text-gray-500 hover:underline"
                        >
                          Cancel
                        </button>
                      </td>
                    </tr>
                  ) : deletingId === booking._id ? (
                    // ❌ Delete confirmation row
                    <tr key={booking._id} className="bg-red-50 border-b">
                      <td colSpan="6" className="py-4 text-center">
                        <span className="font-semibold mr-4">
                          Confirm delete?
                        </span>
                        <button
                          onClick={() => confirmDelete(booking._id)}
                          className="text-red-600 font-bold mx-2"
                        >
                          Yes
                        </button>
                        <button
                          onClick={cancelDelete}
                          className="text-gray-600 mx-2"
                        >
                          No
                        </button>
                      </td>
                    </tr>
                  ) : (
                    // Normal row
                    <tr
                      key={booking._id}
                      className="border-b hover:bg-gray-50 transition"
                    >
                      <td className="py-3 px-6">{booking.name}</td>
                      <td className="py-3 px-6">{booking.hotelName}</td>
                      <td className="py-3 px-6">₹{booking.totalPrice}</td>
                      <td className="py-3 px-6">{booking.guests}</td>
                      <td className="py-3 px-6">
                        {new Date(booking.createdAt).toLocaleDateString(
                          "en-IN"
                        )}
                      </td>

                      <td className="py-3 px-6 flex gap-4">
                        <img
    src="https://static.codia.ai/image/2025-10-28/71q6BGj9ra.png"
    alt="Edit"
    className="w-6 h-6 cursor-pointer hover:scale-110 transition"
    onClick={() => handleEdit(booking)}
  />

                        <img
    src="https://static.codia.ai/image/2025-10-28/S8r5ZKB0Fy.png"
    alt="Delete"
    className="w-6 h-6 cursor-pointer hover:scale-110 transition"
    onClick={() => handleDeleteClick(booking._id)}
  />
                      </td>
                    </tr>
                  )
                )}

                {filteredBookings.length === 0 && (
                  <tr>
                    <td colSpan="6" className="text-center py-6 text-gray-500">
                      No bookings found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserBookings;
