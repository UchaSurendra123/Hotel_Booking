import React from 'react'

const SearchBar = () => {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center bg-white rounded-2xl px-5 py-3 flex-1 max-w-4xl">
        <img 
          src="https://static.codia.ai/image/2025-10-28/bms7dwkkhZ.png" 
          alt="Search" 
          className="w-4 h-4 mr-4"
        />
        <input 
          type="text" 
          placeholder="Search documents" 
          className="flex-1 outline-none text-base tracking-wide text-gray-600"
        />
      </div>
      
      <div className="flex items-center gap-4 ml-8">
        <span className="font-semibold text-gray-600">Sort by</span>
        <img 
          src="https://static.codia.ai/image/2025-10-28/pdJWFjnT5L.png" 
          alt="Sort" 
          className="w-4 h-4"
        />
        <img 
          src="https://static.codia.ai/image/2025-10-28/Ke8qq0M0rV.png" 
          alt="Filter" 
          className="w-5 h-5"
        />
      </div>
    </div>
  )
}

export default SearchBar
