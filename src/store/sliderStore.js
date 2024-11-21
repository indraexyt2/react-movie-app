import { create } from 'zustand';

const useSliderStore = create((set) => ({
    activeSlide: 0,
    isLoading: true,
    setIsLoadingFalse: () => set((state) => ({isLoading: false})),
    setIsLoadingTrue: () => set((state) => ({isLoading: true})),
    setActiveSlide: (index) => set(() => ({activeSlide: index}))
}));

export default useSliderStore;