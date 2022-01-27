import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand font-weight-bold" href="#redux">Redux</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
      <Link to="/" className="nav-link">Home</Link>
      </li>
      <li className="nav-item">
        <Link to="/details" className="nav-link">Details</Link>
      </li>
      <li className="nav-item">
      <Link to="/counter" className="nav-link">Counter</Link>
      </li>
       <li className="nav-item">
       <Link to="/users" className="nav-link">Users</Link>
      </li>
      <li className="nav-item">
       <Link to="/dropdown" className="nav-link">Dropdown</Link>
      </li>
    </ul>
  </div>
</nav>
        </div>
    )
}
