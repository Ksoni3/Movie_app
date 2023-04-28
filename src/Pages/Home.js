import { useGlobalContext } from '../context/context'
import Movies from '../Components/Movies'
import PageLoader from '../Components/PageLoader'
import { useEffect } from 'react'

const Home = () => {
  const {
    setCategory,
    isLoading,
    query,
    setHideSearchBar,
    isDark,
  } = useGlobalContext()

  useEffect(() => {
    setCategory('popular')
    setHideSearchBar(false)
  }, [setCategory, setHideSearchBar])

  return (
    <div
      className={` ${
        isDark
          ? 'bg-gradient-to-r from-zinc-800 via-slate-800 to-stone-800'
          : 'bg-gradient-to-r from-blue-800 via-blue-600 to-blue-900'
      }  flex flex-col justify-center`}
    >
      <div className="h-24 grid items-center">
        {query.length === 0 ? (
          <h1 className="text-3xl sm:text-4xl my-5 font-serif font-semibold text-center text-white">
            {' '}
            Popular Movies
          </h1>
        ) : (
          <h1 className="text-xl sm:text-4xl my-5 font-serif font-semibold text-center text-white">
            Results for: {query}{' '}
          </h1>
        )}
      </div>
      <div className=" h-full mt-8 flex justify-center items-center">
        {isLoading ? <PageLoader /> : <Movies />}
      </div>
    </div>
  )
}

export default Home
