import React from 'react';
import { Category, Meta, MovieTitle, PlayButton } from '../../atoms';
import genres from '../../data/genres.json';
import { BookmarkIcon, StarIcon } from '../../assets/icon/icon';
import { Link } from 'react-router-dom';

const homeMovieHero = ({ movie }) => {

    const genreIdsToName = (genres_Id) => {
        return genres_Id.map(id => {
          const genre = genres.find(genre => genre.id === id);
          return genre ? genre.name : '';
        });
      };

  return (
    <>
        <div className='flex flex-col space-y-4'>
            <Category>{ genreIdsToName(movie.genre_ids).join(', ').toUpperCase() } </Category>

            <MovieTitle>{ movie.title }</MovieTitle>

            <div className='flex space-x-3 text-sm items-center'>
                <StarIcon className='text-teal-500' />
                <Meta>{ movie.vote_average }</Meta>
                <Meta>•</Meta>
                <Meta>Popularity: { movie.popularity }</Meta>
                <Meta>•</Meta>
                <Meta>{ movie.release_date }</Meta>
            </div>

            <span className='sm:w-full md:w-[500px]'>
                {movie.overview.length > 100 ? movie.overview.substring(0, 150) + "..." : movie.overview}
            </span>

            <div className='flex space-x-5 sm:space-x-1'>
                <PlayButton id={movie.id} />
                <button className='font-bold w-2/8 sm:w-2/6 hover:text-teal-500 flex justify-center items-center'>
                    Watch Later
                    <span className='ms-2'>
                        <BookmarkIcon />
                    </span>
                </button>
            </div>

        </div>
    </>
  )
}

export default homeMovieHero;
