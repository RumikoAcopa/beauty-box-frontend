import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    
    <nav className='text-center bg-blue-900 text-yellow-100 p-4'>
      <NavLink
        className='inline-block px-4 py-2'
        activeClassName='text-yellow-300'
        exact
        to='/'
      >
        Home
    </NavLink>

      <NavLink
        className='inline-block px-4 py-2'
        activeClassName='text-yellow-300'
        exact
        to='/products'
      >
        New Product
    </NavLink>

      <NavLink
        className='inline-block px-4 py-2'
        activeClassName='text-yellow-300'
        exact
        to='/categories/new'
      >
        New Category
    </NavLink>
    </nav>
  )
}
export default Nav;