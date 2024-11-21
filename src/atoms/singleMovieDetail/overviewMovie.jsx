import React from 'react'
import useDetailMovieStore from '../../store/detailMovie';

const OverviewMovie = () => {
    
    const { detailMovie } = useDetailMovieStore();



  return (
    <div className='text-white'>
        <h2 className='font-extrabold text-lg '>Overview</h2>
        <p className='lg:pe-64 text-sm leading-6 font-light'>
        { detailMovie?.overview }
        </p>
    </div>
  )
}

export default OverviewMovie;
