import React from 'react'
import { useGlobalContext } from '../context'


const HomeResult = () => {
  const { movie }= useGlobalContext();
    
  return (
    <>
      {
        movie.map((curMovie) =>{
        return <div>
          <h2> {curMovie.Title} </h2>
          <h2> KAMAL SONI </h2>
        </div>
      })
      }
    </>
  )
  
}

export default HomeResult