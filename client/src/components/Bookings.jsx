import React from "react"
import SearchBar from "./SearchBar"
import FilterControls from "./FilterControls"
import NotesPanel from "./NotesPanel"
import BookingCards from "./BookingCards"

const Bookings = () => {
  return (
    <div className="flex flex-col gap-6">
      {/* ✅ Search Bar */}
      <SearchBar />

      {/* ✅ Filter Controls */}
      <FilterControls />

      {/* ✅ Notes Panel (smaller, no scrollbar) */}
      <div className="mt-4">
        <NotesPanel />
      </div>

      {/* ✅ Booking Cards */}
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <BookingCards />
        
      </div>
    </div>
  )
}

export default Bookings
