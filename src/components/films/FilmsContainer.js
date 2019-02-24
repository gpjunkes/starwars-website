import React, { Component } from 'react'

import { fetchFilms } from '../../service/films-api'
import FilmsList from './FilmsList'

class FilmsContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            films: []
        }
    }

    componentDidMount() {
        fetchFilms().then(response => this.setState({ films: response.data.results }))
    }

    render() {
        return (
            <div className="container-fluid bg-3 text-center">    
                <h3 className="margin">Films list</h3><br/>
                <FilmsList films={this.state.films} />
            </div>     
        )
    }
}

export default FilmsContainer