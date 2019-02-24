import React from 'react'

const FilmsList = props => (
    <ul>
        {props.films.map(film => (
            <li key={film.episode_id}>{film.title} </li>
        ))}
    </ul>
)

export default FilmsList