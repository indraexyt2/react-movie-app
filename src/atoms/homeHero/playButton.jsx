import React from 'react'
import { PlayVideoIcon } from '../../assets/icon/icon';
import { Link } from 'react-router-dom';

const playButton = ({ id }) => {
  return (
    <Link 
        to={`/movie/${id}`}
        className='bg-gradient-to-r from-teal-600 to-teal-400 w-2/8 sm:w-2/6 px-4 sm:px-0 rounded-xl py-2 sm:py-3 font-bold flex justify-center items-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-teal-700'>
        Play Video 
        <span className='ms-2'>
            <PlayVideoIcon />
        </span>
    </Link>
  )
}

export default playButton;
