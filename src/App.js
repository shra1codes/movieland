import React,{ useEffect, useState } from "react";
import "./App.css";
import MovieCard from "./MovieCard";
import searchIcon from "./search.svg";




// 50b9d31e  API key 
const API_URL = "http://www.omdbapi.com?apikey=50b9d31e";

const movie1 = {
    "Title": "Batman Begins",
    "Year": "2005",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
} 

const App = () => {

    const [movies,setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState([]);

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies("man");
      }, []);

return (
   <div className='app'>
    <h1> MovieLand </h1>

    <div className='search'>
    <input placeholder="search for movies"
           value={searchTerm}
           onChange={(e)=>setSearchTerm (e.target.value)}
    />
    <img
    src={searchIcon}
    alt="Search"
    onClick={()=> searchMovies(searchTerm)}
    />
     </div>

     {
movies?.length > 0
? (
    <div className="container">

    {movies.map((movie) => (
    <MovieCard movie={movie}/>
    ))}
    </div>
)  :(

<div className="empty"> 
<h2>No Movies Found</h2>
</div>
)
} 
     </div>

);
}

export default App;
