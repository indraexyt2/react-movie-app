import { create } from 'zustand';

const useSkeletonLoading = create((set) => ({
    isLoading: true,
    setIsLoadingTrue: () => set((state) => ({isLoading: true})),
    setIsLoadingFalse: () => set((state) => ({isLoading: false})),
}));

export default useSkeletonLoading;