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
    movie,
    isLoading,
  } = useGlobalContext()

  useEffect(() => {
    setCategory('top_rated')
  }, [setCategory])

  useEffect(() => {
    if (filterBy === 'Genre') {
      changeGenre('16')
    }
  }, [filterBy])

  const handleFilterChange = (event) => {
    setFilterBy(event.target.value)
  }

  return (
    <div className="h-100vh flex flex-col items-center justify-center gap-5 p-4">
      <div className="text-lg">
        <label className="font-bold ml-4"> Filter By: </label>
        <select
          className="outline-none text-lg h-10"
          id="filterBy"
          value={filterBy}
          onChange={handleFilterChange}
        >
          <option className="h-10" value="Category">
            Category
          </option>
          <option value="Genre">Genre</option>
        </select>
      </div>

      {filterBy === 'Category' ? (
        <div className="w-full h-auto p-3 flex md:flex-start md:flex-wrap gap-3 border text-white text-base overflow-x-scroll md:overflow-x-hidden">
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
                  className="inline-flex items-center bg-slate-700 border h-14 p-4 rounded-lg"
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
        <div className="bg-white rounded-lg grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:p-10">
          {movie &&
            movie.length > 0 &&
            movie.map((curMovie, index) => {
              return <MovieCard key={index} curMovie={curMovie} />
            })}
        </div>
      )}
    </div>
  )
}

export default ExploreMovies
