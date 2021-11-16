import React from 'react'
import "../styles/movie-det.css"

export default function ({movie_det}) {
    return (
        <div className="movie-det">
            <p className="Title">Title     :-  {movie_det.Title}</p>
            <p>Runtime   :-  {movie_det.Runtime}</p>
            <p>Genre     :-  {movie_det.Genre}</p>
            <p>Director  :-  {movie_det.Director}</p>
        </div>
    )
}
