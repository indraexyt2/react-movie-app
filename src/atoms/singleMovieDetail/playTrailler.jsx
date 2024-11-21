import React from 'react';
import { PlayVideoIcon } from '../../assets/icon/icon';
import usePlayTrailer from '../../store/playTrailer';

const PlayTrailler = () => {

    const { playTrailer, setPlayTrailer } = usePlayTrailer()
  return (
    <button 
        onClick={setPlayTrailer}
        className='text-white font-semibold flex items-center hover:text-teal-500'>
        Trailer 
        <span className='ms-1'>
            <PlayVideoIcon />
        </span>
    </button>
  )
}

export default PlayTrailler;
