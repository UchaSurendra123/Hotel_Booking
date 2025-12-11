
import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import Breadcrumb from "../components/BreadCrumb";
import HotelTitle from "../components/HotelTitle";
import PhotoGallery from "../components/PhotoGallery";
import AboutSection from "../components/AboutSection";
import BookingCard from "../components/BookingCard";
import TreasureSection from "../components/TreasureSection";


const PropertyCard = ({ hotel }) => {
  if (!hotel) return null;

  return (
    <div className="border border-gray-300 rounded-2xl p-6 shadow-md w-full bg-white mt-6">
      <div className="w-full h-80 rounded-lg overflow-hidden mb-6">
        <img
          src={hotel.image}
          alt={hotel.name}
          className="w-full h-full object-cover object-center"
        />
      </div>

      <h3 className="text-2xl font-semibold text-blue-700 mb-2">{hotel.name}</h3>

      {hotel.address && (
        <p className="text-gray-500 text-base mb-3">📍 {hotel.address}</p>
      )}

      {hotel.description && (
        <p className="text-gray-600 text-base mb-4">{hotel.description}</p>
      )}

      <p className="text-xl font-medium text-blue-700">
        ₹ {hotel.price.toLocaleString()} / night
      </p>

      {hotel.rating && (
        <p className="mt-2 text-yellow-600 font-medium">
          ⭐ Rating: {hotel.rating}
        </p>
      )}
    </div>
  );
};

const HotelDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const hotel = location.state?.hotel;
  const fromPage = location.state?.from; 

  
  const handleBack = () => {
    if (fromPage === "home") {
      navigate("/"); 
    } else if (fromPage === "hotels") {
      navigate("/hotels"); 
    } else {
      navigate(-1); 
    }
  };

  
  if (!hotel) {
    return (
      <main className="max-w-screen-xl mx-auto px-4 mt-20">
        <button
          onClick={() => navigate("/hotels")}
          className="mb-6 bg-gray-800 text-white px-5 py-2 rounded-lg hover:bg-gray-900 transition"
        >
          ⬅️ Back to Hotels
        </button>
        <p className="text-center text-gray-600">
          Hotel details not found. Please go back and select a hotel again.
        </p>
      </main>
    );
  }

  return (
    <main className="max-w-screen-xl mx-auto px-4 lg:px-0 mt-16">
      
      <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm py-3 border-b border-gray-200">
        <button
          onClick={handleBack}
          className="ml-2 bg-gray-800 text-white px-5 py-2 rounded-lg hover:bg-gray-900 transition"
        >
          ⬅️ Back
        </button>
      </div>

      <div className="pt-8 pb-8">
        <Breadcrumb />
        <HotelTitle hotel={hotel} />
      </div>

    
      <PropertyCard hotel={hotel} />

      
      <PhotoGallery hotel={hotel} />

      <div className="flex flex-col lg:flex-row gap-8 mt-12">
        <div className="flex-1">
          <AboutSection hotel={hotel} />
        </div>
        <div className="lg:w-96">
          <BookingCard hotel={hotel} />
        </div>
      </div>

      <TreasureSection />
    </main>
  );
};

export default HotelDetail;








