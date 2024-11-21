import React, { useEffect} from 'react';
import { 
    MovieDescription,
    PosterMovieSingle } from '../../molecules';
import useDetailMovieStore from '../../store/detailMovie';
import useSkeletonLoading from '../../store/skeletonLoading';

const BackgroundSkeleton = () => {
  return (
    <div className='absolute inset-0 bg-center bg-gray-300 h-full inner-shadow-2 brightness-50'></div>
  )
}

const MovieInformation = () => {

  const { detailMovie } = useDetailMovieStore()
  const { isLoading, setIsLoadingTrue, setIsLoadingFalse } = useSkeletonLoading()

  useEffect(() => {
    setIsLoadingTrue()
  }, [setIsLoadingTrue])

  return (
    <div className='relative h-full pt-24 pb-10 px-6 z-0 -mt-20'>
        {isLoading && <BackgroundSkeleton />}
        <div className={`absolute z-0 inset-0 bg-center bg-cover h-full inner-shadow-2 brightness-50 ${isLoading ? 'hidden' : 'block'}`}
            style={{
            backgroundImage: `url('https://image.tmdb.org/t/p/original/${detailMovie.backdrop_path}')`,
          }}>
        </div>

        <img
        src={`https://image.tmdb.org/t/p/original/${detailMovie.backdrop_path}`}
        alt="background"
        style={{ display: 'none' }} 
        onLoad={setIsLoadingFalse}  
        />

        <div className='relative z-20 clearfix'>
            <div className='-mx-2 me-3 md:mx-7 float-left mr5'>
                <PosterMovieSingle />
            </div>
            <div className=''>
                <MovieDescription />
            </div>
        </div>
    </div>
  )
}

export default MovieInformation;
