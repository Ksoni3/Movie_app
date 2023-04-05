import { useGlobalContext } from '../context/context'
import MovieCard from '../Components/MovieCard'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import PageLoader from '../Components/PageLoader'

const ExploreMovies = () => {
  const {
    changeCategory,
    setCategory,
    changeGenre,
    setGenre,
    genre,
    movie,
    setMovie,
    isLoading,
  } = useGlobalContext()

  useEffect(() => {
    setCategory('top_rated')
  }, [])

  console.log(genre)

  return (
    <div className="h-100vh flex flex-col items-center justify-center gap-5">
      <div className="w-full h-auto p-4 flex flex-wrap gap-5 border text-white text-lg">
        <Link to="/explore_movies/top_rated">
          <button
            onClick={() => changeCategory('top_rated')}
            className="bg-slate-700 border p-4 rounded-lg"
          >
            {' '}
            Top Rated{' '}
          </button>
        </Link>

        <Link to="/explore_movies/upcoming">
          <button
            onClick={() => changeCategory('upcoming')}
            className=" bg-slate-700 border p-4 rounded-lg"
          >
            {' '}
            Upcoming Movies{' '}
          </button>{' '}
        </Link>

        <Link to="/explore_movies/now_playing">
          <button
            onClick={() => changeCategory('now_playing')}
            className=" bg-slate-700 border p-4 rounded-lg"
          >
            {' '}
            Now Playing{' '}
          </button>
        </Link>

        <Link to="/explore_movies/latest">
          <button
            onClick={() => changeCategory('latest')}
            className="bg-slate-700 border p-4 rounded-lg"
          >
            {' '}
            Latest{' '}
          </button>
        </Link>

        <Link to="/explore_movies/action">
          <button
            onClick={() => changeGenre('Action')}
            className="bg-slate-700 border p-4 rounded-lg"
          >
            {' '}
            Action
          </button>
        </Link>
      </div>

      {isLoading ? (
        <PageLoader />
      ) : (
        <div className="bg-white rounded-lg grid md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {movie.map((curMovie, index) => {
            return <MovieCard key={index} curMovie={curMovie} />
          })}
        </div>
      )}
    </div>
  )
}

export default ExploreMovies
