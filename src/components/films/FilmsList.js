import React from 'react'
import {Link} from 'react-router-dom'

import FilmImage from './FilmImage'

const FilmsList = props => (
    <div className="container bg-3">
        {props.films.forEach( (film, index) => {
            switch (film.episode_id) {
                case 1:
                    film.id = 4
                    break;
                case 2:
                    film.id = 5
                    break;
                case 3:
                    film.id = 6
                    break;
                case 4:
                    film.id = 1
                    break;
                case 5:
                    film.id = 2
                    break;
                case 6:
                    film.id = 3
                    break;
                case 7:
                    film.id = 7
                    break;
                default:
                    film.id = 1 
            }
            
        })}

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