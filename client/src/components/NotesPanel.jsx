import React from "react"

const NotesPanel = ({ compact = false }) => {
  return (
    <div
      className={`bg-white rounded-2xl shadow p-6 ${
        compact ? "h-48" : "h-80"
      } overflow-hidden`}
    >
      <h2 className="text-lg font-semibold text-gray-800 mb-3">Booking List</h2>
      <p className="text-gray-600 text-sm leading-relaxed">
       Lorem ipsum lorem uojuhn
      </p>
    </div>
  )
}

export default NotesPanel
