// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const HotelsList = () => {
//   const [city, setCity] = useState("");
//   const [hotels, setHotels] = useState([]);
//   const [filteredHotels, setFilteredHotels] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [priceFilter, setPriceFilter] = useState("all");
//   const [ratingFilter, setRatingFilter] = useState("all");
//   const [currentPage, setCurrentPage] = useState(1);
//   const hotelsPerPage = 20;

//   const navigate = useNavigate();

//   // 🔹 Random rounded price (₹5000–₹25000)
//   const getRandomPrice = () => {
//     const price = Math.floor(Math.random() * (25000 - 5000 + 1)) + 5000;
//     return `₹${Math.round(price / 100) * 100}`;
//   };

//   // 🔹 Random rating (1–5)
//   const getRandomRating = () =>
//     parseFloat((Math.random() * (5 - 1) + 1).toFixed(1));

//   // ⭐ Render star rating
//   const renderStars = (rating) => {
//     const fullStars = Math.floor(rating);
//     const halfStar = rating % 1 >= 0.5;
//     const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

//     return (
//       <div className="flex items-center space-x-1">
//         {[...Array(fullStars)].map((_, i) => (
//           <span key={`full-${i}`} className="text-yellow-500">★</span>
//         ))}
//         {halfStar && <span className="text-yellow-500">★</span>}
//         {[...Array(emptyStars)].map((_, i) => (
//           <span key={`empty-${i}`} className="text-gray-300">★</span>
//         ))}
//         <span className="ml-1 text-gray-700 text-sm">{rating.toFixed(1)}</span>
//       </div>
//     );
//   };

//   // 🔹 Fetch hotels from backend
//   const fetchHotels = async () => {
//     if (!city.trim()) {
//       alert("Please enter a city name or code.");
//       return;
//     }

//     setLoading(true);
//     try {
//       const res = await fetch(`http://localhost:5000/api/hotels?city=${city}`);
//       const data = await res.json();

//       if (!data.hotels || data.hotels.length === 0) {
//         setHotels([]);
//         setFilteredHotels([]);
//         setLoading(false);
//         return;
//       }

//       const hotelsData = data.hotels.map((hotel, index) => ({
//         id: index + 1,
//         name: hotel.name || "Unnamed Hotel",
//         address: hotel.address || city.toUpperCase(),
//         price: hotel.price || getRandomPrice(),
//         rating: hotel.rating === "N/A" ? getRandomRating() : getRandomRating(),
//         image:
//           hotel.image ||
//           `https://source.unsplash.com/400x300/?hotel,${encodeURIComponent(
//             city
//           )}`,
//       }));

//       setHotels(hotelsData);
//       setFilteredHotels(hotelsData);
//       setCurrentPage(1);
//     } catch (error) {
//       console.error("❌ Error fetching Hotelbeds data:", error);
//       alert("Error fetching hotels from Hotelbeds API");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // 🔹 Apply filters
//   useEffect(() => {
//     let filtered = [...hotels];
//     if (ratingFilter !== "all") {
//       const minRating = parseFloat(ratingFilter);
//       filtered = filtered.filter((h) => h.rating >= minRating);
//     }
//     if (priceFilter !== "all") {
//       const [min, max] = priceFilter.split("-").map(Number);
//       filtered = filtered.filter((h) => {
//         const priceVal = Number(h.price.replace(/[^0-9]/g, ""));
//         return priceVal >= min && priceVal <= max;
//       });
//     }
//     setFilteredHotels(filtered);
//     setCurrentPage(1);
//   }, [hotels, ratingFilter, priceFilter]);

//   const totalHotels = filteredHotels.length;
//   const totalPages = Math.ceil(totalHotels / hotelsPerPage);
//   const currentHotels = filteredHotels.slice(
//     (currentPage - 1) * hotelsPerPage,
//     currentPage * hotelsPerPage
//   );

//   const handleKeyPress = (e) => e.key === "Enter" && fetchHotels();

//   // 🧭 Navigate to Hotel Details
//   const handleHotelClick = (hotel) => {
//     navigate(`/hotel/${hotel.id}`, { state: { hotel } });
//   };

//   return (
//     <section className="px-4 py-10 max-w-7xl mx-auto font-poppins">
//       <h2 className="text-3xl font-semibold mb-6 text-primary">
//         Welcome to Deccan Stay 🏨 Hotels
//       </h2>

//       {/* 🔍 Search + Filters */}
//       <div className="flex flex-wrap gap-4 mb-8 items-center">
//         <input
//           type="text"
//           placeholder="Enter city code (e.g., BOM, DEL, HYD)"
//           value={city}
//           onChange={(e) => setCity(e.target.value.toUpperCase())}
//           onKeyDown={handleKeyPress}
//           className="flex-1 min-w-[250px] pl-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-400"
//         />

//         <select
//           value={priceFilter}
//           onChange={(e) => setPriceFilter(e.target.value)}
//           className="border rounded-xl px-4 py-2"
//         >
//           <option value="all">💰 All Prices</option>
//           <option value="0-5000">₹0 - ₹5,000</option>
//           <option value="5000-10000">₹5,000 - ₹10,000</option>
//           <option value="10000-20000">₹10,000 - ₹20,000</option>
//           <option value="20000-30000">₹20,000+</option>
//         </select>

//         <select
//           value={ratingFilter}
//           onChange={(e) => setRatingFilter(e.target.value)}
//           className="border rounded-xl px-4 py-2"
//         >
//           <option value="all">⭐ All Ratings</option>
//           <option value="3">3★ & up</option>
//           <option value="4">4★ & up</option>
//           <option value="4.5">4.5★ & up</option>
//         </select>

//         <button
//           onClick={fetchHotels}
//           className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition"
//         >
//           🔍 Search
//         </button>
//       </div>

//       {/* 🏨 Results */}
//       {loading ? (
//         <p>Loading hotels...</p>
//       ) : totalHotels === 0 ? (
//         <p>No hotels found for "{city}".</p>
//       ) : (
//         <>
//           <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {currentHotels.map((hotel, idx) => (
//               <div
//                 key={idx}
//                 onClick={() => handleHotelClick(hotel)}
//                 className="bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
//               >
//                 <img
//                   src={hotel.image}
//                   alt={hotel.name}
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="p-4">
//                   <h3 className="text-lg font-semibold text-gray-800 mb-1 hover:text-blue-600 transition">
//                     {hotel.name}
//                   </h3>
//                   <p className="text-gray-600 text-sm mb-2">{hotel.address}</p>

//                   <div className="flex justify-between items-center">
//                     {renderStars(hotel.rating)}
//                     <span className="text-blue-600 font-bold">
//                       {hotel.price}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* 🔢 Pagination */}
//           <div className="flex justify-center items-center gap-4 mt-10">
//             <button
//               onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
//               disabled={currentPage === 1}
//               className={`px-5 py-2 rounded-xl ${
//                 currentPage === 1
//                   ? "bg-gray-300 text-gray-600 cursor-not-allowed"
//                   : "bg-gray-800 text-white hover:bg-gray-900"
//               }`}
//             >
//               ⬅️ Previous
//             </button>

//             <span>
//               Page <strong>{currentPage}</strong> of{" "}
//               <strong>{totalPages}</strong>
//             </span>

//             <button
//               onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
//               disabled={currentPage === totalPages}
//               className={`px-5 py-2 rounded-xl ${
//                 currentPage === totalPages
//                   ? "bg-gray-300 text-gray-600 cursor-not-allowed"
//                   : "bg-gray-800 text-white hover:bg-gray-900"
//               }`}
//             >
//               Next ➡️
//             </button>
//           </div>
//         </>
//       )}
//     </section>
//   );
// };

// export default HotelsList;























// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const HotelsList = () => {
//   const [city, setCity] = useState("");
//   const [hotels, setHotels] = useState([]);
//   const [filteredHotels, setFilteredHotels] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [priceFilter, setPriceFilter] = useState("all");
//   const [ratingFilter, setRatingFilter] = useState("all");
//   const [currentPage, setCurrentPage] = useState(1);
//   const hotelsPerPage = 20;

//   const navigate = useNavigate();

//   // 🔹 Fallback random price (₹5000–₹25000)
//   const getRandomPrice = () => {
//     const price = Math.floor(Math.random() * (25000 - 5000 + 1)) + 5000;
//     return Math.round(price / 100) * 100;
//   };

//   // 🔹 Fallback random rating (3.0–5.0)
//   const getRandomRating = () => parseFloat((Math.random() * 2 + 3).toFixed(1));

//   // ⭐ Render star rating
//   const renderStars = (rating) => {
//     const fullStars = Math.floor(rating);
//     const halfStar = rating % 1 >= 0.5;
//     const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

//     return (
//       <div className="flex items-center space-x-1">
//         {[...Array(fullStars)].map((_, i) => (
//           <span key={`full-${i}`} className="text-yellow-500">★</span>
//         ))}
//         {halfStar && <span className="text-yellow-500">★</span>}
//         {[...Array(emptyStars)].map((_, i) => (
//           <span key={`empty-${i}`} className="text-gray-300">★</span>
//         ))}
//         <span className="ml-1 text-gray-700 text-sm">{rating.toFixed(1)}</span>
//       </div>
//     );
//   };

//   // 🔹 Fetch hotels from backend
//   const fetchHotels = async () => {
//   if (!city.trim()) {
//     alert("Please enter a city name or code.");
//     return;
//   }

//   setLoading(true);

//   try {
//     const res = await fetch(`http://localhost:5000/api/hotelbeds?city=${city}`);
//     const data = await res.json();

//     if (!data.hotels || data.hotels.length === 0) {
//       setHotels([]);
//       setFilteredHotels([]);
//       setLoading(false);
//       return;
//     }

//     const hotelsData = data.hotels.map((hotel, index) => ({
//       id: index + 1,
//       name: hotel.name || "Unnamed Hotel",
//       address: hotel.address || city.toUpperCase(),
//       price: Number(hotel.price) || getRandomPrice(),
//       rating:
//         hotel.rating && hotel.rating !== "N/A"
//           ? parseFloat(hotel.rating)
//           : getRandomRating(),
//       image:
//         hotel.image ||
//         `https://source.unsplash.com/400x300/?hotel,${encodeURIComponent(
//           city
//         )}`,
//     }));

//     setHotels(hotelsData);
//     setFilteredHotels(hotelsData);
//     setCurrentPage(1);

//   } catch (error) {
//     console.error("❌ Error fetching Hotelbeds data:", error);
//     alert("Error fetching hotels from Hotelbeds API");
//   } finally {
//     setLoading(false);
//   }
// };


//   // 🔹 Apply filters
//   useEffect(() => {
//     let filtered = [...hotels];
//     if (ratingFilter !== "all") {
//       const minRating = parseFloat(ratingFilter);
//       filtered = filtered.filter((h) => h.rating >= minRating);
//     }
//     if (priceFilter !== "all") {
//       const [min, max] = priceFilter.split("-").map(Number);
//       filtered = filtered.filter((h) => {
//         const priceVal = Number(h.price);
//         if (max) return priceVal >= min && priceVal <= max;
//         return priceVal >= min;
//       });
//     }
//     setFilteredHotels(filtered);
//     setCurrentPage(1);
//   }, [hotels, ratingFilter, priceFilter]);

//   const totalHotels = filteredHotels.length;
//   const totalPages = Math.ceil(totalHotels / hotelsPerPage);
//   const currentHotels = filteredHotels.slice(
//     (currentPage - 1) * hotelsPerPage,
//     currentPage * hotelsPerPage
//   );

//   const handleKeyPress = (e) => e.key === "Enter" && fetchHotels();

//   // 🧭 Navigate to Hotel Details
//   const handleHotelClick = (hotel) => {
//     navigate(`/hotel/${hotel.id}`, { state: { hotel, from: "hotels" } });
//   };

//   return (
//     <section className="px-4 py-10 max-w-7xl mx-auto font-poppins">
//       <h2 className="text-3xl font-semibold mb-6 text-primary">
//         Welcome to Deccan Stay 🏨 Hotels
//       </h2>

//       {/* 🔍 Search + Filters */}
//       <div className="flex flex-wrap gap-4 mb-8 items-center">
//         <input
//           type="text"
//           placeholder="Enter city code (e.g., BOM, DEL, HYD)"
//           value={city}
//           onChange={(e) => setCity(e.target.value.toUpperCase())}
//           onKeyDown={handleKeyPress}
//           className="flex-1 min-w-[250px] pl-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-400"
//         />

//         <select
//           value={priceFilter}
//           onChange={(e) => setPriceFilter(e.target.value)}
//           className="border rounded-xl px-4 py-2"
//         >
//           <option value="all">💰 All Prices</option>
//           <option value="0-5000">₹0 - ₹5,000</option>
//           <option value="5000-10000">₹5,000 - ₹10,000</option>
//           <option value="10000-20000">₹10,000 - ₹20,000</option>
//           <option value="20000-30000">₹20,000+</option>
//         </select>

//         <select
//           value={ratingFilter}
//           onChange={(e) => setRatingFilter(e.target.value)}
//           className="border rounded-xl px-4 py-2"
//         >
//           <option value="all">⭐ All Ratings</option>
//           <option value="3">3★ & up</option>
//           <option value="4">4★ & up</option>
//           <option value="4.5">4.5★ & up</option>
//         </select>

//         <button
//           onClick={fetchHotels}
//           className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition"
//         >
//           🔍 Search
//         </button>
//       </div>

//       {/* 🏨 Results */}
//       {loading ? (
//         <p>Loading hotels...</p>
//       ) : totalHotels === 0 ? (
//         <p>No hotels found for "{city}".</p>
//       ) : (
//         <>
//           <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {currentHotels.map((hotel, idx) => (
//               <div
//                 key={idx}
//                 onClick={() => handleHotelClick(hotel)}
//                 className="bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
//               >
//                 <img
//                   src={hotel.image}
//                   alt={hotel.name}
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="p-4">
//                   <h3 className="text-lg font-semibold text-gray-800 mb-1 hover:text-blue-600 transition">
//                     {hotel.name}
//                   </h3>
//                   <p className="text-gray-600 text-sm mb-2">{hotel.address}</p>

//                   <div className="flex justify-between items-center">
//                     {renderStars(hotel.rating)}
//                     <span className="text-blue-600 font-bold">
//                       ₹{Number(hotel.price).toLocaleString("en-IN")}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* 🔢 Pagination */}
//           <div className="flex justify-center items-center gap-4 mt-10">
//             <button
//               onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
//               disabled={currentPage === 1}
//               className={`px-5 py-2 rounded-xl ${
//                 currentPage === 1
//                   ? "bg-gray-300 text-gray-600 cursor-not-allowed"
//                   : "bg-gray-800 text-white hover:bg-gray-900"
//               }`}
//             >
//               ⬅️ Previous
//             </button>

//             <span>
//               Page <strong>{currentPage}</strong> of{" "}
//               <strong>{totalPages}</strong>
//             </span>

//             <button
//               onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
//               disabled={currentPage === totalPages}
//               className={`px-5 py-2 rounded-xl ${
//                 currentPage === totalPages
//                   ? "bg-gray-300 text-gray-600 cursor-not-allowed"
//                   : "bg-gray-800 text-white hover:bg-gray-900"
//               }`}
//             >
//               Next ➡️
//             </button>
//           </div>
//         </>
//       )}
//     </section>
//   );
// };

// export default HotelsList;














































import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HotelsList = () => {
  const [city, setCity] = useState("");
  const [hotels, setHotels] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [loading, setLoading] = useState(false);
  const [priceFilter, setPriceFilter] = useState("all");
  const [ratingFilter, setRatingFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const hotelsPerPage = 20;

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeHotel, setActiveHotel] = useState(null);

  const navigate = useNavigate();

  // ⭐ Check login (same logic as DemoHotels)
  useEffect(() => {
    const checkLogin = () => {
      const storedUser = localStorage.getItem("user");
      setIsLoggedIn(!!storedUser);
    };

    checkLogin();

    // Listen to login/logout changes
    window.addEventListener("storage", checkLogin);

    return () => window.removeEventListener("storage", checkLogin);
  }, []);

  const getRandomPrice = () =>
    Math.round(((Math.random() * (25000 - 5000)) + 5000) / 100) * 100;

  const getRandomRating = () => parseFloat((Math.random() * 2 + 3).toFixed(1));

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <div className="flex items-center space-x-1">
        {[...Array(fullStars)].map((_, i) => (
          <span key={`full-${i}`} className="text-yellow-500">★</span>
        ))}
        {halfStar && <span className="text-yellow-500">★</span>}
        {[...Array(emptyStars)].map((_, i) => (
          <span key={`empty-${i}`} className="text-gray-300">★</span>
        ))}
        <span className="ml-1 text-gray-700 text-sm">{rating.toFixed(1)}</span>
      </div>
    );
  };

  // ⭐ Fetch hotels
  const fetchHotels = async () => {
    if (!city.trim()) {
      alert("Please enter a city name or code.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`http://localhost:5000/api/hotelbeds?city=${city}`);
      const data = await res.json();

      if (!data.hotels || data.hotels.length === 0) {
        setHotels([]);
        setFilteredHotels([]);
        setLoading(false);
        return;
      }

      const hotelsData = data.hotels.map((hotel, idx) => ({
        id: idx + 1,
        name: hotel.name || "Unnamed Hotel",
        address: hotel.address || city.toUpperCase(),
        price: Number(hotel.price) || getRandomPrice(),
        rating:
          hotel.rating && hotel.rating !== "N/A"
            ? parseFloat(hotel.rating)
            : getRandomRating(),
        image:
          hotel.image ||
          `https://source.unsplash.com/400x300/?hotel,${encodeURIComponent(city)}`
      }));

      setHotels(hotelsData);
      setFilteredHotels(hotelsData);
      setCurrentPage(1);
    } catch (error) {
      console.error("❌ API Error:", error);
      alert("Error fetching hotels.");
    } finally {
      setLoading(false);
    }
  };

  // ⭐ Apply filters
  useEffect(() => {
    let filtered = [...hotels];

    if (ratingFilter !== "all") {
      filtered = filtered.filter((h) => h.rating >= parseFloat(ratingFilter));
    }

    if (priceFilter !== "all") {
      const [min, max] = priceFilter.split("-").map(Number);
      filtered = filtered.filter((h) => {
        const p = Number(h.price);
        return max ? p >= min && p <= max : p >= min;
      });
    }

    setFilteredHotels(filtered);
    setCurrentPage(1);
  }, [hotels, priceFilter, ratingFilter]);

  const totalHotels = filteredHotels.length;
  const totalPages = Math.ceil(totalHotels / hotelsPerPage);

  const currentHotels = filteredHotels.slice(
    (currentPage - 1) * hotelsPerPage,
    currentPage * hotelsPerPage
  );

  // ⭐ Handle hotel click — (No popup if logged-in)
  const handleHotelClick = (hotel, idx) => {
    if (isLoggedIn) {
      navigate(`/hotel/${hotel.id}`, { state: { hotel, from: "hotels" } });
    } else {
      setActiveHotel(idx);
    }
  };

  return (
    <section className="px-4 py-10 max-w-7xl mx-auto font-poppins">
      <h2 className="text-3xl font-semibold mb-6 text-primary">
        Welcome to Deccan Stay 🏨 Hotels
      </h2>

      {/* 🔍 Search & Filters */}
      <div className="flex flex-wrap gap-4 mb-8 items-center">
        <input
          type="text"
          placeholder="Enter city code (BOM, DEL, HYD...)"
          value={city}
          onChange={(e) => setCity(e.target.value.toUpperCase())}
          onKeyDown={(e) => e.key === "Enter" && fetchHotels()}
          className="flex-1 min-w-[250px] pl-4 py-3 rounded-xl border"
        />

        <select
          value={priceFilter}
          onChange={(e) => setPriceFilter(e.target.value)}
          className="border rounded-xl px-4 py-2"
        >
          <option value="all">💰 All Prices</option>
          <option value="0-5000">₹0 - ₹5,000</option>
          <option value="5000-10000">₹5,000 - ₹10,000</option>
          <option value="10000-20000">₹10,000 - ₹20,000</option>
          <option value="20000-30000">₹20,000+</option>
        </select>

        <select
          value={ratingFilter}
          onChange={(e) => setRatingFilter(e.target.value)}
          className="border rounded-xl px-4 py-2"
        >
          <option value="all">⭐ All Ratings</option>
          <option value="3">3★ & up</option>
          <option value="4">4★ & up</option>
          <option value="4.5">4.5★ & up</option>
        </select>

        <button
          onClick={fetchHotels}
          className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition"
        >
          🔍 Search
        </button>
      </div>

      {/* Hotels list */}
      {loading ? (
        <p>Loading…</p>
      ) : totalHotels === 0 ? (
        <p>No hotels found for "{city}".</p>
      ) : (
        <>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {currentHotels.map((hotel, idx) => (
              <div
                key={idx}
                onClick={() => handleHotelClick(hotel, idx)}
                className="relative bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer hover:scale-105 transition-all"
              >
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-48 object-cover"
                />

                <div className="p-4">
                  <h3 className="text-lg font-semibold">{hotel.name}</h3>
                  <p className="text-gray-600 text-sm mb-2">{hotel.address}</p>

                  <div className="flex justify-between items-center">
                    {renderStars(hotel.rating)}
                    <span className="text-blue-600 font-bold">
                      ₹{Number(hotel.price).toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>

                {/* Login Popup */}
                {!isLoggedIn && activeHotel === idx && (
                  <div className="absolute inset-0 bg-white bg-opacity-95 flex flex-col items-center justify-center p-5 text-center z-50">
                    <h3 className="text-lg font-semibold mb-3">
                      You need to login first
                    </h3>

                    <button
                      onClick={() => navigate("/login")}
                      className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
                    >
                      Go to Login
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveHotel(null);
                      }}
                      className="mt-3 text-gray-600 hover:text-gray-800 text-sm"
                    >
                      Cancel
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-4 mt-10">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className={`px-5 py-2 rounded-xl ${
                currentPage === 1
                  ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                  : "bg-gray-800 text-white"
              }`}
            >
              ⬅️ Previous
            </button>

            <span>
              Page <strong>{currentPage}</strong> of{" "}
              <strong>{totalPages}</strong>
            </span>

            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={`px-5 py-2 rounded-xl ${
                currentPage === totalPages
                  ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                  : "bg-gray-800 text-white"
              }`}
            >
              Next ➡️
            </button>
          </div>
        </>
      )}
    </section>
  );
};

export default HotelsList;
