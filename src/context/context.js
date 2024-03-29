import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from 'react'
import axios from 'axios'
import NoImage from './NoImage.jpg'

const AppContext = createContext()
const queryString = {
  api_key: process.env.REACT_APP_API_KEY,
}

//Creating a provider
const AppProvider = ({ children }) => {
  // const api_key = 'd3129f18427d37c5012b4f4f64b1222a'

  const { api_key } = queryString
  const base_url = 'https://api.themoviedb.org/3/'

  const [isLoading, setIsLoading] = useState(true)
  const [movies, setMovies] = useState([])
  const [category, setCategory] = useState('popular')
  const [query, setQuery] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [watchLater, setWatchLater] = useState([])
  const [genreLists, setGenreLists] = useState([])
  const [hideSearchBar, setHideSearchBar] = useState(false)
  const [isDark, setIsDark] = useState(true)

  //endpoint for fectching list of genre Links

  const genreListsPath = `https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`

  //endpoint for category
  const [endpoint, setEndPoint] = useState(
    `movie/${category}?api_key=${api_key}`,
  )

  // two URLS
  const API_URL = `${base_url}${endpoint}`
  const searchApi = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=`

  // function to change genre and make an api call

  const changeGenre = (genreName) => {
    //we will call the function here
    getGenreMovies(genreName)
  }

  const changeCategory = useCallback((categoryname) => {
    setCategory(categoryname)
  }, [])

  useEffect(() => {
    setEndPoint(`movie/${category}?api_key=${api_key}`)
  }, [category, api_key])

  //fetching gerne lists

  const getGenreLists = useCallback(async () => {
    const res = await axios.get(genreListsPath)
    setGenreLists(res.data.genres)
  }, [genreListsPath])

  useEffect(() => {
    getGenreLists()
  }, [getGenreLists])

  // fetching movies

  const getMovies = useCallback((url) => {
    axios
      .get(url)
      .then((res) => {
        setMovies(res.data.results)
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  // fetching searched movies

  const getSearchedMovies = useCallback(
    (searchUrl) => {
      axios
        .get(searchUrl + query)
        .then((res) => {
          setMovies(res.data.results)
        })
        .catch((error) => console.log(error))
        .finally(() => {
          setIsLoading(false)
        })
    },
    [query],
  )

  // function to fetch movies by genre

  const getGenreMovies = (par) => {
    const newGenrePath = `${base_url}discover/movie?api_key=${api_key}&with_genres=${par}`
    axios
      .get(newGenrePath)
      .then((res) => {
        setMovies(res.data.results)
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setIsLoading(false)
      })
  }

  // get similar movies

  const getSimilarMovies = (movie_id) => {
    const url = `https://api.themoviedb.org/3/movie/${movie_id}/similar?api_key=${api_key}`
    axios
      .get(url)
      .then((res) => {
        setMovies(res.data.results)
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setIsLoading(false)
      })
  }

  // move to top
  const moveToTop = () => {
    window.scrollTo(0, 0) // scroll to the top of the page
  }

  const value = {
    api_key,
    movies,
    isLoading,
    endpoint,
    setEndPoint,
    query,
    setQuery,
    getMovies,
    category,
    changeCategory,
    setCategory,
    NoImage,
    isOpen,
    setIsOpen,
    changeGenre,
    getGenreMovies,
    watchLater,
    setWatchLater,
    genreLists,
    hideSearchBar,
    setHideSearchBar,
    getSimilarMovies,
    moveToTop,
    isDark,
    setIsDark,
  }

  useEffect(() => {
    if (query === '') {
      getMovies(API_URL)
    } else {
      getSearchedMovies(searchApi)
    }
  }, [query, API_URL, getSearchedMovies, searchApi, getMovies, category])

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider, useGlobalContext }
