import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context/context'

const SingleGenreLink = ({ singleLink }) => {
  const { changeGenre } = useGlobalContext()
  const { id, name } = singleLink

  return (
    <>
      <Link
        to={`/explore_movies/${name}`}
        className=" transition ease-in-out duration-150 hover:scale-105"
      >
        <button
          onClick={() => {
            changeGenre(id)
          }}
          className="w-40 bg-slate-700 p-4 rounded-lg text-white z-20"
        >
          {name}
        </button>
      </Link>
    </>
  )
}

export default SingleGenreLink
