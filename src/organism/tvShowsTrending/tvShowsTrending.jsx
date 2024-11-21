import React from 'react'
import { useEffect } from 'react';
import useMovieTopRated from '../../store/movieTopRatedStore';
import { Link } from 'react-router-dom';

const TvShowsTrending = () => {

  const { movieTopRatedData, fetchMovieTopRated } = useMovieTopRated();

  useEffect(() => {
    fetchMovieTopRated();
  }, [fetchMovieTopRated])

  const movieTopRated = movieTopRatedData?.slice(7, 14)

  return (

    <div className='w-full grid grid-cols-2 sm:grid-cols-6 lg:grid-cols-5 grid-rows-4 sm:grid-rows-2 lg:grid-rows-2 gap-3'>
        {movieTopRated?.map((data, index) => (
            <div 
                key={index}
                className={`overflow-hidden rounded-md relative group ${index === 0 ? 'col-span-2 row-span-2' : 'sm:col-span-2 sm:row-span-2 lg:col-span-1 lg:row-auto'}`}>
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent pointer-events-none z-10"></div>
                <img 
                    className='object-cover transform transition-all duration-500 group-hover:scale-110'
                    src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`} 
                    alt="" />
                <div className={`absolute z-20 text-white bottom-3 left-3`}>
                    <Link
                        to={`/movie/${data.id}`}
                        className='font-bold hover:text-teal-600 '>
                        { data.title.length > 20 ? data.title.slice(0, 20) + '...' : data.title }
                    </Link>
                </div>
            </div>
        ))}
    </div>
  )
}

export default TvShowsTrending;
