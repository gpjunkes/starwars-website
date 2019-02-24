import React from 'react'
import ImgDarthVader from '../images/darth-vader.jpg'

import FilmsContainer from './films/FilmsContainer'

const Site = props => (
    <div>
        <nav className="navbar navbar-default">
            <div className="container">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>                        
                </button>
                <a className="navbar-brand" href="#">Me</a>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
                <ul className="nav navbar-nav navbar-right">
                <li><a href="#">WHO</a></li>
                <li><a href="#">WHAT</a></li>
                <li><a href="#">WHERE</a></li>
                </ul>
            </div>
            </div>
        </nav>

        {/* First Container */}
        <div className="container-fluid bg-4 text-center">
            <h3 className="margin">Which side are you in?</h3>
            <img src={ImgDarthVader}  className="img-responsive img-circle margin" style={{display:'inline'}} alt="DarthVader" width="350" height="350" />
        </div>

        <FilmsContainer/>
       
        <footer class="container-fluid bg-4 text-center">
            <p>© 2019 Development by Guilherme Junkes, all rights reserved.</p> 
        </footer>
    
    </div>
)

export default Site     