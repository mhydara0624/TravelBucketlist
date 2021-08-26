import React from 'react'
import { NavLink } from 'react-router-dom'
function Nav() {
  return (
    <nav className="navbar">
      <h4>Starboard</h4>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/bucketlist">BucketList</NavLink>
        <NavLink to="/new">Cities</NavLink>
      </div>
    </nav>
  )
}

export default Nav
