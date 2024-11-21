import { create } from 'zustand';
import axios from 'axios';

const API_KEY = 'ec9a092b2084fa211e8cd9911c115b4c';
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

const useDetailMovieStore = create((set) => ({
    detailMovie: [],
    resetDetailMovie: () => set({ detailMovie: [] }),
    fetchDetailMovie: async (id) => {
        try {
            const movieResponse = await axios.get(`${TMDB_BASE_URL}/movie/${id}`, {
                params: {
                    api_key: API_KEY,
                    language: 'en-US',
                },
            });

            const creditsResponse = await axios.get(`${TMDB_BASE_URL}/movie/${id}/credits`, {
                params: {
                    api_key: API_KEY,
                    language: 'en-US',
                },

            });

            const trailersResponse = await axios.get(`${TMDB_BASE_URL}/movie/${id}/videos`, {
                params: {
                    api_key: API_KEY,
                    language: 'en-US',
                },
            });

            const keywordResponse = await axios.get(`${TMDB_BASE_URL}/movie/${id}/keywords`, {
                params: {
                    api_key: API_KEY,
                    language: 'en-us'
                }
            })
            
            const trailerResponseData = trailersResponse.data.results;
            const trailerVideo = trailerResponseData.filter(video => video.type === 'Trailer' && video.site === 'YouTube');
            const trailer = trailerVideo.length > 0 ? `https://www.youtube.com/embed/${trailerVideo[0].key}` : '';

            const producerCredits = creditsResponse.data.crew.find(credit => credit.job === 'Producer');
            const directorCredits = creditsResponse.data.crew.find(credit => credit.job === 'Director');
            const writerCredits = creditsResponse.data.crew.filter(credit => credit.job === 'Writer');
            const actor = creditsResponse.data.cast.slice(0, 10);
            const allActor = creditsResponse.data.cast;

            const keywordsMovie = keywordResponse.data.keywords;

            const movieWithCredits = {
                ...movieResponse.data,
                producer: producerCredits,
                director: directorCredits,
                writer: writerCredits,
                trailer: trailer,
                actor: actor,
                keyword: keywordsMovie
            }
            
            set({ detailMovie: movieWithCredits });

        } catch (error) {
            console.log('Error fetching detail movie:', error);
        }
    }
}));

export default useDetailMovieStore