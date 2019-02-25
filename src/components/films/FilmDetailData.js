import React from 'react'

import FilmImage from './FilmImage'

const FilmDetailData = props => (
    <div className="container bg-2 jumbotron" >
    <div>
        <h2>Star Wars: {props.film.title}</h2>
        <div className="film-img-detail">
            <FilmImage film={props.film} />
        </div>
        <div>
            <p>Director: {props.film.director}</p>
            <p>Producer: {props.film.producer}</p>
            <p>Release date: {props.film.release_date}</p>
            <p>{props.film.opening_crawl}</p>
        </div>
    </div>
    </div>
)

export default FilmDetailData