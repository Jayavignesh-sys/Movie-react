import './App.css';
import { NavBar,MovieList } from './components';
import { useState } from "react";
import axios from 'axios';

const API_BASE_URL = "https://www.omdbapi.com";

function App() {
  const [inpValue, setInpValue] = useState("");
  const [movies, setMovies] = useState([]);


  const search = async (e) => {
    if(e.code === "Enter") {
      const response = await axios.get(API_BASE_URL + "/?s=" + inpValue + "&apikey=aa660442");
      setMovies(response.data.Search);
    }
  };

  return (
    <div className="main">
      <NavBar inpValue = {inpValue} setInpValue = {setInpValue} search = {search} className="navbar"/>
      {/*<MovieList className="movie-list"/>*/}
      <MovieList movielist = {movies}/>
    </div>
  );
}

export default App;
