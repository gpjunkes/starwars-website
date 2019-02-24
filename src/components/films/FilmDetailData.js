import React from 'react'

import FilmImage from './FilmImage'

const FilmDetailData = props => (
    <div className="bg-2 " >
    <div >
        <FilmImage film={props.film} />
        <p>Title: {props.film.title}</p>
        <p>Created: {props.film.created}</p>
        <p>Director: {props.film.director}</p>
        <p>Producer: {props.film.producer}</p>
        <p>Release date: {props.film.release_date}</p>
        <p>{props.film.opening_crawl}</p>
    </div>
    </div>
)

export default FilmDetailData