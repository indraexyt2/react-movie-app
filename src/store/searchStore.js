import { create } from 'zustand';
import axios from 'axios';

const API_KEY = 'ec9a092b2084fa211e8cd9911c115b4c';
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

const useSearchStore = create((set) => ({
    searchQuery: '',
    setSearchQuery: (value) => set({ searchQuery: value}),
    searchMoviesData: [],
    fetchSearchMovies: async (keyword) => {
        try {
            const dataResponse = await axios.get(`${TMDB_BASE_URL}/search/movie`, {
                params: {
                    api_key: API_KEY,
                    query: keyword,
                }
            })

            const dataMovies = dataResponse.data.results;

            set({ searchMoviesData: dataMovies })
        } catch (error) {
            console.log('Terjadi kesalahan: ', error)
        }
    }
}))

export default useSearchStore;