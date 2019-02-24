import React from 'react'

const FilmsList = props => (
    <div className="row">
        {props.films.map(film => (
            <div key={film.episode_id} className="col-sm-4">
                <p>{film.title}</p>
                <img src="birds1.jpg" className="img-responsive margin" style={{width:'100%'}} alt="Image"/>
            </div>
        ))}
    </div>
)

export default FilmsList