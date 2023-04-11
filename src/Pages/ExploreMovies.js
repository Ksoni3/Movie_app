import { useState, useEffect } from 'react'
import { useGlobalContext } from '../context/context'
import MovieCard from '../Components/MovieCard'
import { Link } from 'react-router-dom'
import PageLoader from '../Components/PageLoader'
import GenreList from '../Components/GenreList'
import categoryLinks from '../context/constants'

const ExploreMovies = () => {
  const [filterBy, setFilterBy] = useState('Category')
  const {
    changeCategory,
    setCategory,
    changeGenre,
    movies,
    isLoading,
    setHideSearchBar,
  } = useGlobalContext()

  useEffect(() => {
    setCategory('top_rated')
    setHideSearchBar(false)
  }, [setCategory, setHideSearchBar])

  useEffect(() => {
    if (filterBy === 'Genre') {
      changeGenre('16')
    }
  }, [filterBy])

  // checking

  const handleFilterChange = (event) => {
    setFilterBy(event.target.value)
  }

  return (
    <div className="h-100vh flex flex-col items-center justify-center gap-5 p-4 bg-gradient-to-r from-blue-800 via-blue-600 to-blue-900">
      <div>
        <label className="ml-6 text-xl md:text-2xl font-serif text-white">
          {' '}
          Filter By:{' '}
        </label>
        <select
          className="outline-none text-lg h-10 rounded-md p-2"
          id="filterBy"
          value={filterBy}
          onChange={handleFilterChange}
        >
          <option className="p-2 h-10" value="Category">
            Category
          </option>
          <option value="Genre">Genre</option>
        </select>
      </div>

      {filterBy === 'Category' ? (
        <div className="w-full h-auto p-3 flex md:flex-start md:flex-wrap gap-3 shadow-lg text-white text-base overflow-x-scroll md:overflow-x-hidden">
          {categoryLinks.map((singleLink, index) => {
            const { to, name, end } = singleLink
            return (
              <Link
                key={index}
                to={to}
                className=" transition ease-in-out duration-150 hover:scale-105"
              >
                <button
                  onClick={() => changeCategory(end)}
                  className="inline-flex items-center bg-slate-700 h-14 p-4 rounded-lg"
                >
                  {name}
                </button>
              </Link>
            )
          })}
        </div>
      ) : (
        <GenreList />
      )}

      {isLoading ? (
        <PageLoader />
      ) : (
        <div className=" md:mt-5 rounded-lg flex justify-center flex-wrap gap-4">
          {movies &&
            movies.length > 0 &&
            movies.map((curMovie, index) => {
              return <MovieCard key={index} curMovie={curMovie} />
            })}
        </div>
      )}
    </div>
  )
}

export default ExploreMovies
