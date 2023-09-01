import React from 'react'
import {Link} from 'react-router-dom'
import { useAuthContext } from '../../Context/AuthContext'

export default function Header() {
  const {name}=useAuthContext()
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-warning">
  <div className="container">
    <Link to="/" className="navbar-brand" ><h3>LOGO</h3></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to='/' className="nav-link active" aria-current="page" ><h5>Home</h5></Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link active" ><h5>About</h5></Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link active" ><h5>Contact</h5></Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link active" ><h5>{name}</h5></Link>
        </li>
      </ul>
    </div>
  </div>
</nav></>
  )
}
