import React from 'react'
import MovieCard from './MovieCard';
import { useGlobalContext } from '../context/context'

const PopularMovies = () => {
const { movie, isLoading}= useGlobalContext();

  return (
   
    < div>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <div className='w-full bg-white rounded-lg grid grid-cols-4 gap-4'>
          {movie.map((curMovie,index) => {
            return (
              <MovieCard id={index} curMovie={curMovie}/>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default PopularMovies