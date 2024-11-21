import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HomeHero, PlayingNowSection, PopularMovies, PopularMoviesSection, TvShowsTrending, TvShowsTrendingSection } from '../organism';
import { SliderPlayingNow } from '../organism';

const Home = () => {

  return (
    <div>
      <HomeHero />
      <div className='bg-slate-950 w-full h-auto z-20 -mt-28 sm:-mt-36 md:-mt-24 xl:-mt-5 relative px-5 pt-14 md:px-20 '>
        <PlayingNowSection />
        <SliderPlayingNow />
      </div>
      <div className='bg-slate-950 w-full h-auto px-5 pt-1 md:px-20 '>
        <TvShowsTrendingSection />
        <TvShowsTrending />
      </div>
      <div className='bg-slate-950 w-full h-auto px-5 pt-10 pb-10 md:px-20 relative'>
        <PopularMoviesSection />
        <PopularMovies />
        
      </div>
    </div>
  )
}

export default Home
