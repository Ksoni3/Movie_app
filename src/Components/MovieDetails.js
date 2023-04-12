import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from './Loading'
import SimilarMovies from './SimilarMovies'
import { useGlobalContext } from '../context/context'

const MovieDetails = () => {
  const [isInWatchLater, setIsInWatchLater] = useState(false)
  const { id } = useParams()
  const [singleMovieDetails, setSingleMovieDetails] = useState({})
  const API_IMG = 'https://image.tmdb.org/t/p/w500/'
  const { getSimilarMovies, setWatchLater, watchLater } = useGlobalContext()

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

  useEffect(() => {
    const getSingleMovieDetails = (id) => {
      try {
        axios
          .get(
            `https://api.themoviedb.org/3/movie/${id}?api_key=d3129f18427d37c5012b4f4f64b1222a`,
          )
          .then((res) => {
            setSingleMovieDetails(res.data)
          })
      } catch (error) {
        console.log(error)
      }
    }
    getSingleMovieDetails(id)
  }, [id])

  //getting similar movies
  useEffect(() => {
    getSimilarMovies(id)
  }, [id])

  //scroll to top
  useEffect(() => {
    window.scrollTo(0, 0) // scroll to the top of the page
  }, [])

  //
  useEffect(() => {
    const isPresent = watchLater.filter(
      (singleMovie) => singleMovie.id === singleMovieDetails.id,
    )
    if (isPresent.length) {
      setIsInWatchLater(true)
    } else {
      setIsInWatchLater(false)
    }
  }, [watchLater, singleMovieDetails.id])

  const rating = String(singleMovieDetails.vote_average).slice(0, 3)
  const year = String(singleMovieDetails.release_date).slice(0, 4)

  const {
    original_language,
    original_title,
    overview,
    popularity,
    release_date,
    title,
    voter_average,
    vote_count,
  } = singleMovieDetails

  return (
    <div className="bg-gradient-to-r from-blue-800 via-blue-600 to-blue-900 flex flex-col text-white h-auto">
      {singleMovieDetails.original_title ? (
        <div className="h-full">
          <div className="h-[600px] mt-5md:mt-14 flex flex-col gap-10 bg-gradient-to-r from-blue-800 via-blue-600 to-blue-900  relative">
            <img
              src={API_IMG + singleMovieDetails.backdrop_path}
              alt="movie_poster"
              className=" hidden md:block text-white h-5/6 shadow-md opacity-40"
            />

            <div className=" h-4/6 absolute top-14 left-6 md:left-16 flex flex-col md:flex-row gap-10">
              <img
                src={API_IMG + singleMovieDetails.backdrop_path}
                alt="movie_poster"
                className="h-full w-11/12 md:w-[22%] rounded-xl"
              />
              <div className=" h-4/6 w-5/6 md:flex flex-col mt-5">
                <h1 className="text-3xl md:text-5xl h-10 md:h-auto font-serif font-bold overflow-hidden ">
                  {singleMovieDetails.original_title}
                </h1>
                <div className="flex items-center text-2xl gap-2  mt-3">
                  <p> {year}</p>
                  <a className="bg-gray-300 px-3 py-1 rounded-lg">
                    {original_language.toUpperCase()}
                  </a>
                </div>
                <p className="w-5/6 md:w-3/4 text-lg mt-2">
                  {overview.slice(0, 100)}....
                </p>
                <button
                  className="bg-yellow-500 w-auto md:w-1/5 px-7 py-2 rounded-xl text-xl mt-4 md:mt-8 hover:bg-gray-600 transition duration-150 ease-in-out"
                  onClick={() => {
                    saveToWatchLater(singleMovieDetails)
                  }}
                >
                  {!isInWatchLater ? 'Save' : 'Unsave'}
                </button>
              </div>
            </div>
          </div>
          <h1 className="text-2xl w-1/2 text-white font-serif font-medium relative bottom-0 md:bottom-14 left-6 mt-2 md:mt-0 md:left-14 mb-5 md:-mb-12 ">
            Similar Movies{' '}
          </h1>
          <SimilarMovies />
        </div>
      ) : (
        <div className="flex flex-col items-center mt-12 ">
          <Loading />
          <h1 className="text-2xl font-bold mt-4">Loading...</h1>
        </div>
      )}
    </div>
  )
}

export default MovieDetails
