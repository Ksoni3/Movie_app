import { useGlobalContext } from '../context/context'
import PopularMovies from '../Components/PopularMovies'
import PageLoader from '../Components/PageLoader'
import { useEffect } from 'react'

const Home = () => {
  const { setCategory, isLoading, query } = useGlobalContext()

  useEffect(() => {
    setCategory('popular')
  }, [setCategory])

  return (
    <div className="min-h-screen flex flex-col justify-center">
      <div className="h-24 border grid items-center">
        {query.length === 0 ? (
          <h1 className="text-xl  sm:text-5xl my-5 font-serif font-semibold text-center">
            {' '}
            Popular Movies
          </h1>
        ) : (
          <h1 className="text-5xl my-5 font-serif font-semibold text-center">
            Results for: {query}{' '}
          </h1>
        )}
      </div>
      <div className=" h-full mt-8 flex justify-center items-center">
        {isLoading ? <PageLoader /> : <PopularMovies />}
      </div>
    </div>
  )
}

export default Home
