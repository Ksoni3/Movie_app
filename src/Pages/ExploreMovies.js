import { useGlobalContext } from '../context/context';
import MovieCard from '../Components/MovieCard';
import { Link } from 'react-router-dom';


const ExploreMovies = () => {
  const { changeCategory, movie, setMovie, isLoading } = useGlobalContext();
  
 

  return (
    <div className='w-screen h-100vh flex flex-col justify-center gap-5'> 
      <div className='w-full h-24 p-4 flex gap-5 border text-white'>
      <Link to ="/explore_movies/top_rated">
        <button onClick={() => changeCategory("top_rated")} className='bg-slate-700 border p-4 rounded-lg'> Top Rated </button>
        </Link>
        
        <Link to ="/explore_movies/upcoming">
        <button onClick={() => changeCategory("upcoming")} className=' bg-slate-700 border p-4 rounded-lg'> Upcoming Movies </button> </Link>

        <Link to ="/explore_movies/now_playing">
        <button onClick={() => changeCategory("now_playing")} className=' bg-slate-700 border p-4 rounded-lg'> Now Playing </button></Link>
      </div>
     
      
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className='w-full rounded-lg grid grid-cols-4 gap-4 p-4'>
          {movie.map((curMovie, index) => {
            return (
              <MovieCard key={index} curMovie={curMovie} />
              
            )
          })}
        </div>
      )}
    </div>
  )
}

export default ExploreMovies;
