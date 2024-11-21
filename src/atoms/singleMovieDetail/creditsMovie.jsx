import React from 'react'

const CreditsMovie = ({ name, job }) => {
  return (
    <div className='text-white'>
      <p className='font-extrabold text-sm border-b-2 border-teal-500 border-opacity-35 w-max'>{ name }</p>
      <p className='font-light text-xs'>{ job }</p>
    </div>
  )
}

export default CreditsMovie;
