import React from 'react';
import { Card } from '../../molecules';
import useDetailMovieStore from '../../store/detailMovie';
import dummy from '../../assets/img/dummy.webp'  

const TopCast = () => {

    const { detailMovie } = useDetailMovieStore();
    const actor = detailMovie?.actor ? detailMovie.actor : '';

  return (
    <div className='flex gap-4 overflow-x-auto scrollbar'>
        {actor ? actor.map((actor, index) => (
            <div key={index} className='flex-shrink-0 mb-5'>
                <Card 
                    name={actor.name} 
                    character={actor.character} 
                    profile={actor.profile_path === null ? dummy : `https://image.tmdb.org/t/p/w185/${actor.profile_path}`} />
            </div>
        )) : 'item not found!'}
    </div>
  )
}

export default TopCast;
