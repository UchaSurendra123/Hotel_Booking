import React from "react";
import { useNavigate } from "react-router-dom";

const HouseWithBackyard = () => {
  const navigate = useNavigate();

  const properties = [
    {
      id: 6,
      name: "Shangri-La",
      location: "Colombo, Sri Lanka",
      image: "https://images.unsplash.com/photo-1545175707-9eec1209f720?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=580",
      badge: "Popular Choice",
    },
    {
      id: 7,
      name: "Top View",
      location: "Hikkaduwe, Sri Lanka",
      image: "https://images.unsplash.com/photo-1700807307355-b7286feb9c22?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387",
    },
    {
      id: 8,
      name: "Green Villa",
      location: "Kandy, Sri Lanka",
      image: "https://plus.unsplash.com/premium_photo-1733342441106-96a5e23b2c9f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
    },
    {
      id: 9,
      name: "Wodden Pit",
      location: "Ambalangode, Sri Lanka",
      image: "https://static.codia.ai/image/2025-10-23/d9WysAmfF0.png",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {properties.map((property) => (
          <div
            key={property.id}
            className="group cursor-pointer"
            onClick={() => navigate(`/hotel/${property.id}`)}
          >
            <div className="relative mb-4">
              <img
                src={property.image}
                alt={property.name}
                className="w-full h-44 object-cover rounded-2xl group-hover:scale-105 transition duration-300"
              />
              {property.badge && (
                <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-tl-2xl rounded-br-2xl text-sm">
                  {property.badge}
                </div>
              )}
            </div>
            <h3 className="text-xl font-normal text-secondary mb-1">
              {property.name}
            </h3>
            <p className="text-gray text-sm">{property.location}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HouseWithBackyard;
