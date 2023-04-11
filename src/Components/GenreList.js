import React from 'react'
import { useGlobalContext } from '../context/context'
import SingleGenreLink from './SingleGenreLink'

const GenreList = () => {
  const { genreLists } = useGlobalContext()
  console.log(genreLists)

  return (
    <div className="w-full h-auto p-3 shadow-lg flex flex-start  md:flex-wrap gap-3 overflow-x-scroll md:overflow-x-hidden text-white text-sm md:text-base">
      {genreLists.length &&
        genreLists.map((singleLink, index) => {
          return <SingleGenreLink key={index} singleLink={singleLink} />
        })}
    </div>
  )
}

export default GenreList
