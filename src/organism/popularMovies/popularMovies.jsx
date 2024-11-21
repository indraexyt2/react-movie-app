import React, { useEffect } from 'react';
import popularMoviesStore from '../../store/popularMovieStore';
import { Link } from 'react-router-dom';
import genres from '../../data/genres.json';

const PopularMovies = () => {
 
  const { popularMovies, fetchMovies } = popularMoviesStore();
  
  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  const popularMoviesData = popularMovies.slice(0, 12)
  return (
    <div 
        className='bg-slate-950 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5'>
        { popularMoviesData.map((data, index) => (
            <div className='flex flex-col space-y-2'>
                <div 
                    key={index}
                    className=' w-full h-full overflow-hidden rounded-md'> 
                    <Link to={`/movie/${data.id}`}>
                        <img 
                            className='object-cover w-full h-full transform transition-transform ease-in-out duration-700 hover:scale-110'
                            src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
                            alt="" />
                    </Link>
                </div>
                <Link 
                    to={`/movie/${data.id}`}
                    className='text-white truncate hover:text-teal-500'>
                    { data.title }
                </Link>
                <div className='flex space-x-1'>
                    { data.genre_ids.map((id, index) => {
                        const genre = genres.find(genres => genres.id === id);
                        return (
                            <Link
                                className={`text-teal-500 text-xs hover:text-white truncate`}
                                key={index}>
                                { genre ? genre.name : '' }
                                { index < data.genre_ids.length - 1 ? ', ' : '' }
                            </Link> 
                        )
                    })}
                </div>
            </div>
        ))}
    </div>
  )
}

export default PopularMovies
