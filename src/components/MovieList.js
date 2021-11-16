import React from 'react'
import MovieCard from './MovieCard'
import "../styles/movie-list.css"
import { useState } from 'react'
import axios from 'axios'


export default function MovieList({movielist}) {
    const [movie_id, setMovie_id] = useState("");
    const [movie_det, setMovie_det] = useState([]);

    const API_BASE_URL = "http://www.omdbapi.com/";

    const getMovieDet = async (movie_id) => {
        const response = await axios.get(API_BASE_URL + "/?i=" + movie_id + "&apikey=aa660442");
        setMovie_det(response.data);
    }

    return (
    <div className="movie-list">
        {movielist.map((movie) => (
            <MovieCard movie={movie} movie_id={movie_id} setMovie_id = {setMovie_id} getMovieDet = {getMovieDet} movie_det = {movie_det} key={movie.imdbID}/>
        ))}
    </div>
    );
}
