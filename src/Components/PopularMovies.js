import React from 'react'
import MovieCard from './MovieCard'
import { useGlobalContext } from '../context/context'
import Loading from './Loading'

const PopularMovies = () => {
  const { movies, isLoading } = useGlobalContext()

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="w-full bg-gradient-to-r from-blue-800 via-blue-600 to-blue-900 rounded-lg flex justify-center flex-wrap gap-4">
          {movies.map((curMovie, index) => {
            return <MovieCard key={index} curMovie={curMovie} />
          })}
        </div>
      )}
    </div>
  )
}

export default PopularMovies
