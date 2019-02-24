import React from 'react'

const FilmDetail = ({ match }) => (
    <h3>{match.params.id}</h3>
)

export default FilmDetail