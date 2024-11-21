import React from 'react';
import Logo from '../../atoms/header/logo';
import { FacebookIcon, GitHubIcon, InstagramIcon } from '../../assets/icon/icon';
import { Link } from 'react-router-dom';
import useMovieTopRated from '../../store/movieTopRatedStore';
import Slider from 'react-slick';

const Footer = () => {

  const { movieTopRatedData, fetchMovieTopRated } = useMovieTopRated();
  const dataMovie = movieTopRatedData.slice(0, 4);

  const playStore = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png';
  const appstore = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/1280px-Download_on_the_App_Store_Badge.svg.png';

  const settings = {
    className: "",
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: false,
    variableWidth: true
  };

  return (
    <div className='relative'>
        <div
            className='bg-slate-900 text-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full h-auto px-5 py-20 md:px-20 gap-10'>
            
            <div className='z-20 flex flex-col space-y-3'>
                <Logo />
                <p className='text-sm font-thin'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nisi nihil odit ipsam ex harum tempora hic, minus reprehenderit.
                </p>
                <p className='text-sm '>
                    Connect with us
                </p>
                <div className='space-x-3'>
                    <a 
                        className='hover:text-sky-700'
                        href="">
                        <FacebookIcon />
                    </a>
                    <a 
                        className='hover:text-pink-700'
                        href="">
                        <InstagramIcon />
                    </a>
                    <a 
                        className='hover:text-gray-700'
                        href="">
                        <GitHubIcon />
                    </a>
                </div>
            </div>

            <div className='z-20'>
                <h2 className='font-bold mb-2'>Help</h2>
                <ul className='font-thin text-sm space-y-1.5'>
                    <li
                        className='hover:text-slate-200'>
                        <Link to =''>My Account</Link>
                    </li>
                    <li
                        className='hover:text-slate-200'>
                        <Link to =''>Customer Support</Link>
                    </li>
                    <li
                        className='hover:text-slate-200'>
                        <Link to =''>Contact Us</Link>
                    </li>
                    <li
                        className='hover:text-slate-200'>
                        <Link to =''>Advertise</Link>
                    </li>
                    <li
                        className='hover:text-slate-200'>
                        <Link to =''>Jobs</Link>
                    </li>
                </ul>
            </div>

            <div className='z-20'>
                <h2 className='font-bold mb-2'>Must Watch Movies</h2>
                <div className='w-full'>
                    <Slider {...settings}>
                        { dataMovie.map((data, index) => (
                            <Link to={`/movie/${data.id}`} key={index} className='mr-1.5 ml-1.5 outline-none'>
                                <img 
                                    className='w-36 rounded-md'
                                    src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
                                    alt="" />
                            </Link>
                        ))}
                    </Slider>
                </div>
            </div>

            <div className='z-20'>
                <h2 className='font-bold mb-2'>MyMovie Mobile App</h2>
                <div className='flex space-x-3'>
                    <a href="/">
                        <img 
                            className='w-36'
                            src={playStore} 
                            alt="playstore" />
                    </a>

                    <a href="/">
                        <img 
                            className='w-36 h-auto'
                            src={appstore} 
                            alt="appstore" />
                    </a>
                </div>
            </div>
        </div>

        <div className='absolute top-0 h-20 w-full bg-gradient-to-b from-slate-950 to-transparent pointer-events-none'></div>
        
    </div>
  )
}

export default Footer
