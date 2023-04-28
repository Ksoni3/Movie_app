import React from 'react'
import { useGlobalContext } from '../context/context'

const Search = () => {
  const {
    api_key,
    setEndPoint,
    query,
    setQuery,
    hideSearchBar,
  } = useGlobalContext()

  const onSearchSubmit = (e) => {
    e.preventDefault()
    setEndPoint(`search/movie?api_key=${api_key}&query=${query}`)
  }

  return (
    <>
      <form onSubmit={onSearchSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search Movie"
          className={` mx-1 h-11 md:h-9 pl-3 md:pl-4 rounded-xl border outline-none border-blue-800 text-large ${
            hideSearchBar ? 'invisible' : 'visible'
          }`}
        />
      </form>
    </>
  )
}

export default Search
