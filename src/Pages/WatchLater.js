import React from 'react'
import MovieCard from '../Components/MovieCard'
import { useGlobalContext } from '../context/context'
import NoMoviesFound from '../Components/NoMoviesFound'

const WatchLater = () => {
  const { watchLater } = useGlobalContext()

  return (
    <div className="min-h-screen flex flex-col gap-5 flex-wrap justify-center items-center">
      <div className="h-24 border w-full grid items-center">
        <h1 className=" text-xl sm:text-5xl my-5 font-serif font-semibold text-center">
          {' '}
          Movies you have saved
        </h1>
      </div>

      {watchLater.length === 0 ? (
        <NoMoviesFound />
      ) : (
        <div className="w-full pl-11 bg-white rounded-lg md:grid md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {watchLater.map((curMovie, index) => {
            return <MovieCard key={index} curMovie={curMovie} />
          })}
        </div>
      )}
    </div>
  )
}

export default WatchLater