import React from 'react'
import { Fragment } from 'react'
import "../styles/movie-card.css"
import MovieDet from './MovieDet'

export default function MovieCard({movie,movie_id,setMovie_id,getMovieDet,movie_det}) {
    return (
        <a
            onClick={() => {
                console.log(movie.Title)
                setMovie_id(movie.imdbID)
                getMovieDet(movie.imdbID)
            }}    
        >
            <div className="movie-card">
                <img src={movie.Poster} alt={movie.Title} />
                <p>{movie.Title}</p>
                <p>{movie.Year}</p>
                {movie_id === movie.imdbID && <MovieDet movie_det={movie_det} />}
            </div>
        </a>
    )
}
