import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {

    return (
     <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      
    
      <Link className="navbar-brand" to="/">
        Navbar
      </Link>
        
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="/netflixhome">
           Home </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/netflixmovies">
                Movies
              </Link>
            </li> 
            <li class="nav-item active">
              <Link class="nav-link" to="/netflixshows">
                Shows
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    )
}
