import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import NoImage from '../context/NoImage.jpg'
import { useGlobalContext } from '../context/context'
import { Reveal } from 'react-awesome-reveal'
import { BsBookmarkPlus, BsBookmarkPlusFill } from 'react-icons/bs'

const SmallMovieCard = ({ curMovie }) => {
  const API_IMG = 'https://image.tmdb.org/t/p/w500'
  const { watchLater, setWatchLater, moveToTop } = useGlobalContext()
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
      <div className=" w-30 xl:w-44 min-h-[200px] max-h-[500px] mb-5 text-white shadow-lg">
        <div className="w-full flex justify-center overflow-x-hidden">
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
                className="w-full bg-cover "
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                onClick={moveToTop}
              >
                {curMovie.poster_path ? (
                  <img
                    className="w-[100%] rounded-lg mx-fit -mt-10 max-h-[250px]  transition duration-300 ease-in-out hover:scale-105 "
                    src={API_IMG + curMovie.poster_path}
                    alt="#"
                  />
                ) : (
                  <img
                    className="w-[100%] rounded-t-lg mx-fit -mt-10 h-[250px] transition duration-300 ease-in-out hover:scale-105"
                    src={NoImage}
                    alt="NoImage"
                  />
                )}
              </Link>
              <div className="p-6">
                <h5 className="h-15 pt-2  text-white text-md font-serif mb-2 text-center ">
                  {curMovie && curMovie.original_title.length > 12
                    ? curMovie.original_title.slice(0, 12) + '...'
                    : curMovie.original_title}
                </h5>
                <div className="w-full flex gap-10 text-center">
                  <div className="bg-green-800 w-fit px-2 py-1 rounded-xl text-md hover:shadow-lg transition duration-150 ease-in-out ">
                    {' '}
                    {curMovie.original_language.toUpperCase()}{' '}
                  </div>
                  <button
                    onClick={() => {
                      saveToWatchLater(curMovie)
                    }}
                    className=" w-auto px-2 py-1 rounded-xl text-3xl"
                  >
                    {!isInWatchLater ? (
                      <BsBookmarkPlus />
                    ) : (
                      <BsBookmarkPlusFill />
                    )}
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

export default SmallMovieCard
