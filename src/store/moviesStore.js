import { create } from 'zustand';

const useMoviesStore = create((set) => ({
    moviesData: [],
    setMoviesData: (value) => set({ moviesData: value }),
    resetDetailMovie: () => set({ moviesData: []})
}))

export default useMoviesStore;