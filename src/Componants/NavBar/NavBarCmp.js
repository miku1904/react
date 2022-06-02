import React from 'react'
import { Link } from 'react-router-dom'

function NavBarCmp() {
  return (
   
	<div className="container">
    	<ul>
        	<li><Link to="/index"  >index</Link></li>
        	<li><Link to="/" >home</Link></li>
            <li><Link to="/main">main</Link></li>
            <li><Link to="/profile" >profile</Link></li>
        </ul>
    </div>
  )
}

export default NavBarCmp;