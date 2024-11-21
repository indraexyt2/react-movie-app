import React from 'react'
import { Link } from 'react-router-dom'

const Category = ({ children, to }) => {
  return (
    <Link to={to}>
        <span
            className='text-sm text-teal-400 font-bold'>
            { children }
        </span>
    </Link>
  )
}

export default Category
