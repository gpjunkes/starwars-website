import React, { Component } from 'react'

import { fetchFilm } from '../../service/films-api'

class FilmDetail extends Component {
    constructor(props) {
        super(props)

        this.state = {
            film: []
        }
    }

    componentDidMount() {
        fetchFilm(1).then(response => this.setState({ film: response.data }))
    }

    render() {
        return (
            <p>{this.state.film.title}</p>
        )
    }
}