import { useEffect, useState } from "react";
import './App.css';
import SearchIcon from "./img.png";
import MovieCard from "./components/MovieCard";

const API_URL ='http://www.omdbapi.com/?i=tt3896198&apikey=483a1577';

const movie1 = {
  Poster:"N/A",
  "Title": "Spiderman",
  "Type": "movie",
  "Year":"2010",
  "imdbID": "tt1785572"
}

const App=()=>{
               const[movies,setMovies] = useState([]);
               const[searchTerm,setSearchTerm]=useState('');
              const searchMovies = async(title)=>{
               const response = await fetch(`${API_URL} &s=${title}`);
              const data= await response.json();
              setMovies(data.Search);
               }
             
             useEffect(()=>{
                     searchMovies('Spiderman')
             },[]);
          

return(
    <div className="app">
                 <h1> MovieLand </h1>
                 <div className="search">
                  <input
                  placeholder="Search for movies"
                  value={searchTerm}
                  onChange={(e)=> setSearchTerm(e.target.value)}
                  />
                  <img
                  src={SearchIcon}
                  alt="search"
                  onClick={()=>searchMovies(searchTerm) }
                  />
                 </div>
               
                 {   movies?.length>0?(
                    <div className="container" >
                    {/* <MovieCard movie1={movie1} /> */}
                    {movies.map((movie)=>(
                      <MovieCard movie={movie}/>
                    ))}
                    </div>
                  ):(
                  <div className="empty">  
                    <h2> no movies found </h2>
                  </div>
                 )
                 }
          </div>
);


}


export default App;