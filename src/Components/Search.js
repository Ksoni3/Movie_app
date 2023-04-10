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
          className={
            hideSearchBar
              ? 'h-11 md:h-9 pl-3 md:pl-4 px-34 ml-4 mr-3 md:mr-10 rounded-xl border border-blue-800 text-large invisible outline-none'
              : 'h-11 md:h-9 pl-3 md:pl-4 px-34 ml-4 mr-3 md:mr-10 rounded-xl border border-blue-800 text-large visible outline-none'
          }
        />
      </form>
    </>
  )
}

export default Search
