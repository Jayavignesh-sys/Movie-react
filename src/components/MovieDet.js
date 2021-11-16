import React from 'react'
import "../styles/movie-det.css"

export default function ({movie_det}) {
    return (
        <div className="movie-det">
            <p className="Text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Title&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:-&nbsp;&nbsp;{movie_det.Title}</p>
            <p className="Text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Runtime&nbsp;&nbsp;:-&nbsp;&nbsp;{movie_det.Runtime}</p>
            <p className="Text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Genre&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:-&nbsp;&nbsp;{movie_det.Genre}</p>
            <p className="Text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Director&nbsp;&nbsp;&nbsp;:-&nbsp;&nbsp;{movie_det.Director}</p>
        </div>
    )
}
