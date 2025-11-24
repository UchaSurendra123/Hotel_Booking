import React from "react";

const PhotoGallery = ({ images = [] }) => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Gallery ${index + 1}`}
          className="w-full h-60 md:h-80 object-cover rounded-2xl shadow"
          onError={(e) => (e.target.style.display = "none")} // hides broken images
        />
      ))}
    </section>
  );
};

export default PhotoGallery;





