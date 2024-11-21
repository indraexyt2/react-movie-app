import React from 'react'
import { NextIcon, PrevIcon } from '../../assets/icon/icon'

export const NextSlide = ({ onClick }) => {
  return (
    <button 
        onClick={onClick}
        className='bg-black/20 py-5 rounded-l-lg transition-colors duration-300 hover:bg-teal-500'>
        <span className='text-white'>
            <NextIcon />
        </span>
    </button>
  )
}
export const PrevSlide = ({ onClick }) => {
  return (
    <button 
        onClick={onClick}
        className='bg-black/20 py-5 rounded-r-lg transition-colors duration-300 hover:bg-teal-500'>
        <span className='text-white'>
            <PrevIcon />
        </span>
    </button>
  )
}
