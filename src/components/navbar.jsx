import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink to={'/'} className="navbar-brand d-flex align-items-center">
          <i className="fab fa-github mr-2"></i>
          <strong>BoBoHub</strong>
        </NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"/>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <NavLink className="nav-link" to={'/'}>Home</NavLink>
            <NavLink className="nav-link" to={'/users'}>Users</NavLink>
          </ul>
          <form className="form-inline">
            <input className="form-control" type="search" placeholder="Search" arial-label="Search" />
          </form>
        </div>
      </nav>
    );
  }
}

export default NavBar;