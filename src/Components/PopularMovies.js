import React from 'react'
import MovieCard from './MovieCard'
import { useGlobalContext } from '../context/context'
import Loading from './Loading'

const PopularMovies = () => {
  const { movie, isLoading } = useGlobalContext()

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="w-full bg-white rounded-lg md:grid md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {movie.map((curMovie, index) => {
            return <MovieCard id={index} curMovie={curMovie} />
          })}
        </div>
      )}
    </div>
  )
}

export default PopularMovies
