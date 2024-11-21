import React from 'react';
import { SectionTitle, ViewAllButton } from '../../atoms';

const PlayingNowSection = () => {
  return (
    <div className='flex justify-between mb-3 -mt-5'>
      <SectionTitle>Playing Now</SectionTitle>
      <ViewAllButton to={`/movies/playing_now`}></ViewAllButton>
    </div>
  )
}

export default PlayingNowSection;
