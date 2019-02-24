import React from 'react'

import NavBarContainer from './navbar/NavBarContainer'
import WhichSideContainer from './whichside/WhichSideContainer'
import FilmsContainer from './films/FilmsContainer'
import FooterContainer from './footer/FooterContainer'

const Site = props => (
    <div>        
        <NavBarContainer/>
        <WhichSideContainer/>
        <FilmsContainer/>       
        <FooterContainer/>    
    </div>
)

export default Site     