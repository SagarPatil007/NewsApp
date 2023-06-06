import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { Link} from "react-router-dom";

export class Navbar extends Component {
  
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg fixed-top navbar-light" style={{"backgroundColor":"#e3f2fd"}}>
              <div className="container-fluid">
                <Link className="navbar-brand" to="/">News App</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                    <li className="nav-item"> <Link className="nav-link active" aria-current="page" to="/">General</Link> </li>
                    <li className="nav-item"> <Link className="nav-link" to="/Business">Business</Link> </li>
                    <li className="nav-item"> <Link className="nav-link" to="/Entertainment">Entertainment</Link> </li>
                    <li className="nav-item"> <Link className="nav-link" to="/Science">Science</Link> </li>
                    <li className="nav-item"> <Link className="nav-link" to="/Sports">Sports</Link> </li>
                    <li className="nav-item"> <Link className="nav-link" to="/Technology">Technology</Link> </li>
                  </ul>
                  <form action="" method="get" className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" id="searchBar"  type="submit" >Search</button>
                  </form>
                </div>
            </div>
          </nav>
            </div>
        )
    }
}

export default Navbar
