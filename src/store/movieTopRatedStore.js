import { create } from 'zustand';
import axios from "axios";

const API_KEY = 'ec9a092b2084fa211e8cd9911c115b4c';
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

const useMovieTopRated = create((set) => ({
    movieTopRatedData: [],
    fetchMovieTopRated: async () => {
        try {
            const response = await axios.get(`${TMDB_BASE_URL}/movie/top_rated`, {
                params: {
                    api_key: API_KEY,
                    language: 'en-US',
                }
            })
            
            const data = response.data.results
            set({ movieTopRatedData: data})
            
        } catch {

        }
    }
}))

export default useMovieTopRated;