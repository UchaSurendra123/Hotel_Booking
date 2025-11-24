import React from "react";

const About = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      {/* 🏢 About Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-primary mb-4">About Deccan Stay</h1>
        <p className="text-gray-700 max-w-3xl mx-auto">
          Founded in 2025 jan with a vision to redefine comfort and convenience, <strong>Deccan Stay</strong> 
          is a modern hospitality brand offering seamless hotel booking experiences across 
          Telangana and beyond. Our mission is to make travel hassle-free by connecting 
          guests with the finest curated stays, exceptional service, and technology-driven ease.
        </p>
      </div>

      {/* 💡 Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
        <div className="bg-gray-50 p-8 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-secondary mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            To create a trusted digital ecosystem that simplifies hotel bookings 
            through innovation, transparency, and customer-first experiences.  
            We aim to make every traveler feel at home while exploring the 
            beauty of India, one stay at a time.
          </p>
        </div>

        <div className="bg-gray-50 p-8 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-secondary mb-4">Our Vision</h2>
          <p className="text-gray-700 leading-relaxed">
            To become South India’s most loved and technologically advanced hospitality platform — 
            where smart booking meets comfort, and every guest experience becomes memorable.  
            We strive to bridge traditional hospitality with next-generation innovation.
          </p>
        </div>
      </div>

      {/* 👨‍💼 Management Team */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-primary mb-6">Our Management Team</h2>
        <p className="text-gray-700 max-w-3xl mx-auto mb-10">
          The driving force behind Deccan Stay — a dynamic team of passionate professionals 
          committed to operational excellence, innovation, and guest satisfaction.  
          Together, they have built a brand that blends technology with hospitality.
        </p>

        {/* Team Details (No Images) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          <div className="bg-gray-50 p-6 rounded-2xl shadow-md">
            <h3 className="text-lg font-semibold text-secondary">Kavya Sri</h3>
            <p className="text-gray-600 text-sm">Managing Partner</p>
            <p className="text-gray-700 mt-2 text-sm">
              Oversees strategic planning and corporate partnerships, ensuring
              smooth coordination across all Deccan Stay operations.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl shadow-md">
            <h3 className="text-lg font-semibold text-secondary">Sai Charan</h3>
            <p className="text-gray-600 text-sm">Managing Partner</p>
            <p className="text-gray-700 mt-2 text-sm">
              Leads product innovation and technology initiatives, enhancing 
              the platform’s performance and user experience.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl shadow-md">
            <h3 className="text-lg font-semibold text-secondary">Sai Kumar</h3>
            <p className="text-gray-600 text-sm">Managing Partner</p>
            <p className="text-gray-700 mt-2 text-sm">
              Manages financial strategy and resource optimization, driving 
              sustainable growth and profitability.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl shadow-md">
            <h3 className="text-lg font-semibold text-secondary">Surendra</h3>
            <p className="text-gray-600 text-sm">Managing Partner</p>
            <p className="text-gray-700 mt-2 text-sm">
              Focuses on operations and client relations, ensuring consistent 
              service excellence and guest satisfaction across all hotels.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl shadow-md">
            <h3 className="text-lg font-semibold text-secondary">Vignesh</h3>
            <p className="text-gray-600 text-sm">Managing Partner</p>
            <p className="text-gray-700 mt-2 text-sm">
              Oversees marketing, branding, and expansion strategies to 
              strengthen Deccan Stay’s presence across India.
            </p>
          </div>
        </div>
      </div>

      {/* 🚀 Business Philosophy */}
      <div className="text-center mt-16">
        <h2 className="text-3xl font-bold text-primary mb-4">
          Innovation Meets Hospitality
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto">
          Deccan Stay leverages cutting-edge digital technology to deliver personalized 
          travel experiences — from AI-powered hotel recommendations to real-time room 
          availability and seamless booking management.  
          Our commitment to innovation, sustainability, and customer satisfaction 
          continues to set new benchmarks in the hospitality industry.
        </p>
      </div>
    </section>
  );
};

export default About;
