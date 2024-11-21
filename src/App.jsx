import './index.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Navbar } from './organism';
import HomHero from './organism/homeHero/homeHero';

function App() {

  return (
    <>
      <Navbar />
      <HomHero />
      <div className='bg-slate-950 h-96 w-full z-20 -mt-24 xl:-mt-5 relative'>
        
      </div>
    </>
  )
}

export default App
