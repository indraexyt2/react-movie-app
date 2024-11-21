import { create } from 'zustand';
import axios from 'axios';

const API_KEY = 'ec9a092b2084fa211e8cd9911c115b4c';
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

const popularMoviesStore = create((set) => ({
    movies: [],
    popularMovies: [],
    fetchMovies: async () => {
        try {
            const movieResponse = await axios.get(`${TMDB_BASE_URL}/movie/popular`, {
                params: {
                    api_key: API_KEY,
                    language: 'en-US',
                    page: 1,
                },
            });

            const popularMovieResponse = await axios.get(`${TMDB_BASE_URL}/movie/popular`, {
                params: {
                    api_key: API_KEY,
                    language: 'en-US',
                    page: 2,
                },
            });

            const popularMoviesData = popularMovieResponse.data.results

            const movies = movieResponse.data.results.slice(0, 5);

            const moviesWithTrailers = await Promise.all(
                movies.map(async (movie) => {
                    const videoResponse = await axios.get(`${TMDB_BASE_URL}/movie/${movie.id}/videos`, {
                        params: {
                            api_key: API_KEY,
                            language: 'en-US',
                        },
                    });

                    const trailers = videoResponse.data.results.filter(video => video.type === 'Trailer' && video.site === 'YouTube');
                    const trailer = trailers.length > 0 ? `https://www.youtube.com/embed/${trailers[0].key}` : null;
                    const key = trailers[0].key;

                    return { ...movie, trailer, key };
                })
            );

            set({ movies: moviesWithTrailers });
            set({ popularMovies: popularMoviesData })
        } catch (error) {
            console.log('Terjadi kesalahan: ', error);
        };
    }
}))

export default popularMoviesStore;