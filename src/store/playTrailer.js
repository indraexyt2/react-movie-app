import { create } from 'zustand';

const usePlayTrailer = create((set) => ({
    playTrailer: false,
    setPlayTrailer: () => set((state) => ({ playTrailer: !state.playTrailer}))
}));

export default usePlayTrailer;