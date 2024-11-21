import React from 'react';
import { Link } from 'react-router-dom';
import { NextIcon } from '../../assets/icon/icon';

const ViewAllButton = ({ to }) => {
  return (
    <Link
        className='text-white font-bold flex items-center hover:text-teal-500'
        to={to}>
        View all 
        <NextIcon className='ms-1' fontSize='small' />
    </Link>
  )
}

export default ViewAllButton;
