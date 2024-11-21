import React from 'react'
import { Footer, Navbar } from '../organism';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
        <header className='relative z-20'>
            <Navbar />
        </header>
        <main className='relative z-0'>
            <Outlet />
        </main>
        <footer>
          <Footer />
        </footer>
    </>
  )
}

export default MainLayout;
