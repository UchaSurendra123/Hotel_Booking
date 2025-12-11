import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const demoHotels = [
  {
    id: 1,
    name: "The Grand Palace Hotel",
    address: "MG Road, Bengaluru",
    rating: 4.8,
    price: 12500,
    image:
      "https://images.unsplash.com/photo-1709715739341-779e2d5a558e?auto=format&fit=crop&q=80&w=574",
  },
  {
    id: 2,
    name: "Sea Breeze Resort",
    address: "Calangute Beach, Goa",
    rating: 4.5,
    price: 9800,
    image:
      "https://images.unsplash.com/photo-1740774457725-38929be4e8c4?auto=format&fit=crop&q=80&w=858",
  },
  {
    id: 3,
    name: "Mountain View Retreat",
    address: "Shimla, Himachal Pradesh",
    rating: 4.2,
    price: 7500,
    image:
      "https://images.unsplash.com/photo-1678913308053-316cee77afe9?auto=format&fit=crop&q=80&w=870",
  },
  {
    id: 4,
    name: "City Comfort Inn",
    address: "Banjara Hills, Hyderabad",
    rating: 4.0,
    price: 6200,
    image:
      "https://images.unsplash.com/photo-1695984182409-e281ee9fb45a?auto=format&fit=crop&q=80&w=774",
  },
  {
    id: 5,
    name: "Lakefront Paradise",
    address: "Nainital, Uttarakhand",
    rating: 4.7,
    price: 10900,
    image:
      "https://images.unsplash.com/photo-1545175707-9eec1209f720?auto=format&fit=crop&q=80&w=580",
  },
  {
    id: 6,
    name: "Desert Mirage Hotel",
    address: "Jaisalmer, Rajasthan",
    rating: 4.4,
    price: 8400,
    image:
      "https://images.unsplash.com/photo-1700807307355-b7286feb9c22?auto=format&fit=crop&q=80&w=387",
  },
  {
    id: 7,
    name: "Royal Heritage Stay",
    address: "Jaipur, Rajasthan",
    rating: 4.6,
    price: 25500,
    image:
      "https://plus.unsplash.com/premium_photo-1733342441106-96a5e23b2c9f?auto=format&fit=crop&q=80&w=870",
  },
  {
    id: 8,
    name: "Hilltop Bliss Resort",
    address: "Munnar, Kerala",
    rating: 4.3,
    price: 8900,
    image:
      "https://images.unsplash.com/photo-1741166814704-7871a835857c?auto=format&fit=crop&q=80&w=726",
  },
  {
    id: 9,
    name: "Coastal Comfort",
    address: "Vizag Beach Road",
    rating: 4.1,
    price: 7800,
    image:
      "https://images.unsplash.com/photo-1741375003259-91460664b739?auto=format&fit=crop&q=80&w=1032",
  },
  {
    id: 10,
    name: "Tropical Haven",
    address: "Kovalam, Kerala",
    rating: 4.9,
    price: 13200,
    image:
      "https://images.unsplash.com/photo-1729371768223-56e5ab96604e?auto=format&fit=crop&q=80&w=870",
  },
  {
    id: 11,
    name: "Skyline Suites",
    address: "Andheri, Mumbai",
    rating: 4.4,
    price: 9600,
    image:
      "https://images.unsplash.com/photo-1744069729426-159673c3b911?auto=format&fit=crop&q=80&w=1032",
  },
  {
    id: 12,
    name: "Valley View Lodge",
    address: "Manali, Himachal Pradesh",
    rating: 4.5,
    price: 8700,
    image:
      "https://images.unsplash.com/photo-1615460549969-36fa19521a4f?auto=format&fit=crop&q=80&w=774",
  },
  {
    id: 13,
    name: "Harbor Lights Inn",
    address: "Marine Drive, Kochi",
    rating: 4.2,
    price: 7400,
    image:
      "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?auto=format&fit=crop&q=80&w=774",
  },
  {
    id: 14,
    name: "Forest Nest Resort",
    address: "Wayanad, Kerala",
    rating: 4.6,
    price: 9100,
    image:
      "https://images.unsplash.com/photo-1615133005831-ef94ee2ceb16?auto=format&fit=crop&q=80&w=774",
  },
  {
    id: 15,
    name: "Sunset Boulevard Hotel",
    address: "Pondicherry Beach",
    rating: 4.8,
    price: 10500,
    image:
      "https://images.unsplash.com/photo-1672401231510-1365539ffc81?auto=format&fit=crop&q=80&w=870",
  },
  {
    id: 16,
    name: "Taj Hotel",
    address: "Mandlik Road, Mumbai",
    rating: 4.7,
    price: 20500,
    image:
      "https://images.unsplash.com/photo-1721539151779-e6dc7f9de376?auto=format&fit=crop&q=80&w=774",
  },
];


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

const DemoHotels = () => {
  const [activeHotel, setActiveHotel] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    setIsLoggedIn(!!storedUser);

    const handleStorageChange = () => {
      setIsLoggedIn(!!localStorage.getItem("user"));
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleHotelClick = (hotel, index) => {
    if (!isLoggedIn) {
      setActiveHotel(index);
    } else {
      navigate(`/hotel/${hotel.id}`, { state: { hotel, from: "home" } });
    }
  };

  const handleLoginRedirect = (e) => {
    e.stopPropagation(); 
    navigate("/login");
  };

  const handleCancel = (e) => {
    e.stopPropagation(); 
    setActiveHotel(null);
  };

  const handleViewMore = () => navigate("/hotels");

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 font-poppins">
      <h2 className="text-3xl font-semibold mb-8 text-primary text-center">
        Popular Hotels ✨
      </h2>

      
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
        {demoHotels.map((hotel, index) => (
          <div
            key={index}
            className="relative bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-xl"
            onClick={() => handleHotelClick(hotel, index)}
          >
            <img
              src={hotel.image}
              alt={hotel.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                {hotel.name}
              </h3>
              <p className="text-gray-600 text-sm mb-2">{hotel.address}</p>
              <div className="flex justify-between items-center">
                {renderStars(hotel.rating)}
                <span className="text-blue-600 font-bold">
                  ₹{hotel.price.toLocaleString()}
                </span>
              </div>
            </div>

            
            {!isLoggedIn && activeHotel === index && (
              <div className="absolute inset-0 bg-white bg-opacity-95 flex flex-col items-center justify-center text-center p-4 rounded-2xl shadow-lg">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">
                  You have to login first
                </h3>
                <button
                  onClick={handleLoginRedirect}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium transition"
                >
                  Go to Login Page
                </button>
                <button
                  onClick={handleCancel}
                  className="mt-3 text-gray-600 hover:text-gray-800 text-sm"
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      
      <div className="flex justify-center">
        <button
          onClick={handleViewMore}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold text-lg shadow-md transition"
        >
          View More Hotels →
        </button>
      </div>
    </section>
  );
};

export default DemoHotels;
