
import { useGlobalContext } from "../context/context"
import PopularMovies from "../Components/PopularMovies";
import NoMoviesFound from "../Components/NoMoviesFound";


const Home = () => {
  const {query,movie} = useGlobalContext();

  return (
    <div className=" w-screen">
    <div className=" w-full h-24 border">
    { query.length===0 ? <h1 className='text-5xl my-5 font-serif font-semibold text-center'> Popular Movies</h1>: <h1 className='text-5xl my-5 font-serif font-semibold text-center'>Results for: {query} </h1>}
    </div>
    <div className="w-full h-full  mt-8 mx-4 ">
     {movie && movie.length ? <PopularMovies/> :<NoMoviesFound />}
    </div>
    
    
    

    
    </div>
  )
}

export default Home