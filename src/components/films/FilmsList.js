import React from 'react'
import {Link} from 'react-router-dom'

import FilmImage from './FilmImage'

const FilmsList = props => (
    <div className="container bg-3">
        {props.films.forEach( (film, index) => (            
            film.id = index + 1
        ))}

        {props.films.map(film => (
            <div key={film.episode_id} className="col-sm-4 films-list">
                <Link to={'/films/' + film.id}>
                <p>{film.title}</p>
                <FilmImage film={film} />
                </Link>
            </div>
        ))}
    </div>
)

export default FilmsList