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

// https://api.themoviedb.org/3/discover/movie?api_key=API_KEY&with_genres=GENRE_ID

//Creating a provider
const AppProvider = ({ children }) => {
  const api_key = 'd3129f18427d37c5012b4f4f64b1222a'
  const base_url = 'https://api.themoviedb.org/3/'

  const [isLoading, setIsLoading] = useState(true)
  const [movie, setMovie] = useState([])
  const [category, setCategory] = useState('popular')
  const [genre, setGenre] = useState('action')
  const [isError, setIsError] = useState({ show: false, msg: '' })
  const [query, setQuery] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [mobile, setMobile] = useState(false)

  const [genreEndpoint, setGenreEndpoint] = useState(
    `discover/movie?api_key=${api_key}&with_genres= ${genre}`,
  )

  const [endpoint, setEndPoint] = useState(
    `movie/${category}?api_key=${api_key}`,
  )

  const API_URL = `${base_url}${endpoint}`
  const Genre_API = `${base_url}${genreEndpoint}`
  const changeGenre = useCallback(
    (genre) => {
      setGenre(genre)
    },
    [genre],
  )

  const changeCategory = useCallback((categoryname) => {
    setCategory(categoryname)
  }, [])

  const searchApi =
    'https://api.themoviedb.org/3/search/movie?api_key=d3129f18427d37c5012b4f4f64b1222a&query='

  useEffect(() => {
    setGenreEndpoint(`discover/movie?api_key=${api_key}&with_genres= ${genre}`)
  }, [genre])

  useEffect(() => {
    setEndPoint(`movie/${category}?api_key=${api_key}`)
  }, [category])

  // fetching movies

  const getMovies = useCallback((url) => {
    axios
      .get(url)
      .then((res) => {
        setMovie(res.data.results)
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
          setMovie(res.data.results)
        })
        .catch((error) => console.log(error))
        .finally(() => {
          setIsLoading(false)
        })
    },
    [query],
  )

  // fetching genremovies

  const getGenreMovies = useCallback(() => {
    axios
      .get(Genre_API)
      .then((res) => {
        console.log(res.data.results)
        setMovie(res.data.results)
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setIsLoading(false)
      })
  }, [Genre_API])

  const value = {
    api_key,
    movie,
    isError,
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
    mobile,
    setMobile,
    genre,
    setGenre,
    changeGenre,
    getGenreMovies,
    genreEndpoint,
    setGenreEndpoint,
  }

  useEffect(() => {
    if (query === '') {
      getMovies(API_URL)
    } else {
      getSearchedMovies(searchApi)
    }
  }, [query, API_URL, getSearchedMovies, searchApi, getMovies])

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider, useGlobalContext }
