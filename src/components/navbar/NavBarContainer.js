import React from 'react'
import {Link} from 'react-router-dom'

const NavBarContainer = () => (
    <nav className="navbar navbar-default">
        <div className="container">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>                        
                </button>
                <Link className="navbar-brand" to='/'>Star Wars</Link>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
                <ul className="nav navbar-nav navbar-right">
                <li><Link to='/films'>FILMS</Link></li>
                <li><a href="#">WHAT</a></li>
                <li><a href="#">WHERE</a></li>
                </ul>
            </div>
        </div>
    </nav>
)

export default NavBarContainer