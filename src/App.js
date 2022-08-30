import React,{ useEffect } from "react";
import "./App.css";
import searchIcon from "./search.svg";



// 50b9d31e  API key 
const API_URL = "http://www.omdbapi.com?apikey=50b9d31e";

const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        console.log(data.Search);
    }

    useEffect(() => {
        searchMovies("Batman");
      }, []);
return (
   <div className='app'>
    <h1> MovieLand </h1>

    <div className='search'>
    <input placeholder="search for movies"
           value="superman"
           onChange={()=> {}}
    />
     </div>

     </div>
);
}

export default App;
