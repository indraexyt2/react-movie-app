import React from 'react';
import SingleCategoryMovie from './singleCategoryMovie';
import useDetailMovieStore from '../../store/detailMovie';

const SingleMovieTittle = () => {

  const { detailMovie, fetchDetailMovie } = useDetailMovieStore();
  
  const releaseDate = detailMovie?.release_date || '';
  const year = releaseDate.slice(0, 4)

  return (
    <div>
      <h2 
        className='text-white font-bold text-xl sm:text-2xl md:text-3xl -mb-1.5'>
          { detailMovie.title }
          <p
            className='text-white opacity-60 text-xl sm:text-2xl md:text-3xl inline ms-1'>
            ({ year })
          </p>
      </h2>
      <SingleCategoryMovie />
    </div>
  )
}

export default SingleMovieTittle;
