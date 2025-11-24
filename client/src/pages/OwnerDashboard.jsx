// import React, { useState } from "react";
// import Sidebarss from "./Sidebarss";
// import Headersss from "./Headersss";
// import SearchBars from "./SearchBars";
// import RoomsList from "./RoomsList";
// import Refund from "./Refund";
// import Message from "./Message";
// import Help from "./Help";
// import Setting from "./Setting";


// const OwnerDashboard = () => {
 
//   const [activeTab, setActiveTab] = useState("dashboard");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [sortOption, setSortOption] = useState("date");

//   const [rooms, setRooms] = useState([
//     {
//       name: "Blue Origin Fams",
//       date: "2025-11-01",
//       description: "Spacious room with a beautiful view",
//       image: "https://static.codia.ai/image/2025-10-29/Pite8uBEBg.png",
//     },
//     {
//       name: "Sunset Deluxe",
//       date: "2025-10-25",
//       description: "Luxury room with balcony",
//       image: "https://static.codia.ai/image/2025-10-29/Pite8uBEBg.png",
//     },
//     {
//       name: "Ocean View Suite",
//       date: "2025-11-03",
//       description: "Premium suite with ocean view",
//       image: "https://static.codia.ai/image/2025-10-29/Pite8uBEBg.png",
//     },
//     {
//       name: "Mountain Retreat",
//       date: "2025-10-28",
//       description: "Cozy room with mountain scenery",
//       image: "https://static.codia.ai/image/2025-10-29/Pite8uBEBg.png",
//     },
//   ]);

//   const filteredRooms = rooms
//     .filter((room) =>
//       room.name.toLowerCase().includes(searchQuery.toLowerCase())
//     )
//     .sort((a, b) => {
//       if (sortOption === "name") return a.name.localeCompare(b.name);
//       if (sortOption === "date") return new Date(a.date) - new Date(b.date);
//       return 0;
//     });

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       <Sidebarss activeTab={activeTab} setActiveTab={setActiveTab} />

//       <div className="flex-1 flex flex-col">
//         <Headersss />

//         <main className="flex-1 p-6">
//           {activeTab === "dashboard" && (
//             <>
//               <SearchBars
//                 onSearch={(query) => setSearchQuery(query)}
//                 onSort={(option) => setSortOption(option)}
//               />
//               <RoomsList rooms={filteredRooms} setRooms={setRooms} />
//             </>
//           )}

//           {activeTab === "refunds" && <Refund />}
//           {activeTab === "message" && <Message />}
//           {activeTab === "help" && <Help />}
//           {activeTab === "setting" && <Setting />}

          
          
//         </main>
//       </div>
//     </div>
//   );
// };

// export default OwnerDashboard;















// import React, { useState, useEffect } from "react";
// import Sidebarss from "./Sidebarss";
// import Headersss from "./Headersss";
// import SearchBars from "./SearchBars";
// import RoomsList from "./RoomsList";
// import Refund from "./Refund";
// import Message from "./Message";
// import Help from "./Help";
// import Setting from "./Setting";

// const OwnerDashboard = () => {
//   const [activeTab, setActiveTab] = useState("dashboard");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [sortOption, setSortOption] = useState("date");
//   const [rooms, setRooms] = useState([]); // bookings list
//   const [loading, setLoading] = useState(true);

//   // ✅ Fetch bookings from backend (MongoDB)
//   useEffect(() => {
//     const fetchBookings = async () => {
//       try {
//         const res = await fetch("http://localhost:5000/api/bookings/all");
//         const data = await res.json();

//         if (res.ok) {
//           // Transform MongoDB data to match RoomsList fields
//           const formatted = data.map((b) => ({
//             id: b._id,
//             name: b.hotelName || "Unnamed Hotel",
//             user: b.username || b.userName || "Unknown User",
//             price: b.price ? `₹${b.price}` : "₹—",
//             persons: b.noOfPersons || 1,
//             date: new Date(b.createdAt).toLocaleDateString(),
//             image:
//               b.image ||
//               "https://static.codia.ai/image/2025-10-29/Pite8uBEBg.png",
//           }));
//           setRooms(formatted);
//         } else {
//           console.error("Failed to fetch bookings:", data.message);
//         }
//       } catch (err) {
//         console.error("Error fetching bookings:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBookings();
//   }, []);

//   // ✅ Filter + sort
//   const filteredRooms = rooms
//     .filter((room) =>
//       room.name.toLowerCase().includes(searchQuery.toLowerCase())
//     )
//     .sort((a, b) => {
//       if (sortOption === "name") return a.name.localeCompare(b.name);
//       if (sortOption === "date")
//         return new Date(b.date) - new Date(a.date); // latest first
//       return 0;
//     });

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       <Sidebarss activeTab={activeTab} setActiveTab={setActiveTab} />

//       <div className="flex-1 flex flex-col">
//         <Headersss />

//         <main className="flex-1 p-6">
//           {activeTab === "dashboard" && (
//             <>
//               <SearchBars
//                 onSearch={(query) => setSearchQuery(query)}
//                 onSort={(option) => setSortOption(option)}
//               />

//               {loading ? (
//                 <p className="text-center text-gray-500 mt-10">
//                   Loading bookings...
//                 </p>
//               ) : filteredRooms.length > 0 ? (
//                 <RoomsList rooms={filteredRooms} setRooms={setRooms} />
//               ) : (
//                 <p className="text-center text-gray-500 mt-10">
//                   No bookings found.
//                 </p>
//               )}
//             </>
//           )}

//           {activeTab === "refunds" && <Refund />}
//           {activeTab === "message" && <Message />}
//           {activeTab === "help" && <Help />}
//           {activeTab === "setting" && <Setting />}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default OwnerDashboard;































// import React, { useState, useEffect } from "react";
// import Sidebarss from "./Sidebarss";
// import Headersss from "./Headersss";
// import SearchBars from "./SearchBars";
// import Refund from "./Refund";
// import Message from "./Message";
// import Help from "./Help";
// import Setting from "./Setting";

// const OwnerDashboard = () => {
//   const [activeTab, setActiveTab] = useState("dashboard");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [sortOption, setSortOption] = useState("date");
//   const [hotels, setHotels] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // ✅ Fetch registered hotels from backend
//   useEffect(() => {
//     const fetchHotels = async () => {
//       try {
//         const res = await fetch("http://localhost:5000/api/hotels/all");
//         const data = await res.json();

//         if (res.ok && data.success) {
//           const formatted = data.hotels.map((hotel) => ({
//             id: hotel._id,
//             name: hotel.hotelName || "Unnamed Hotel",
//             owner: hotel.name || "Unknown Owner",
//             address: hotel.address || "No Address",
//             facilities: hotel.facilities || "No Facilities",
//             image:
//               hotel.images?.[0] ||
//               "https://static.codia.ai/image/2025-10-29/Pite8uBEBg.png",
//             date: new Date(hotel.createdAt).toLocaleDateString(),
//           }));
//           setHotels(formatted);
//         } else {
//           console.error("Failed to fetch hotels:", data.message);
//         }
//       } catch (err) {
//         console.error("Error fetching hotels:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchHotels();
//   }, []);

//   // ✅ Filter + sort hotels
//   const filteredHotels = hotels
//     .filter((hotel) =>
//       hotel.name.toLowerCase().includes(searchQuery.toLowerCase())
//     )
//     .sort((a, b) => {
//       if (sortOption === "name") return a.name.localeCompare(b.name);
//       if (sortOption === "date")
//         return new Date(b.date) - new Date(a.date); // latest first
//       return 0;
//     });

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       <Sidebarss activeTab={activeTab} setActiveTab={setActiveTab} />

//       <div className="flex-1 flex flex-col">
//         <Headersss />

//         <main className="flex-1 p-6">
//           {activeTab === "dashboard" && (
//             <>
//               <SearchBars
//                 onSearch={(query) => setSearchQuery(query)}
//                 onSort={(option) => setSortOption(option)}
//               />

//               {loading ? (
//                 <p className="text-center text-gray-500 mt-10">
//                   Loading hotels...
//                 </p>
//               ) : filteredHotels.length > 0 ? (
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                   {filteredHotels.map((hotel) => (
//                     <div
//                       key={hotel.id}
//                       className="bg-white p-4 rounded-lg shadow-sm"
//                     >
//                       <img
//                         src={`http://localhost:5000/${hotel.image}`}
//                         alt={hotel.name}
//                         className="w-full h-40 object-cover rounded mb-3"
//                       />
//                       <h3 className="font-semibold text-lg">{hotel.name}</h3>
//                       <p className="text-gray-600 text-sm">Owner: {hotel.owner}</p>
//                       <p className="text-gray-600 text-sm">Address: {hotel.address}</p>
//                       <p className="text-gray-600 text-sm">
//                         Facilities: {hotel.facilities}
//                       </p>
//                       <p className="text-gray-400 text-xs mt-1">Registered: {hotel.date}</p>
//                     </div>
//                   ))}
//                 </div>
//               ) : (
//                 <p className="text-center text-gray-500 mt-10">No hotels found.</p>
//               )}
//             </>
//           )}

//           {activeTab === "refunds" && <Refund />}
//           {activeTab === "message" && <Message />}
//           {activeTab === "help" && <Help />}
//           {activeTab === "setting" && <Setting />}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default OwnerDashboard;


































// import React, { useState, useEffect } from "react";
// import Sidebarss from "./Sidebarss";
// import Headersss from "./Headersss";
// import SearchBars from "./SearchBars";
// import Refund from "./Refund";
// import Message from "./Message";
// import Help from "./Help";
// import Setting from "./Setting";

// const OwnerDashboard = () => {
//   const [activeTab, setActiveTab] = useState("dashboard");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [sortOption, setSortOption] = useState("date");
//   const [hotels, setHotels] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Modal States
//   const [pdfModalOpen, setPdfModalOpen] = useState(false);
//   const [selectedPdf, setSelectedPdf] = useState(null);

//   // Fetch Hotels
//   useEffect(() => {
//     const fetchHotels = async () => {
//       try {
//         const res = await fetch("http://localhost:5000/api/hotels/all");
//         const data = await res.json();

//         if (res.ok && data.success) {
//           const formatted = data.hotels.map((hotel) => ({
//             id: hotel._id,
//             name: hotel.hotelName || "Unnamed Hotel",
//             owner: hotel.name || "Unknown Owner",
//             address: hotel.address || "No Address",
//             facilities: hotel.facilities || "No Facilities",
//             images: hotel.images || [], // ALL IMAGES
//             pdfs: hotel.documents || [], // ALL DOCUMENTS
//             date: new Date(hotel.createdAt).toLocaleDateString(),
//           }));
//           setHotels(formatted);
//         } else {
//           console.error("Failed to fetch hotels:", data.message);
//         }
//       } catch (err) {
//         console.error("Error fetching hotels:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchHotels();
//   }, []);

//   // Filtering & Sorting
//   const filteredHotels = hotels
//     .filter((hotel) =>
//       hotel.name.toLowerCase().includes(searchQuery.toLowerCase())
//     )
//     .sort((a, b) => {
//       if (sortOption === "name") return a.name.localeCompare(b.name);
//       if (sortOption === "date")
//         return new Date(b.date) - new Date(a.date);
//       return 0;
//     });

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       <Sidebarss activeTab={activeTab} setActiveTab={setActiveTab} />

//       <div className="flex-1 flex flex-col">
//         <Headersss />

//         <main className="flex-1 p-6">
//           {activeTab === "dashboard" && (
//             <>
//               <SearchBars
//                 onSearch={(query) => setSearchQuery(query)}
//                 onSort={(option) => setSortOption(option)}
//               />

//               {loading ? (
//                 <p className="text-center text-gray-500 mt-10">
//                   Loading hotels...
//                 </p>
//               ) : filteredHotels.length > 0 ? (
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                   {filteredHotels.map((hotel) => (
//                     <div
//                       key={hotel.id}
//                       className="bg-white p-4 rounded-lg shadow-sm"
//                     >
//                       {/* Image Gallery */}
//                       <div className="grid grid-cols-2 gap-2 mb-3">
//                         {hotel.images.length > 0 ? (
//                           hotel.images.slice(0, 2).map((img, index) => (
//                             <img
//                               key={index}
//                               src={`http://localhost:5000/${img}`}
//                               alt={hotel.name}
//                               className="h-32 w-full object-cover rounded"
//                             />
//                           ))
//                         ) : (
//                           <img
//                             src="https://static.codia.ai/image/2025-10-29/Pite8uBEBg.png"
//                             className="h-32 w-full object-cover rounded"
//                           />
//                         )}
//                       </div>

//                       <h3 className="font-semibold text-lg">{hotel.name}</h3>
//                       <p className="text-gray-600 text-sm">
//                         Owner: {hotel.owner}
//                       </p>
//                       <p className="text-gray-600 text-sm">
//                         Address: {hotel.address}
//                       </p>
//                       <p className="text-gray-600 text-sm">
//                         Facilities: {hotel.facilities}
//                       </p>

//                       {/* PDF Documents */}
//                       {hotel.pdfs.length > 0 && (
//                         <div className="mt-3">
//                           <p className="font-semibold text-sm mb-1">
//                             Documents:
//                           </p>

//                           {hotel.pdfs.map((pdf, index) => (
//                             <button
//                               key={index}
//                               onClick={() => {
//                                 setSelectedPdf(
//                                   `http://localhost:5000/${pdf}`
//                                 );
//                                 setPdfModalOpen(true);
//                               }}
//                               className="flex items-center gap-2 text-blue-600 underline text-sm"
//                             >
//                               📄 View PDF {index + 1}
//                             </button>
//                           ))}
//                         </div>
//                       )}

//                       <p className="text-gray-400 text-xs mt-2">
//                         Registered: {hotel.date}
//                       </p>
//                     </div>
//                   ))}
//                 </div>
//               ) : (
//                 <p className="text-center text-gray-500 mt-10">
//                   No hotels found.
//                 </p>
//               )}
//             </>
//           )}

//           {activeTab === "refunds" && <Refund />}
//           {activeTab === "message" && <Message />}
//           {activeTab === "help" && <Help />}
//           {activeTab === "setting" && <Setting />} 

//           {/* ---------- PDF MODAL ---------- */}
//           {pdfModalOpen && (
//             <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
//               <div className="bg-white rounded-lg w-full max-w-3xl overflow-hidden shadow-xl">

//                 <div className="flex justify-between items-center p-4 border-b">
//                   <h2 className="text-lg font-semibold">Document Preview</h2>
//                   <button
//                     onClick={() => setPdfModalOpen(false)}
//                     className="text-red-600 font-bold text-xl"
//                   >
//                     ✕
//                   </button>
//                 </div>

//                 <div className="p-4">
//                   {selectedPdf ? (
//                     <iframe
//                       src={selectedPdf}
//                       title="PDF Viewer"
//                       className="w-full h-[500px] border rounded"
//                     ></iframe>
//                   ) : (
//                     <p className="text-center text-gray-500">
//                       No PDF Selected
//                     </p>
//                   )}
//                 </div>

//                 <div className="p-3 border-t text-right">
//                   <button
//                     onClick={() => setPdfModalOpen(false)}
//                     className="bg-gray-700 text-white px-4 py-2 rounded"
//                   >
//                     Close
//                   </button>
//                 </div>

//               </div>
//             </div>
//           )}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default OwnerDashboard;

























































// import React, { useState, useEffect } from "react";
// import Sidebarss from "./Sidebarss";
// import Headersss from "./Headersss";
// import SearchBars from "./SearchBars";
// import Refund from "./Refund";
// import Message from "./Message";
// import Help from "./Help";
// import Setting from "./Setting";

// const OwnerDashboard = () => {
//   const [activeTab, setActiveTab] = useState("dashboard");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [sortOption, setSortOption] = useState("date");
//   const [hotels, setHotels] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Modal States
//   const [modalOpen, setModalOpen] = useState(false);
//   const [selectedHotel, setSelectedHotel] = useState(null);

//   // Fetch Hotels
//   useEffect(() => {
//     const fetchHotels = async () => {
//       try {
//         const res = await fetch("http://localhost:5000/api/hotels/all");
//         const data = await res.json();

//         if (res.ok && data.success) {
//           const formatted = data.hotels.map((hotel) => ({
//             id: hotel._id,
//             name: hotel.hotelName || "Unnamed Hotel",
//             owner: hotel.name || "Unknown Owner",
//             email: hotel.email || "N/A",
//             phoneNo: hotel.phoneNo || "N/A",
//             country: hotel.country || "N/A",
//             nic: hotel.nic || "N/A",
//             registrationNo: hotel.registrationNo || "N/A",
//             address: hotel.address || "No Address",
//             facilities: hotel.facilities || "No Facilities",
//             images: hotel.images || [],
//             pdfs: hotel.documents || [],
//             date: new Date(hotel.createdAt).toLocaleDateString(),
//           }));
//           setHotels(formatted);
//         } else {
//           console.error("Failed to fetch hotels:", data.message);
//         }
//       } catch (err) {
//         console.error("Error fetching hotels:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchHotels();
//   }, []);

//   // Filtering & Sorting
//   const filteredHotels = hotels
//     .filter((hotel) =>
//       hotel.name.toLowerCase().includes(searchQuery.toLowerCase())
//     )
//     .sort((a, b) => {
//       if (sortOption === "name") return a.name.localeCompare(b.name);
//       if (sortOption === "date") return new Date(b.date) - new Date(a.date);
//       return 0;
//     });

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       <Sidebarss activeTab={activeTab} setActiveTab={setActiveTab} />

//       <div className="flex-1 flex flex-col">
//         <Headersss />

//         <main className="flex-1 p-6">
//           {activeTab === "dashboard" && (
//             <>
//               <SearchBars
//                 onSearch={(query) => setSearchQuery(query)}
//                 onSort={(option) => setSortOption(option)}
//               />

//               {loading ? (
//                 <p className="text-center text-gray-500 mt-10">
//                   Loading hotels...
//                 </p>
//               ) : filteredHotels.length > 0 ? (
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                   {filteredHotels.map((hotel) => (
//                     <div
//                       key={hotel.id}
//                       className="bg-white p-4 rounded-lg shadow-sm"
//                     >
//                       {/* Main Image */}
//                       <img
//                         src={
//                           hotel.images.length
//                             ? `http://localhost:5000/${hotel.images[0]}`
//                             : "https://static.codia.ai/image/2025-10-29/Pite8uBEBg.png"
//                         }
//                         className="w-full h-48 object-cover rounded mb-3"
//                         alt="hotel"
//                       />

//                       <h3 className="font-semibold text-lg">{hotel.name}</h3>
//                       <p className="text-gray-600 text-sm">
//                         Owner: {hotel.owner}
//                       </p>
//                       <p className="text-gray-600 text-sm">
//                         Address: {hotel.address}
//                       </p>

//                       <button
//                         onClick={() => {
//                           setSelectedHotel(hotel);
//                           setModalOpen(true);
//                         }}
//                         className="mt-3 bg-blue-600 text-white px-4 py-2 rounded text-sm"
//                       >
//                         View Details
//                       </button>

//                       <p className="text-gray-400 text-xs mt-2">
//                         Registered: {hotel.date}
//                       </p>
//                     </div>
//                   ))}
//                 </div>
//               ) : (
//                 <p className="text-center text-gray-500 mt-10">
//                   No hotels found.
//                 </p>
//               )}
//             </>
//           )}

//           {activeTab === "refunds" && <Refund />}
//           {activeTab === "message" && <Message />}
//           {activeTab === "help" && <Help />}
//           {activeTab === "setting" && <Setting />}

//           {/* ---------- DETAILS MODAL ---------- */}
//           {modalOpen && selectedHotel && (
//             <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
//               <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-xl">

//                 {/* Header */}
//                 <div className="flex justify-between items-center p-4 border-b sticky top-0 bg-white z-10">
//                   <h2 className="text-lg font-semibold">Hotel Details</h2>
//                   <button
//                     onClick={() => setModalOpen(false)}
//                     className="text-red-600 font-bold text-xl"
//                   >
//                     ✕
//                   </button>
//                 </div>

//                 {/* Content */}
//                 <div className="p-4 space-y-4">

//                   {/* Large Image */}
//                   <img
//                     src={
//                       selectedHotel.images.length
//                         ? `http://localhost:5000/${selectedHotel.images[0]}`
//                         : "https://static.codia.ai/image/2025-10-29/Pite8uBEBg.png"
//                     }
//                     className="w-full h-64 object-cover rounded"
//                     alt="Hotel"
//                   />

//                   {/* Hotel Details */}
//                   <div className="space-y-1">
//                     <p><strong>Hotel Name:</strong> {selectedHotel.name}</p>
//                     <p><strong>Owner:</strong> {selectedHotel.owner}</p>
//                     <p><strong>Email:</strong> {selectedHotel.email}</p>
//                     <p><strong>Phone:</strong> {selectedHotel.phoneNo}</p>
//                     <p><strong>Country:</strong> {selectedHotel.country}</p>
//                     <p><strong>NIC:</strong> {selectedHotel.nic}</p>
//                     <p><strong>Registration No:</strong> {selectedHotel.registrationNo}</p>
//                     <p><strong>Address:</strong> {selectedHotel.address}</p>
//                     <p><strong>Facilities:</strong> {selectedHotel.facilities}</p>
//                   </div>

//                   {/* PDFs */}
//                   {selectedHotel.pdfs.length > 0 && (
//                     <div className="space-y-2">
//                       <h3 className="font-semibold">Uploaded Documents</h3>

//                       {selectedHotel.pdfs.map((pdf, index) => (
//                         <iframe
//                           key={index}
//                           src={`http://localhost:5000/${pdf}`}
//                           className="w-full h-[400px] border rounded"
//                           title={`PDF ${index + 1}`}
//                         ></iframe>
//                       ))}
//                     </div>
//                   )}
//                 </div>

//                 {/* Footer */}
//                 <div className="p-4 border-t text-right sticky bottom-0 bg-white">
//                   <button
//                     onClick={() => setModalOpen(false)}
//                     className="bg-gray-700 text-white px-4 py-2 rounded"
//                   >
//                     Close
//                   </button>
//                 </div>

//               </div>
//             </div>
//           )}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default OwnerDashboard;









































// import React, { useState, useEffect } from "react";
// import Sidebarss from "./Sidebarss";
// import Headersss from "./Headersss";
// import SearchBars from "./SearchBars";
// import Refund from "./Refund";
// import Message from "./Message";
// import Help from "./Help";
// import Setting from "./Setting";

// const OwnerDashboard = () => {
//   const [activeTab, setActiveTab] = useState("dashboard");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [sortOption, setSortOption] = useState("date");
//   const [hotels, setHotels] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Modal States
//   const [modalOpen, setModalOpen] = useState(false);
//   const [selectedHotel, setSelectedHotel] = useState(null);

//   // Fetch Hotels FROM OWNERS DB
//   useEffect(() => {
//   const fetchHotels = async () => {
//     try {
//       const res = await fetch("http://localhost:5000/api/owners/owners");
//       const data = await res.json();

//       if (res.ok) {
//         const formatted = data.owners.map((hotel) => ({
//           id: hotel._id,
//           name: hotel.hotelName || "Unnamed Hotel",
//           owner: hotel.name || "Unknown Owner",
//           email: hotel.email || "N/A",
//           phoneNo: hotel.phoneNo || "N/A",
//           country: hotel.country || "N/A",
//           nic: hotel.nic || "N/A",
//           registrationNo: hotel.registrationNo || "N/A",
//           address: hotel.address || "No Address",
//           facilities: hotel.facilities || "No Facilities",

//           images: hotel.uploadImages?.length > 0
//             ? hotel.uploadImages
//             : hotel.images || [],

//           pdfs: hotel.uploadDocuments?.length > 0
//             ? hotel.uploadDocuments
//             : hotel.documents || [],

//           date: new Date(hotel.createdAt).toLocaleDateString(),
//         }));

//         setHotels(formatted);
//       } else {
//         console.error("Failed to fetch owners:", data.message);
//       }
//     } catch (err) {
//       console.error("Error fetching hotels:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   fetchHotels();
// }, []);


//   // Filtering & Sorting
//   const filteredHotels = hotels
//     .filter((hotel) =>
//       hotel.name.toLowerCase().includes(searchQuery.toLowerCase())
//     )
//     .sort((a, b) => {
//       if (sortOption === "name") return a.name.localeCompare(b.name);
//       if (sortOption === "date") return new Date(b.date) - new Date(a.date);
//       return 0;
//     });

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       <Sidebarss activeTab={activeTab} setActiveTab={setActiveTab} />

//       <div className="flex-1 flex flex-col">
//         <Headersss />

//         <main className="flex-1 p-6">
//           {activeTab === "dashboard" && (
//             <>
//               <SearchBars
//                 onSearch={(query) => setSearchQuery(query)}
//                 onSort={(option) => setSortOption(option)}
//               />

//               {loading ? (
//                 <p className="text-center text-gray-500 mt-10">
//                   Loading hotels...
//                 </p>
//               ) : filteredHotels.length > 0 ? (
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                   {filteredHotels.map((hotel) => (
//                     <div
//                       key={hotel.id}
//                       className="bg-white p-4 rounded-lg shadow-sm"
//                     >
//                       {/* Main Image */}
//                       <img
//                         src={
//                           hotel.images.length
//                             ? `http://localhost:5000/${hotel.images[0]}`
//                             : "https://static.codia.ai/image/2025-10-29/Pite8uBEBg.png"
//                         }
//                         className="w-full h-48 object-cover rounded mb-3"
//                         alt="hotel"
//                       />

//                       <h3 className="font-semibold text-lg">{hotel.name}</h3>
//                       <p className="text-gray-600 text-sm">
//                         Owner: {hotel.owner}
//                       </p>
//                       <p className="text-gray-600 text-sm">
//                         Address: {hotel.address}
//                       </p>

//                       <button
//                         onClick={() => {
//                           setSelectedHotel(hotel);
//                           setModalOpen(true);
//                         }}
//                         className="mt-3 bg-blue-600 text-white px-4 py-2 rounded text-sm"
//                       >
//                         View Details
//                       </button>

//                       <p className="text-gray-400 text-xs mt-2">
//                         Registered: {hotel.date}
//                       </p>
//                     </div>
//                   ))}
//                 </div>
//               ) : (
//                 <p className="text-center text-gray-500 mt-10">
//                   No hotels found.
//                 </p>
//               )}
//             </>
//           )}

//           {activeTab === "refunds" && <Refund />}
//           {activeTab === "message" && <Message />}
//           {activeTab === "help" && <Help />}
//           {activeTab === "setting" && <Setting />}

//           {/* ---------- DETAILS MODAL ---------- */}
//           {modalOpen && selectedHotel && (
//             <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
//               <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-xl">
//                 {/* Header */}
//                 <div className="flex justify-between items-center p-4 border-b sticky top-0 bg-white z-10">
//                   <h2 className="text-lg font-semibold">Hotel Details</h2>
//                   <button
//                     onClick={() => setModalOpen(false)}
//                     className="text-red-600 font-bold text-xl"
//                   >
//                     ✕
//                   </button>
//                 </div>

//                 {/* Content */}
//                 <div className="p-4 space-y-4">
//                   {/* Large Image */}
//                   <img
//                     src={
//                       selectedHotel.images.length
//                         ? `http://localhost:5000/${selectedHotel.images[0]}`
//                         : "https://static.codia.ai/image/2025-10-29/Pite8uBEBg.png"
//                     }
//                     className="w-full h-64 object-cover rounded"
//                     alt="Hotel"
//                   />

//                   {/* Hotel Details */}
//                   <div className="space-y-1">
//                     <p><strong>Hotel Name:</strong> {selectedHotel.name}</p>
//                     <p><strong>Owner:</strong> {selectedHotel.owner}</p>
//                     <p><strong>Email:</strong> {selectedHotel.email}</p>
//                     <p><strong>Phone:</strong> {selectedHotel.phoneNo}</p>
//                     <p><strong>Country:</strong> {selectedHotel.country}</p>
//                     <p><strong>NIC:</strong> {selectedHotel.nic}</p>
//                     <p><strong>Registration No:</strong> {selectedHotel.registrationNo}</p>
//                     <p><strong>Address:</strong> {selectedHotel.address}</p>
//                     <p><strong>Facilities:</strong> {selectedHotel.facilities}</p>
//                   </div>

//                   {/* PDFs */}
//                   {selectedHotel.pdfs.length > 0 && (
//                     <div className="space-y-2">
//                       <h3 className="font-semibold">Uploaded Documents</h3>

//                       {selectedHotel.pdfs.map((pdf, index) => (
//                         <iframe
//                           key={index}
//                           src={`http://localhost:5000/${pdf}`}
//                           className="w-full h-[400px] border rounded"
//                           title={`PDF ${index + 1}`}
//                         ></iframe>
//                       ))}
//                     </div>
//                   )}
//                 </div>

//                 {/* Footer */}
//                 <div className="p-4 border-t text-right sticky bottom-0 bg-white">
//                   <button
//                     onClick={() => setModalOpen(false)}
//                     className="bg-gray-700 text-white px-4 py-2 rounded"
//                   >
//                     Close
//                   </button>
//                 </div>
//               </div>
//             </div>
//           )}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default OwnerDashboard;









































import React, { useState, useEffect } from "react";
import Sidebarss from "./Sidebarss";
import Headersss from "./Headersss";
import SearchBars from "./SearchBars";
import Refund from "./Refund";
import Message from "./Message";
import Help from "./Help";
import Setting from "./Setting";

const OwnerDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("date");
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedHotel, setSelectedHotel] = useState(null);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/owners/owners");
        const data = await res.json();

        if (res.ok) {
          const formatted = data.owners.map((hotel) => ({
            id: hotel._id,
            name: hotel.hotelName || "Unnamed Hotel",
            owner: hotel.name || "Unknown Owner",
            email: hotel.email || "N/A",
            phoneNo: hotel.phoneNo || "N/A",
            country: hotel.country || "N/A",
            nic: hotel.nic || "N/A",
            registrationNo: hotel.registrationNo || "N/A",
            address: hotel.address || "No Address",
            facilities: hotel.facilities || "No Facilities",

            // FIXED IMAGE PATHS
            images: hotel.uploadImages
              ? hotel.uploadImages.map((img) =>
                  encodeURIComponent(img.replace(/\\/g, "/"))
                )
              : [],

            // FIXED PDF PATHS
            pdfs: hotel.uploadDocuments
              ? hotel.uploadDocuments.map((doc) =>
                  encodeURIComponent(doc.replace(/\\/g, "/"))
                )
              : [],

            date: hotel.createdAt,
          }));

          setHotels(formatted);
        }
      } catch (err) {
        console.error("Error fetching owners:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchHotels();
  }, []);

  // Filter & Sort
  const filteredHotels = hotels
    .filter((hotel) =>
      hotel.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === "name") return a.name.localeCompare(b.name);
      if (sortOption === "date")
        return new Date(b.date) - new Date(a.date);
      return 0;
    });

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebarss activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 flex flex-col">
        <Headersss />

        <main className="flex-1 p-6">
          {activeTab === "dashboard" && (
            <>
              <SearchBars onSearch={setSearchQuery} onSort={setSortOption} />

              {loading ? (
                <p className="text-center text-gray-500 mt-10">
                  Loading hotels...
                </p>
              ) : filteredHotels.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredHotels.map((hotel) => (
                    <div
                      key={hotel.id}
                      className="bg-white p-4 rounded-lg shadow-sm"
                    >
                      <img
                        src={
                          hotel.images.length
                            ? `http://localhost:5000/uploads/${hotel.images[0]}`
                            : "https://static.codia.ai/image/2025-10-29/Pite8uBEBg.png"
                        }
                        className="w-full h-48 object-cover rounded mb-3"
                        alt="hotel"
                      />

                      <h3 className="font-semibold text-lg">{hotel.name}</h3>
                      <p className="text-gray-600 text-sm">
                        Owner: {hotel.owner}
                      </p>
                      <p className="text-gray-600 text-sm">
                        Address: {hotel.address}
                      </p>

                      <button
                        onClick={() => {
                          setSelectedHotel(hotel);
                          setModalOpen(true);
                        }}
                        className="mt-3 bg-blue-600 text-white px-4 py-2 rounded text-sm"
                      >
                        View Details
                      </button>

                      <p className="text-gray-400 text-xs mt-2">
                        Registered: {new Date(hotel.date).toLocaleDateString()}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-center text-gray-500 mt-10">
                  No hotels found.
                </p>
              )}
            </>
          )}

          {activeTab === "refunds" && <Refund />}
          {activeTab === "message" && <Message />}
          {activeTab === "help" && <Help />}
          {activeTab === "setting" && <Setting />}

          {/* ================= MODAL ================= */}
          {modalOpen && selectedHotel && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
              <div className="bg-white rounded-lg w-full max-w-2xl max-h-[85vh] overflow-hidden shadow-xl flex flex-col">

                {/* HEADER */}
                <div className="flex justify-between items-center p-4 border-b">
                  <h2 className="text-lg font-semibold">Hotel Details</h2>
                  <button
                    onClick={() => setModalOpen(false)}
                    className="text-red-600 font-bold text-2xl"
                  >
                    ✕
                  </button>
                </div>

                {/* SCROLLABLE BODY */}
                <div className="p-4 space-y-4 overflow-y-auto flex-1">
                  <img
                    src={
                      selectedHotel.images.length
                        ? `http://localhost:5000/uploads/${selectedHotel.images[0]}`
                        : "https://static.codia.ai/image/2025-10-29/Pite8uBEBg.png"
                    }
                    className="w-full h-64 object-cover rounded"
                    alt="Hotel"
                  />

                  <div className="space-y-1">
                    <p><strong>Hotel Name:</strong> {selectedHotel.name}</p>
                    <p><strong>Owner:</strong> {selectedHotel.owner}</p>
                    <p><strong>Email:</strong> {selectedHotel.email}</p>
                    <p><strong>Phone:</strong> {selectedHotel.phoneNo}</p>
                    <p><strong>Country:</strong> {selectedHotel.country}</p>
                    <p><strong>NIC:</strong> {selectedHotel.nic}</p>
                    <p><strong>Registration No:</strong> {selectedHotel.registrationNo}</p>
                    <p><strong>Address:</strong> {selectedHotel.address}</p>
                    <p><strong>Facilities:</strong> {selectedHotel.facilities}</p>
                  </div>

                  {/* DOCUMENTS */}
                  {selectedHotel.pdfs.length > 0 && (
                    <div className="space-y-2">
                      <h3 className="font-semibold">Uploaded Documents</h3>

                      {selectedHotel.pdfs.map((pdf, index) => (
                        <iframe
                          key={index}
                          src={`http://localhost:5000/uploads/${pdf}`}
                          className="w-full h-[400px] border rounded"
                          title={`PDF ${index + 1}`}
                        ></iframe>
                      ))}
                    </div>
                  )}
                </div>

                {/* FOOTER */}
                <div className="p-4 border-t text-right">
                  <button
                    onClick={() => setModalOpen(false)}
                    className="bg-gray-700 text-white px-4 py-2 rounded"
                  >
                    Close
                  </button>
                </div>

              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default OwnerDashboard;
