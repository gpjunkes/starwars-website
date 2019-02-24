import React from 'react'

import FilmImage from './FilmImage'


const FilmsList = props => (
    <div className="row">

        {props.films.map(film => (
            <div key={film.episode_id} className="col-sm-4">
                <p>{film.title}</p>
                <FilmImage film={film} />
            </div>
        ))}
    </div>
)

export default FilmsList