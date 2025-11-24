import React from "react";
import Hero from "../components/Hero";
import BookingForm from "../components/BookingForm";
import DemoHotels from "../components/DemoHotels"; // ✅ import

function HomePage() {
  return (
    <section className="landing-page ">
      <Hero />
      <BookingForm />
      <DemoHotels /> 
    </section>
  );
}

export default HomePage;
