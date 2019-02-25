import React, { Component } from 'react'

import { fetchFilm } from '../../service/films-api'
import FilmDetailData from './FilmDetailData'

class FilmDetail extends Component {
    constructor(props) {
        super(props)

        this.state = {
            film: []
        }
    }

    componentDidMount() {
        const { id } = this.props.match.params
        fetchFilm(id).then(response => this.setState({ film: response.data }))        
    }

    render() {
        return (
            <FilmDetailData film={this.state.film}/>
        )
    }
}

export default FilmDetail