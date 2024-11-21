import React, { useState } from 'react'
import '../../index.css'
import { Meta } from '..';
import { InfoIcon, StarIcon } from '../../assets/icon/icon';
import { Link } from 'react-router-dom';

const MoviePoster = ({ src, alt, video }) => {

  const [ onHover, setOnHover ] = useState(false);
  return (
    <div 
      className='relative w-48 h-72 hover:w-[450px] transition-all duration-1000 playing-now'
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}>
      <img 
          className='rounded-xl w-full h-full object-cover'
          src={src} 
          alt={alt} />
      <div className={`absolute inset-0 z-20 pt-36 px-5 -translate-x-14 ${onHover ? 'translate-x-4' : ''} transition-all duration-700`}>
          {onHover && 
            <div className='flex flex-col space-y-2 truncate p-2'>
              <h2 className='text-white font-bold'>{video.title}</h2> 
              <div className='flex space-x-3 text-sm items-center text-white'>
                <StarIcon className='text-teal-500 -ms-1' />
                <Meta>{ video.vote_average }</Meta>
                <Meta>•</Meta>
                <Meta>{ video.release_date }</Meta>
              </div>
              <Link
                to={`/movie/${video.id}`}
                className='font-bold text-white flex items-center hover:text-teal-500'>
                <span className='-ms-1 mr-3'>
                  <InfoIcon fontSize='large' />
                </span>
                Detail
              </Link>
            </div>
          }
      </div>
    </div>
  )
}

export default MoviePoster;
