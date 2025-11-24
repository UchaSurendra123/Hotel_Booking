import React from "react";
import { useNavigate } from "react-router-dom";

const HotelsLivingRoom = () => {
  const navigate = useNavigate();

  const properties = [
    {
      id: 10,
      name: "Boutiqe",
      location: "Kandy, Sri Lanka",
      image: "https://images.unsplash.com/photo-1709715739341-779e2d5a558e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=574",
    },
    {
      id: 11,
      name: "Modern",
      location: "Nuwereliya, Sri Lanka",
      image: "https://images.unsplash.com/photo-1740774457725-38929be4e8c4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=858",
    },
    {
      id: 12,
      name: "Silver Rain",
      location: "Dehiwala, Sri Lanka",
      image: "https://images.unsplash.com/photo-1678913308053-316cee77afe9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
    },
    {
      id: 13,
      name: "Cashville",
      location: "Ampara, Sri Lanka",
      image: "https://images.unsplash.com/photo-1695984182409-e281ee9fb45a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=774",
      badge: "Popular Choice",
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

export default HotelsLivingRoom;














