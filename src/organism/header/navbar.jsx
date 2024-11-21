import React, { useState, useEffect } from 'react'
import { MyLogo } from '../../atoms';
import { NavLinks } from '../../molecules';
import SearchIcon from '@mui/icons-material/SearchRounded';
import Account from '@mui/icons-material/AccountCircleRounded';
import useSearchStore from '../../store/searchStore';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HamburgerIcon, CloseHamburgerIcon } from '../../assets/icon/icon';

const MobileMenu = ({ isMenuOpen }) => {
  return (
    <motion.div 
      initial={{ translateX: "-100%"}}
      animate={{ 
        translateX: isMenuOpen ? "0%" : "100%"
      }}
      exit={{ translateX: "-100%"}}
      transition={{ duration: 0.5 }}
      className='w-72 h-screen absolute bg-slate-900 -mt-[70px] z-50'>
      <div className='mx-5'>
        <div className='pt-5 w-44 flex justify-between'>
          <MyLogo />
        </div>
      </div>
    </motion.div>
  )
}

const Navbar = () => {

  const { searchQuery, setSearchQuery } = useSearchStore();
  const [ isMenuOpen, setIsMenuOpen ] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto"; 
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <>
      <navbar className='bg-transparent flex justify-between items-center px-2 sm:px-3 md:px-12 py-4 relative z-20'>
        <div className='flex space-x-8'>
          <MyLogo />
          <NavLinks />
        </div>
        <div className='hidden lg:flex relative'>
          <form>
            <input 
              className='mr-4 relative focus:outline-none py-1 ps-8 pe-1 rounded-md bg-transparent border-2 text-white placeholder:text-white'
              type="search" 
              placeholder='Find movies...'
              onChange={(e => setSearchQuery(e.target.value))}/>
              <span className='absolute left-1.5 text-white top-1.5'>
                <SearchIcon />
              </span>
              <Link to={`/movies/search/${searchQuery}`} className='hidden'>
                <button>Test</button>
              </Link>
          </form>
            <div className='text-white cursor-pointer hover:cursor-not-allowed'>
              <Account fontSize='large' />
            </div>
        </div>
        <div 
          onClick={() => setIsMenuOpen(prev => !prev)}
          className='text-white -mt-2 me-2 cursor-pointer flex lg:hidden'>
          <HamburgerIcon fontSize='large' />
        </div>
      </navbar>
      
      <AnimatePresence>
        { isMenuOpen && 
          <>
            <MobileMenu isMenuOpen={isMenuOpen} />
            <div className='absolute h-screen w-full bg-black/50 -mt-[70px]'></div>
          </>
        }
      </AnimatePresence>
      
    </>
  )
}

export default Navbar;
