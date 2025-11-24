import React from 'react'
import SearchBar from '../components/SearchBar'
import FilterControls from '../components/FilterControls'


const MainContents = () => {
  return (
    <main className="flex-1 px-8 pb-8">
      <div className="mb-8">
        
        <SearchBar />
      </div>

      <FilterControls />
      
    </main>
  )
}

export default MainContents
