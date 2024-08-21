import React from 'react'
import { CiSearch } from 'react-icons/ci'

function SearchInput() {
  return (
    <div className="hidden sm:block">
    <form action="/employee" method="">
      <div className="relative">
        <button className="absolute top-1/2 left-0 -translate-y-1/2">
          <CiSearch color="grey" size={22} />
        </button>

        <input
          type="text"
          placeholder="Type to search..."
          className="w-full xl:w-125 bg-transparent pr-4 pl-9 focus:outline-none"
        />
      </div>
    </form>
  </div>
  )
}

export default SearchInput