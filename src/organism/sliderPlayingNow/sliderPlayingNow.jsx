import React, { useState, useEffect, useRef } from 'react';
import { PlayingNow } from '../../molecules/sliderPlayingNow';
import usePlayingMovieStore from '../../store/playingMovieStore';
import { NextIcon, PrevIcon } from '../../assets/icon/icon';
const SliderPlayingNow = () => {
    const sliderRef = useRef(null);
    const { playingMovies, fetchPlayingMovies } = usePlayingMovieStore();

    useEffect(() => {
      fetchPlayingMovies();
    }, [])

    const handlePrev = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({
                left: -300,
                behavior: 'smooth', 
            });
        }
    };

    const handleNext = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({
                left: 300,
                behavior: 'smooth',
            });
        }
    };

    console.log(`Playingmovies: `, playingMovies)

    return (
        <>  
            <div className='overflow-hidden relative'>
                <button onClick={handlePrev} className="absolute z-50 left-0 translate-y-28 rounded-r-xl bg-black/50 hover:bg-teal-500 text-white py-4"><PrevIcon /></button>
                <div
                    className='flex overflow-x-auto slider gap-4'
                    ref={sliderRef}
                    style={{ scrollBehavior: 'smooth' }} 
                >
                    {playingMovies.map((video, index) => (
                        <div key={index}>
                            <PlayingNow video={video} />
                        </div>
                    ))}
                </div>
                <button onClick={handleNext} className="absolute z-50 right-0 top-0 translate-y-28 bg-black/50 hover:bg-teal-500 rounded-l-xl text-white py-4"><NextIcon /></button>
            </div>
        </>
    );
};

export default SliderPlayingNow;
