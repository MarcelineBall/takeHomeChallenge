import { useState } from 'react'

const SearchBar = ({ topStories, setTopStories }) => {
  const [searchInput, setSearchInput] = useState('')

  const handleSearch = (event) => {
    event.preventDefault()
    setTopStories(filterTopStories())
  }

  const filterTopStories = () => {
    const filteredStories = topStories.filter(story => {
      return story.title.toUpperCase().includes(searchInput.toUpperCase())
    })
    return filteredStories
  }

  return(
    <form>
      <input
        type='text'
        placeholder='Search by title'
        name='search'
        value={searchInput}
        onChange={event => setSearchInput(event.target.value)}
      />
      <button onClick={event => handleSearch(event)}>Search</button>
    </form>
  )
}

export default SearchBar
