import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import NoImage from '../context/NoImage.jpg'
import { useGlobalContext } from '../context/context'
import { Zoom, Reveal } from 'react-awesome-reveal'
// import Zoom from 'react-reveal/Zoom'

const MovieCard = ({ curMovie }) => {
  const API_IMG = 'https://image.tmdb.org/t/p/w500'
  const { watchLater, setWatchLater } = useGlobalContext()
  const [isInWatchLater, setIsInWatchLater] = useState(false)

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
      setIsInWatchLater(false)
      return
    }

    const newWatchLater = [...watchLater, movie]
    setWatchLater(newWatchLater)
    setIsInWatchLater(true)
  }

  //checking if movie is present in the watch later
  useEffect(() => {
    const isPresent = watchLater.filter(
      (singleMovie) => singleMovie.id === curMovie.id,
    )
    if (isPresent.length) {
      setIsInWatchLater(true)
    }
  }, [watchLater, curMovie.id])

  return (
    <>
      <div className=" w-80 xl:w-72 min-h-[300px] max-h-[700px] mb-5 rounded-md text-white shadow-lg">
        <div className="w-full flex justify-center">
          <Reveal direction="left" triggerOnce>
            <div className=" w-full max-h-[900px] flex flex-col justify-center items-center rounded-lg">
              <button
                type="button"
                className="relative  inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out -z-10"
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
                    className="w-[100%] rounded-lg mx-fit -mt-10 max-h-[400px] transition duration-300 ease-in-out hover:scale-105 "
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
                <h5 className="h-20 pt-2  text-white text-2xl font-serif mb-2 text-center ">
                  {curMovie && curMovie.original_title.length > 20
                    ? curMovie.original_title.slice(0, 20) + '...'
                    : curMovie.original_title}
                </h5>
                <div className="h-28 p-2 pb-5 ">
                  <p className=" text-black font-sans mb-4 text-lg ">
                    {curMovie.overview.length > 60
                      ? curMovie.overview.slice(0, 60) + '...'
                      : curMovie.overview}
                  </p>
                </div>
                <div className="w-full flex gap-10 text-center">
                  <div className="bg-green-800 w-fit px-5 py-2 rounded-xl text-xl hover:shadow-lg transition duration-150 ease-in-out ">
                    {' '}
                    {curMovie.original_language.toUpperCase()}{' '}
                  </div>
                  <button
                    onClick={() => {
                      saveToWatchLater(curMovie)
                    }}
                    className="bg-yellow-500 w-auto px-5 py-2 rounded-xl text-xl hover:bg-gray-600 transition duration-150 ease-in-out"
                  >
                    {!isInWatchLater ? 'Save' : 'Unsave'}
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </>
  )
}

export default MovieCard
