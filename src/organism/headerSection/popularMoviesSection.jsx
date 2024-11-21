import React from 'react';
import { SectionTitle, ViewAllButton } from '../../atoms';

const PopularMoviesSection = () => {
  return (
    <div className='flex justify-between pb-3'>
      <SectionTitle>Popular Movies</SectionTitle>
      <ViewAllButton to='/movies/popular_movies'></ViewAllButton>
    </div>
  )
}

export default PopularMoviesSection;
