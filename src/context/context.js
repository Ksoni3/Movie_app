import { createContext, useContext, useEffect, useState, useCallback } from "react";
import axios from "axios";
import NoImage from './NoImage.jpg';

const AppContext = createContext();

//Creating a provider
const AppProvider = ({ children }) => {
  const api_key = "d3129f18427d37c5012b4f4f64b1222a";
  const base_url = "https://api.themoviedb.org/3/";

  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [category, setCategory] = useState("popular");
  const [isError, setIsError] = useState({ show: false, msg: "" });
  const [query, setQuery] = useState("");
  const [endpoint, setEndPoint] = useState(`movie/${category}?api_key=${api_key}`);


  
  const API_URL = `${base_url}${endpoint}`;

  const changeCategory = useCallback((categoryname) => {
    setCategory(categoryname);
  }, []);

  const searchApi = "https://api.themoviedb.org/3/search/movie?api_key=d3129f18427d37c5012b4f4f64b1222a&query=";
  

  const getMovies = useCallback((url) => {
    axios
      .get(url)
      .then((res) => {
        setIsLoading(false);
        setMovie(res.data.results);
      })
      .catch((error) => console.log(error));
  }, []);

  const getSearchedMovies = useCallback((searchUrl) => {
    axios
      .get(searchUrl + query)
      .then((res) => {
        setIsLoading(false);
        setMovie(res.data.results);
      })
      .catch((error) => console.log(error));
  }, [query]);

  useEffect(() => {
    setEndPoint(`movie/${category}?api_key=${api_key}`);
  }, [category]);

  useEffect(() => {
    if (query === "") {
      getMovies(API_URL);
    } else {
      getSearchedMovies(searchApi);
    }
  }, [query, API_URL, getSearchedMovies, searchApi]);

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
    NoImage,
    
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
