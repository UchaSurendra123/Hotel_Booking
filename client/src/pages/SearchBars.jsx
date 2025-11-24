import React, { useState } from "react";

const SearchBars = ({ onSearch, onSort }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value); // ✅ call prop
  };

  const handleSort = (e) => {
    onSort(e.target.value);
  };

  return (
    <div className="flex items-center justify-between mb-6">
      {/* Search Input */}
      <div className="flex items-center bg-white rounded-2xl px-5 py-3 flex-1 max-w-4xl">
        <img
          src="https://static.codia.ai/image/2025-10-28/bms7dwkkhZ.png"
          alt="Search"
          className="w-4 h-4 mr-4"
        />
        <input
          type="text"
          placeholder="Search rooms"
          value={query}
          onChange={handleSearch}
          className="flex-1 outline-none text-base tracking-wide text-gray-600"
        />
      </div>

      {/* Sort Dropdown */}
      <div className="flex items-center gap-4 ml-8">
        <span className="font-semibold text-gray-600">Sort by</span>
        <select
          onChange={handleSort}
          className="border rounded px-2 py-1 text-gray-600"
        >
          <option value="date">Date</option>
          <option value="name">Name</option>
        </select>
      </div>
    </div>
  );
};

export default SearchBars;
