import React, { useEffect } from 'react';
import useDetailMovieStore from '../../store/detailMovie';
import useSkeletonLoading from '../../store/skeletonLoading';

const PosterSkeleton = () => {
  return (
    <div className="animate-pulse w-full h-56 md:h-96 bg-gray-300 rounded-t-lg"></div>
   )
}

const PosterMovie = () => {
  const { detailMovie } = useDetailMovieStore();
  const { isLoading, setIsLoadingTrue, setIsLoadingFalse } = useSkeletonLoading();

  useEffect(() => {
    setIsLoadingTrue();
  }, [setIsLoadingTrue]);

  return (
    <div className='w-36 sm:w-48 md:w-64'>
      {isLoading && <PosterSkeleton />}

      <img 
        className={`rounded-t-lg w-full ${isLoading ? 'hidden' : 'block'}`}
        src={`https://image.tmdb.org/t/p/original/${detailMovie.poster_path}`}
        alt={detailMovie.title}
        onLoad={setIsLoadingFalse}
      />
      <a href=''>
        <div 
          className='bg-teal-950 rounded-b-lg py-1.5 sm:py-2 md:py-2.5 flex justify-center space-x-2 items-center shadow-md'>
          <img 
            className='rounded-md w-7 sm:w-9'
            src="https://media.themoviedb.org/t/p/original/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg" 
            alt="" />
          <div className='flex flex-col leading-3 text-[10px] sm:text-xs text-white'>
            <span className='opacity-50'>Now Streaming</span>
            <span className='font-semibold'>Watch Now</span>
          </div>
        </div>
      </a>
    </div>
  );
};

export default PosterMovie;
