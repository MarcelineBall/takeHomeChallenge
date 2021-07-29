import { useState } from 'react'

const SearchBar = () => {
  [searchInput, setSearchInput] = useState('')

  return(
    <form>
      <input
        type='text'
        placeholder='Search by title'
        name='search'
        value={searchInput}
        onChange={event => setSearchInput(event.target.value)}
      />
      <button>Search</button>
    </form>
  )
}

export default SearchBar
