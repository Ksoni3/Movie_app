import React from 'react'
import { useGlobalContext } from '../context/context'
import Loading from './Loading'
import SimilarMovieCard from './SimilarMovieCard'

const SimilarMovies = () => {
  const { movies, isLoading } = useGlobalContext()

  return (
    <div className="bg-gradient-to-r from-blue-800 via-blue-600 to-blue-900 ">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="w-11/12 mx-auto bg-gradient-to-r from-blue-800 via-blue-600 to-blue-900 rounded-lg flex justify-start items-center overflow-x-auto  gap-4">
          {movies.map((curMovie, index) => {
            return <SimilarMovieCard key={index} curMovie={curMovie} />
          })}
        </div>
      )}
    </div>
  )
}

export default SimilarMovies
