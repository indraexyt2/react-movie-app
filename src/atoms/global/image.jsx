import React from 'react'

const Image = ({ src, alt }) => {
  return (
    <img 
        className='w-44'
        src={src} 
        alt={alt} />
  )
}

export default Image
