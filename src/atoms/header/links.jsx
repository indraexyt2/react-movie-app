import React from 'react'
import { Link } from 'react-router-dom';

const Menu = ({ children , to }) => {
  return (
    <Link 
        className='text-white font-semibold text-md hover:cursor-not-allowed'
        to={to}>
        {children }
    </Link>
  )
}

export default Menu;
