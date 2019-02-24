import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import NavBarContainer from './navbar/NavBarContainer'
import WhichSideContainer from './whichside/WhichSideContainer'
import FilmsContainer from './films/FilmsContainer'
import FilmDetail from './films/FilmDetail'
import FooterContainer from './footer/FooterContainer'


const App = () => (
    <BrowserRouter>
        <div>
            <NavBarContainer/>
            <Route path='/' exact component={WhichSideContainer} />
            <Route path='/films' exact component={FilmsContainer} />
            <Route path='/films/:id' exact component={FilmDetail} />
            <FooterContainer/> 
        </div>
    </BrowserRouter>
)

export default App