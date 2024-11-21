import React from 'react'
import myLogo from '../../assets/img/Logo.png'
import { Link } from 'react-router-dom'

const MyLogo = () => {
  return (
    <div>
        <Link to='/'>
            <img 
                className='w-52'
                src={myLogo} 
                alt="My Movie" />
        </Link>
    </div>
  )
}

export default MyLogo;
