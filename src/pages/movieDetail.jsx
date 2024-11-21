import React from 'react';
import { BilledCastSection, MovieInformation, TopCast } from '../organism';
import useDetailMovieStore from '../store/detailMovie';
import usePlayTrailer from '../store/playTrailer';
import { TrailerVideo } from '../atoms';
import { Link } from 'react-router-dom';
const MovieDetail = () => {

  const { detailMovie } = useDetailMovieStore();
  const { playTrailer, setPlayTrailer } = usePlayTrailer();

  const status = detailMovie?.status ? detailMovie.status : '-';
  const originalLanguage = detailMovie?.original_language ? detailMovie.original_language : '-';
  const budget = detailMovie?.budget ? detailMovie.budget : '-';
  const revenue = detailMovie?.revenue ? detailMovie.revenue : '-';

  const keywordAll = detailMovie?.keyword ? detailMovie.keyword : [];
  const keywords = keywordAll.filter(key => key.name.length < 20)
  console.log('keyword', keywords)

  return (
    <div>
      {playTrailer && 
        <div 
          onClick={setPlayTrailer}
          className='fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center'>
          <div>
            <TrailerVideo />
          </div>
        </div>
      }
      <section>
        <MovieInformation />
      </section>
      <div className='bg-slate-950 grid md:grid-cols-12 -mt-2'>
        <section className='col-span-12 md:col-span-9 py-5 px-5 sm:px-7 md:px-14 space-y-4 overflow-x-hidden '>
          <BilledCastSection />
          <TopCast />
        </section>
        <section className='py-5 col-span-12 md:col-span-3 px-5 sm:px-7 md:ps-0 md:pe-14 text-white space-y-5'>
          <div>
            <h4 className='font-bold text-md'>Status</h4>
            <p className='font-thin text-sm'>{ status}</p>
          </div>
          <div>
            <h4 className='font-bold text-md'>Original Language</h4>
            <p className='font-thin text-sm'>{ originalLanguage.toUpperCase() }</p>
          </div>
          <div>
            <h4 className='font-bold text-md'>Budget</h4>
            <p className='font-thin text-sm'>{ budget.toLocaleString('en-US', { style: 'currency', currency: 'USD'}) }</p>
          </div>
          <div>
            <h4 className='font-bold text-md'>Revenue</h4>
            <p className='font-thin text-sm'>{ revenue.toLocaleString('en-US', { style: 'currency', currency: 'USD'}) }</p>
          </div>
          <div>
            <h4 className='font-bold text-md'>Keyword</h4>
            <div className='flex gap-1.5 mt-1 flex-wrap'>
              {keywords.map(( item, index ) => (
              <Link 
                key={index}
                className='text-sm bg-slate-500 ring-1 ring-slate-600 rounded-sm px-2.5 py-0.5'>
                { item.name }
              </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default MovieDetail
