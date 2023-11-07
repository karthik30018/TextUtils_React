import React from 'react'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom'

function Navbar(props){
   return(
    <div>
       <nav className={`navbar navbar-expand-lg bg-${props.mode}  navbar-${props.mode}`}>
  <div className="container-fluid">
    <label className="navbar-brand" href="#">{props.title}</label>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
       
          <Link className="nav-link " aria-current="page" to="TextUtils_React">Home</Link>
          {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
        </li>
        <li className="nav-item">
        
        <Link className="nav-link" to="/about">{props.aboutText}</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
        {/* <button className="btn btn-outline-primary" type="submit">Dark Mode</button> */}
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.txt}</label>
        </div>
      </form>
    </div>
  </div>
</nav>
    </div>
   )
}
Navbar.propTypes={
    title : propTypes.string.isRequired,
    aboutText : propTypes.string.isRequired
  }

  Navbar.defaultProps = {
    title: 'set title here',
    aboutText : 'About text here'
  };

export default Navbar;