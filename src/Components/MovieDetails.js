import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AiFillStar } from 'react-icons/ai'
import Loading from './Loading'

const MovieDetails = () => {
  const { id } = useParams()
  const [singleMovieDetails, setSingleMovieDetails] = useState({})
  const API_IMG = 'https://image.tmdb.org/t/p/w500/'

  useEffect(() => {
    const getSingleMovieDetails = (id) => {
      console.log(id)
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

  const rating = String(singleMovieDetails.vote_average).slice(0, 3)
  const year = String(singleMovieDetails.release_date).slice(0, 4)

  return (
    // <div>
    //   <div className="h-screen pt-14">
    //     <div className="w-3/4 h-3/4  bg-white m-auto shadow shadow-orange-300 flex  ">
    //       <div className="w-[40%] bg-red-800">
    //         {' '}
    //         Right section
    //         <h1> {singleMovie.original_title}</h1>
    //       </div>
    //       <div className="w-[60%] bg-green-600">Left Section</div>
    //     </div>
    //   </div>
    // </div>

    <>
      {singleMovieDetails.original_title ? (
        <>
          <div className="flex justify-center h-[85vh] ">
            <div
              className="text-white w-full bg-no-repeat bg-slate-200 bg-opacity-40 bg-cover border rounded-md"
              style={{
                backgroundImage: `url(${API_IMG}${singleMovieDetails.backdrop_path})`,
                opacity: 0.5,
              }}
            >
              <img
                alt="movie_poster"
                className="w-auto h-auto object-cover object-center rounded z-10"
                src={API_IMG + singleMovieDetails.backdrop_path}
              />
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center mt-12 ">
          <Loading />
          <h1 className="text-2xl font-bold mt-4">Loading...</h1>
        </div>
      )}
    </>
  )
}

export default MovieDetails
