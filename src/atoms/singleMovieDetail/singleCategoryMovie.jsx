import React from 'react';
import { Link } from 'react-router-dom';
import useDetailMovieStore from '../../store/detailMovie';

const SingleCategoryMovie = () => {
  const { detailMovie } = useDetailMovieStore();
  const genres = detailMovie?.genres ? detailMovie.genres.map(genre => genre.name) : [];

  return (
    <div>
      {genres.length > 0 ? (
        genres.map((genre, index) => (
          <span key={index}>
            <Link 
              to='' 
              className='text-teal-500 font-extrabold text-[9px] sm:text-xs hover:text-teal-600'>
              {genre.toUpperCase()}
            </Link>
            {index < genres.length - 1 && <span className='text-white'>, </span>}
          </span>
        ))
      ) : (
        '-'
      )}
    </div>
  );
}

export default SingleCategoryMovie;
