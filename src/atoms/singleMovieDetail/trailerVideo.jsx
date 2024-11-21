import React from 'react'
import useDetailMovieStore from '../../store/detailMovie'

const TrailerVideo = () => {

    const { detailMovie } = useDetailMovieStore();
    const videoTrailer = detailMovie?.trailer;

  return (
    <iframe 
        className='h-64 w-[380px] sm:h-80 sm:w-[550px] md:h-[550px] md:w-[900px] rounded-xl'
        src={videoTrailer}>
    </iframe>
  )
}

export default TrailerVideo
