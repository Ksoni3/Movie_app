import React, { useEffect } from 'react'
import MovieCard from '../Components/MovieCard'
import { useGlobalContext } from '../context/context'
import NoMoviesFound from '../Components/NoMoviesFound'

const WatchLater = () => {
  const { watchLater, setHideSearchBar } = useGlobalContext()

  useEffect(() => {
    setHideSearchBar(true)
  }, setHideSearchBar)

  return (
    <div className="min-h-screen flex flex-col gap-5 flex-wrap items-center bg-gradient-to-r from-blue-800 via-blue-600 to-blue-900 ">
      <div className="h-24  w-full grid items-center">
        <h1 className=" text-xl sm:text-5xl my-5 font-serif text-white text-center">
          Movies you have saved
        </h1>
      </div>

      {watchLater.length === 0 ? (
        <NoMoviesFound />
      ) : (
        <div className=" bg-white self-center rounded-lg flex justify-center flex-wrap gap-4 bg-gradient-to-r from-blue-800 via-blue-600 to-blue-900">
          {watchLater.map((curMovie, index) => {
            return <MovieCard key={index} curMovie={curMovie} />
          })}
        </div>
      )}
    </div>
  )
}

export default WatchLater
