import React from 'react'
import { useGlobalContext } from '../context/context'
import Loading from './Loading'
import SmallMovieCard from './SmallMovieCard'

const SmallCardMovies = () => {
  const { movies, isLoading, isDark } = useGlobalContext()

  return (
    <div
      className={`${
        isDark
          ? 'bg-gradient-to-r from-zinc-800 via-slate-800 to-stone-800'
          : 'bg-gradient-to-r from-blue-800 via-blue-600 to-blue-900'
      }`}
    >
      {isLoading ? (
        <Loading />
      ) : (
        <div
          className={`w-11/12 mx-auto ${
            isDark
              ? 'bg-gradient-to-r from-zinc-800 via-slate-800 to-stone-800'
              : 'bg-gradient-to-r from-blue-800 via-blue-600 to-blue-900'
          } rounded-lg flex justify-start items-center overflow-x-auto  gap-4`}
        >
          {movies.map((curMovie, index) => {
            return <SmallMovieCard key={index} curMovie={curMovie} />
          })}
        </div>
      )}
    </div>
  )
}

export default SmallCardMovies
