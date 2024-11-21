import { React, useEffect } from 'react';
import { 
    MoviePoster,
    MovieTitle
} from '../../atoms/sliderPlayingNow';
const PlayingNow = ({ video, index }) => {

  return (
    <div className='overflow-hidden'>
        <div key={index} className='flex flex-col space-y-3'>
          <MoviePoster 
            src={`https://image.tmdb.org/t/p/original/${video.poster_path}`}
            alt={video.title}
            video={video}/>
          <MovieTitle>
            {video.title}
          </MovieTitle>
        </div>
    </div>
  )
}

export default PlayingNow;
