import React from 'react';
import { Link } from 'react-router-dom';

const Title = ({ children, to}) => {
  return (
    <Link to={ to }>
        <h2 className='text-slate-950 font-bold text-md'>
            { children }
        </h2>
    </Link>
  )
}

export default Title;
