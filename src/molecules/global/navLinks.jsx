import React from 'react'
import { Menu } from '../../atoms';

const NavLinks = () => {
  return (
    <div className='hidden lg:flex space-x-5 items-center'>
        <Menu to='/'>Home</Menu>
        <Menu to='/'>Features</Menu>
        <Menu to='/'>Movies</Menu>
        <Menu to='/'>TV Shows</Menu>
    </div>
  )
}

export default NavLinks;
