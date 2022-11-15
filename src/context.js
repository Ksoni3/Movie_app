import React, { useEffect, useContext, useState } from "react";
import axios from "axios";
import { data } from "autoprefixer";

const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=d3129f18427d37c5012b4f4f64b1222a"



const AppContext= React.createContext();



//Creating a provider

const AppProvider = ({children})=>{

    const [isLoading, setIsLoading]= useState(true)
    const [movie,setMovie]= useState([])
    const [isError, setIsError]= useState({show: "false", msg:" "})
    //children must be passed as a parameter

    const getMovies =(url)=>{
        axios.get(" https://www.omdbapi.com/?apikey=727bbdc1&s=titanic")
        .then((res)=> {
        console.log(res.data.Search)
        if(data.Response === "true"){
            setIsLoading(false)
            setMovie(res.data.Search);
        }else{
            setIsError({
                show:"true",
                msg: data.error
            })
        }
        
    
    } 
        
        )
        .catch((error)=> console.log(error))

    }


    useEffect(()=>{
        getMovies(API_URL);

    },[])
    return <AppContext.Provider value={{movie, isError, isLoading}}>{children}</AppContext.Provider>

}

const useGlobalContext = ()=>{
    return useContext(AppContext)
}

export  {AppContext, AppProvider, useGlobalContext}