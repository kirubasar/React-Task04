import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Home = () => {
  return (
  <div className='container'>
  <ul className="nav justify-content-center nav-underline">
  <li className="nav-item">
    <Link className="nav-link"  to="/all">ALL</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="fullstack">FULL STACK DEVELOPMENT</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/datascience">DATA SCIENCE</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/cybersecurity">CYBER SECURITY</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/career">CAREER</Link>
  </li>
 </ul>
 <Outlet/>
 
</div>
  )
}

export default Home;