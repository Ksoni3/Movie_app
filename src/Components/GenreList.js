import React from 'react'
import { useGlobalContext } from '../context/context'
import SingleGenreLink from './SingleGenreLink'

const GenreList = () => {
  const { genreLists } = useGlobalContext()
  console.log(genreLists)

  return (
    <div className="w-full h-auto p-3 flex flex-start overflow-y-scroll md:flex-wrap gap-3 border text-white text-sm md:text-base">
      {genreLists.length &&
        genreLists.map((singleLink, index) => {
          return <SingleGenreLink key={index} singleLink={singleLink} />
        })}
    </div>
  )
}

export default GenreList
