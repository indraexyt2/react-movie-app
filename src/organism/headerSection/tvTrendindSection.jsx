import React from 'react';
import { SectionTitle, ViewAllButton } from '../../atoms';

const TvShowsTrendingSection = () => {
  return (
    <div className='flex justify-between mb-3'>
      <SectionTitle>Trending Movies</SectionTitle>
      <ViewAllButton to='/movies/trending_movies'></ViewAllButton>
    </div>
  )
}

export default TvShowsTrendingSection;
