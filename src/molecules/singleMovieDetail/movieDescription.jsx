import React, { useEffect } from 'react';
import { 
    SingleMovieTittle,
    RatingMovie,
    PlayTrailler,
    AddToList,
    AddWatchList,
    OverviewMovie,
    CreditsMovie
     } from '../../atoms';
import useDetailMovieStore from '../../store/detailMovie';
import { useParams } from 'react-router';
import { TrailerVideo } from '../../atoms';

const MovieDescription = () => {

    const { id } = useParams();
    const { detailMovie, fetchDetailMovie, resetDetailMovie } = useDetailMovieStore();
    console.log('Detail Movie: ', detailMovie)

    useEffect(() => {
        fetchDetailMovie(id);

        return () => {
            resetDetailMovie()
        }
    }, [fetchDetailMovie, id, resetDetailMovie]);

    const rating = detailMovie?.vote_average ?? 0;
    const ratingMovie = Math.round(rating * 10);

    return (
        <div className='space-y-4'>
            <SingleMovieTittle />
            <RatingMovie percentage={ratingMovie}/>
            <div className='flex items-center space-x-2'>
                <AddToList />
                <AddWatchList />
                <PlayTrailler />
            </div>
            <OverviewMovie />
            <div className='grid grid-cols-2 sm:grid-cols-3 lg:pe-80 gap-5'>
                {detailMovie?.producer && (
                    <CreditsMovie name={detailMovie.producer.name} job={detailMovie.producer.job} />
                )}
                {detailMovie?.director && (
                    <CreditsMovie name={detailMovie.director.name} job={detailMovie.director.job} />
                )}
                {detailMovie?.writer && detailMovie.writer.map(person => (
                    <CreditsMovie key={person.name} name={person.name} job={person.job}/>
                ))}
            </div>
            
        </div>
    )
}

export default MovieDescription;
