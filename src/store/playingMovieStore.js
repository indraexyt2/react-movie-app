import { create } from 'zustand';
import axios from 'axios';

const API_KEY = 'ec9a092b2084fa211e8cd9911c115b4c';
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

const usePlayingMovieStore = create((set) => ({
    playingMovies: [],

    fetchPlayingMovies: async () => {
        try {
            const dataPlayingMovies = await axios.get(`${TMDB_BASE_URL}/movie/upcoming`, {
                params: {
                    api_key: API_KEY,
                    language: 'en-us',
                    page: 3,
                }
            })

            const result = dataPlayingMovies.data.results;

            const dataVideo = await Promise.all(
                result.map( async (movie) => {
                    const fetchVideo = await axios.get(`${TMDB_BASE_URL}/movie/${movie.id}/videos`, {
                        params: {
                            api_key: API_KEY,
                            language: 'en-us',
                        },
                    })
                    const videoTrailer = fetchVideo.data.results.filter(video => video.type === 'Trailer' && video.site === 'YouTube');
                    const trailer = videoTrailer.length > 0 ? `https://www.youtube.com/embed/${videoTrailer[0].key}` : ``;
                    return { ...movie, trailer }
                })
            )

            set({playingMovies: dataVideo})
            
        } catch (error) {
            console.error('Error fetching playing movies:', error);
        }
    }
}))

export default usePlayingMovieStore;