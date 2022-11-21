import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss';
import {FaBars} from "react-icons/fa"

const Navbar = () => {
  return (
    <div className='header'>
        
        <Link to="/"> <h1>Lama</h1></Link>

        <ul className='menu'>
            <li><Link to="/"> Home</Link></li>
            <li><Link to="/project"> Project</Link></li>
            {/* <li><Link to="/about"> About</Link></li> */}
            <li><Link to="/contact"> Contact</Link></li>
        </ul>

      

    </div>
  )
}

export default Navbar