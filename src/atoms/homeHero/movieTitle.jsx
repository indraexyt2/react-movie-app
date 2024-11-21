import React from 'react'
import { Link } from 'react-router-dom';

const MovieTitle = ({ children, to }) => {
  return (
    <Link 
        className='font-bold text-3xl md:text-4xl lg:text-6xl hover:text-teal-500 tracking-wider'
        to={to}>
        <h2>{ children }</h2>
    </Link>
  )
}

export default MovieTitle;
