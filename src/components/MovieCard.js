import React from 'react'
import { Fragment } from 'react'
import "../styles/movie-card.css"
import MovieDet from './MovieDet'

export default function MovieCard({movie,movie_id,setMovie_id,getMovieDet,movie_det}) {
    function changeBack(e) {
        e.target.style.background = 'red';
    }
    function Original(e) {
        e.target.style.background = 'white';
    }
    return (
        <a
            onClick={() => {
                console.log(movie.Title)
                setMovie_id(movie.imdbID)
                getMovieDet(movie.imdbID)
            }}    
        >
            <div className="movie-card">
                <img className="Image" onMouseOver={changeBack} onMouseLeave={Original} src={movie.Poster} alt={movie.Title} />
                <br />
                <p className="Alli">{movie.Title}</p>
                <p className="Alli">{movie.Year}</p>
                {movie_id === movie.imdbID && <MovieDet movie_det={movie_det} />}
            </div>
        </a>
    )
}
