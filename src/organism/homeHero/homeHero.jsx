import React, { useRef, useEffect, useState } from 'react';
import Slider from "react-slick";
import { HomeMovieHero } from '../../molecules';
import popularMoviesStore from '../../store/popularMovieStore';
import { NextSlide, PrevSlide } from '../../atoms';
import useSliderStore from '../../store/sliderStore';

const HomHero = () => {
  const sliderRef = useRef(null);
  const { movies, fetchMovies } = popularMoviesStore();
  const { 
    activeSlide, 
    setActiveSlide,
    isLoading, } = useSliderStore();

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
    arrow: false,
    beforeChange: ((current, next) => setActiveSlide(next)),
  };

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  const [ itIsLoading, setItIsLoading ] = useState();

  useEffect(() => {

    setItIsLoading(true);

    const timer = setTimeout(() => {
      setItIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [activeSlide])

  return (
    <div className='relative overflow-hidden z-10 -mt-28 xl:-mt-24'>
      <Slider ref={sliderRef} {...settings}>
        {movies.map((movie, index) => {

          const videoSrc = index === activeSlide 
          ? `${movie.trailer}?autoplay=1&loop=1&playlist=${movie.key}&mute=1&controls=0&rel=0&vq=hd720` 
          : `${movie.trailer}`;
          
          return (
            <div key={index} className='w-full h-[650px] relative overflow-hidden'>
              <div className='w-full h-full bg-white absolute z-[0] object-cover'>
              {itIsLoading && (
                <img
                  className='w-full h-full object-cover' 
                  src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                  alt={movie.title}
                />
              )}

                <iframe
                  className={`w-[1200px] h-[750px] md:w-[1900px] md:h-[1300px] lg:w-[1800px] lg:h-[1100px] -mt-20 md:-mt-72 lg:-mt-56 ${itIsLoading ? 'hidden' : ''}`} 
                  src={index === activeSlide ? videoSrc : ''}
                  allow="autoplay; encrypted-media">
                </iframe>
              </div>
              
              <div className='text-white absolute z-50 inset-y-44 px-4 md:px-14'>
                <HomeMovieHero movie={movie} />
              </div>
              <div className='absolute z-[100] inset-y-72 right-0'>
                <NextSlide onClick={() => sliderRef.current.slickNext()} />
              </div>
              <div className='absolute z-[100] inset-y-72 left-0'>
                <PrevSlide onClick={() => sliderRef.current.slickPrev()} />
              </div>
              <div className='absolute z-0 inset-0 bg-gradient-to-t from-slate-950 to-slate-950/20 '></div>
            </div>
          )
        })}
      </Slider>
    </div>
  );
}

export default HomHero;
