import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import NoImage from '../context/NoImage.jpg'
import { useGlobalContext } from '../context/context'

const MovieCard = ({ curMovie }) => {
  const API_IMG = 'https://image.tmdb.org/t/p/w500'
  const { watchLater, setWatchLater } = useGlobalContext()
  const [inWatchLater, setInWatchLater] = useState(false)

  // removing movie on clicking unsave

  const handleDelete = (movie) => {
    const newWatchLater = watchLater.filter((singleMovie) => {
      return singleMovie.id !== movie.id
    })
    setWatchLater(newWatchLater)
  }

  const saveToWatchLater = (movie) => {
    if (watchLater.includes(movie)) {
      handleDelete(movie)
      setInWatchLater(!inWatchLater)
      return
    }
    const newWatchLater = [...watchLater, movie]
    setWatchLater(newWatchLater)
    setInWatchLater(true)
  }

  useEffect(() => {
    const movieee = watchLater.filter(
      (singleMovie) => singleMovie.id === curMovie.id,
    )
    if (movieee.length) {
      setInWatchLater(true)
    }
  }, [watchLater, curMovie.id])

  return (
    <>
      <div>
        <div className=" border border-gray-200 w-80 min-h-[300px] max-h-[700px] mb-3 rounded-md ">
          <div className="w-full flex justify-center">
            <div className=" w-full max-h-[900px] flex flex-col justify-center items-center rounded-lg">
              <button
                type="button"
                className="relative  inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                {curMovie.vote_average}
              </button>
              <Link
                to={`/movie/${curMovie.id}`}
                className="w-full"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                {curMovie.poster_path ? (
                  <img
                    className="w-[100%] rounded-lg mx-fit -mt-10 max-h-[400px] transition duration-300 ease-in-out hover:scale-105"
                    src={API_IMG + curMovie.poster_path}
                    alt=""
                  />
                ) : (
                  <img
                    className="w-[100%] rounded-t-lg mx-fit -mt-10 h-[400px] transition duration-300 ease-in-out hover:scale-105"
                    src={NoImage}
                  />
                )}
              </Link>
              <div className="p-6">
                <h5 className="h-20 pt-2  text-gray-900 text-2xl font-serif mb-2 text-center ">
                  {curMovie && curMovie.original_title.length > 20
                    ? curMovie.original_title.slice(0, 20) + '...'
                    : curMovie.original_title}
                </h5>
                <div className="h-28 p-2 pb-5 ">
                  <p className=" text-gray-700 font-sans mb-4 text-lg ">
                    {curMovie.overview.length > 60
                      ? curMovie.overview.slice(0, 60) + '...'
                      : curMovie.overview}
                  </p>
                </div>
                <div className="w-full flex gap-10 text-center">
                  <div className="bg-red-300 w-fit px-3 py-2 rounded-2xl font-bold hover:text-white hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ">
                    {' '}
                    {curMovie.original_language.toUpperCase()}{' '}
                  </div>
                  <button
                    onClick={() => {
                      saveToWatchLater(curMovie)
                    }}
                    className="bg-yellow-700 w-auto px-3 py-2 rounded-2xl text-xl text-white hover:bg-gray-600 transition duration-150 ease-in-out"
                  >
                    {!inWatchLater ? 'Save' : 'Unsave'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MovieCard
