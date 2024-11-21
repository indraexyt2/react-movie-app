import React, { useEffect, useState } from 'react';
import useMoviesStore from '../store/moviesStore';
import { useParams } from 'react-router';
import usePlayingMovieStore from '../store/playingMovieStore';
import { Link } from 'react-router-dom';
import genres from '../data/genres.json';
import Arrow from '@mui/icons-material/KeyboardArrowDownRounded';
import useMovieTopRated from '../store/movieTopRatedStore';
import ResetIcon from '@mui/icons-material/RestartAltRounded';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import popularMoviesStore from '../store/popularMovieStore';
import useSearchStore from '../store/searchStore';
const Movies = () => {
  const { source, query } = useParams();
  const [genresFilter, setGenresFilter] = useState([]);
  const { moviesData, setMoviesData } = useMoviesStore();
  const [releaseDateFilter, setReleaseDateFilter] = useState(null); 
  const { playingMovies, fetchPlayingMovies } = usePlayingMovieStore();
  const { movieTopRatedData, fetchMovieTopRated } = useMovieTopRated();
  const { popularMovies, fetchMovies } = popularMoviesStore();
  const { searchMoviesData, fetchSearchMovies } = useSearchStore();
  const [openFilter, setOpenFilter] = useState({
    genres: false,
    releaseDate: false,
  });

  const keyword = query

  useEffect(() => {
    setMoviesData([]);
  }, [source, query, setMoviesData]);
  
  useEffect(() => {
    if (source === 'playing_now') {
      fetchPlayingMovies();
    } else if (source === 'trending_movies') {
      fetchMovieTopRated();
    } else if (source === 'popular_movies') {
      fetchMovies();
    } else if (source === 'search') {
      fetchSearchMovies(keyword);
    }
  }, [source, query, fetchPlayingMovies, fetchMovieTopRated, fetchSearchMovies, fetchMovies]);
  
  useEffect(() => {
    if (source === 'playing_now') {
      setMoviesData(playingMovies);
    } else if (source === 'trending_movies') {
      setMoviesData(movieTopRatedData);
    } else if (source === 'popular_movies') {
      setMoviesData(popularMovies);
    } else if (source === 'search') {
      setMoviesData(searchMoviesData);
    }
  }, [playingMovies, movieTopRatedData, popularMovies, searchMoviesData, setMoviesData]);
  
  console.log('Search: ', searchMoviesData)
  const handChangeFilter = (e) => {
    const genreId = e.target.value;
    if (e.target.checked) {
      setGenresFilter([...genresFilter, parseInt(genreId)]);
    } else {
      setGenresFilter(genresFilter.filter((id) => id !== parseInt(genreId)));
    }
  };

  const filteredMovies = moviesData?.filter((movie) => {
    const movieYear = new Date(movie.release_date).getFullYear();
    const matchesGenre = genresFilter.length === 0 || movie.genre_ids.some((id) => genresFilter.includes(id));
    const matchesYear = !releaseDateFilter || movieYear === parseInt(releaseDateFilter);
    return matchesGenre && matchesYear;
  });

  const toggleFilter = (filterName) => {
    setOpenFilter((prevState) => ({
      ...prevState,
      [filterName]: !prevState[filterName],
    }));
  };

  const releaseDate = (e) => {
    setReleaseDateFilter(e.target.value);
  };

  return (
    <div className="text-white bg-slate-950 w-full h-auto px-5 pt-1 md:pe-20 md:ps-[52px] -mt-16">
      <div className="pt-24">
        <h2 className="text-3xl font-extrabold tracking-tight">
        {source === 'playing_now'
          ? 'Playing Now'
          : source === 'trending_movies'
          ? 'Trending Movies'
          : source === 'popular_movies'
          ? 'Popular Movies'
          : source === 'search'
          ? `Search Results for "${query}"`
          : 'Movies'}
        </h2>

        <p className="text-sm font-light text-slate-400 mt-1">
          <Link className="hover:text-teal-500" to="/">
            Home
          </Link>{' '}
          /{' '}
          <Link className="hover:text-teal-500" to="/movies">
            Movies
          </Link>{' '}
          /{' '}
          <Link className="hover:text-teal-500" to={`/${source}`}>
          {source === 'playing_now'
          ? 'Playing Now'
          : source === 'trending_movies'
          ? 'Trending Movies'
          : source === 'popular_movies'
          ? 'Popular Movies'
          : source === 'search'
          ? `Search Results for "${query}"`
          : 'Movies'}
          </Link>
        </p>
      </div>

      <div className="pt-16 grid lg:grid-cols-12">
        <div className="hidden lg:block lg:col-span-2">
          <h2
            onClick={() => toggleFilter('genres')}
            className="font-extrabold text-xl pb-2 cursor-pointer flex items-center justify-between pe-4"
          >
            <span>Genres</span>
            <span
              className={`transition-all ease-in-out duration-500 ${openFilter.genres ? '' : 'rotate-180'}`}
            >
              <Arrow />
            </span>
          </h2>

          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              openFilter.genres ? 'max-h-[500px]' : 'max-h-0'
            }`}
          >
            {genres.map((genre, index) => (
              <div className="flex justify-between items-center pe-5 my-1" key={index}>
                <label className="cursor-pointer font-light" htmlFor={genre.name}>
                  {genre.name}
                </label>
                <input
                  onChange={handChangeFilter}
                  value={genre.id}
                  className="cursor-pointer"
                  type="checkbox"
                  name={genre.name}
                  id={genre.name}
                />
              </div>
            ))}
          </div>

          <div className={`w-11/12 h-0.5 rounded-full bg-gradient-to-tr from-slate-950 to-teal-600 ${openFilter.genres ? 'mt-4' : ''}`}></div>

          <h2
            onClick={() => toggleFilter('releaseDate')}
            className="mt-5 font-extrabold text-xl pb-2 cursor-pointer flex items-center justify-between pe-4"
          >
            <span>Release Date</span>
          </h2>

          <div className={`flex flex-row justify-between pe-5 mt-4`}>
            <input
              type="range"
              min="1950"
              max="2024"
              step="1"
              name="year"
              id="year"
              value={releaseDateFilter}
              onChange={releaseDate}
              className="date"
            />
            <span 
              id='reset-button' 
              className='-mt-3 cursor-pointer'
              onClick={() => setReleaseDateFilter(null)}>
              <ResetIcon />
            </span>
            <Tooltip 
              anchorId="reset-button" 
              content="Reset" 
              place="bottom" 
              style={
                  { 
                      backgroundColor: '#115e59', 
                      color: 'white',
                  }}
            />

            <label htmlFor="year" className="block text-center -mt-3">
              {releaseDateFilter === null ? 'yyyy' : releaseDateFilter}
            </label>
          </div>

          <div className={`w-11/12 h-0.5 rounded-full bg-gradient-to-tr from-slate-950 to-teal-600 mt-4`}></div>
        </div>

        <div className="col-span-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
            {filteredMovies?.map((data, index) => (
              <div key={index} className="overflow-hidden flex flex-col space-y-3">
                <Link to={`/movie/${data.id}`}>
                  <img
                    className="rounded-md"
                    src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
                    alt={data.title}
                  />
                </Link>
                <Link to={`/movie/${data.id}`} className="font-bold hover:text-teal-500">{data.title}</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;
