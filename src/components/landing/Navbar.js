import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Navbar() {
  return (
    <div className="card bg-neutral mt-5 px-10 rounded-full mx-20 shadow-lg text-center">
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><Link className='font-bold text-base' to='/'>Home</Link></li>
          <li><Link className='font-bold text-base' to='/gallery'>Project Gallery</Link></li>
        </ul>
      </div>
      <Outlet />
    </div>
  )
}

export default Navbar