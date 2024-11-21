import React from 'react'

const RatingMovie = ({ percentage }) => {
    const radius = 50; // radius lingkaran
    const circumference = 2 * Math.PI * radius; // keliling lingkaran
    const strokeDashoffset = circumference - (percentage / 100) * circumference; // menghitung offset berdasarkan persentase
  
    return (
        <div className='flex space-x-2 items-center'>
            <div className='relative w-12 sm:w-16'>
                <svg className="bg-teal-800/40 rounded-full transform -rotate-90" viewBox="0 0 120 120">
                    <circle
                    className="text-teal-900 opacity-75"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                    r={radius}
                    cx="60"
                    cy="60"
                    />
                    <circle
                    className={`${percentage <= 49 ? 'text-pink-600' : '' } ${percentage <= 69 && percentage >= 50 ? 'text-orange-600' : '' } ${percentage >= 70 ? 'text-teal-600' : '' }`}
                    stroke="currentColor"
                    strokeWidth="9"
                    fill="transparent"
                    r={radius}
                    cx="60"
                    cy="60"
                    strokeDasharray={circumference} 
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    />
                </svg>
                <div className='absolute inset-0 flex justify-center items-center'>
                    <span className='text-white font-extrabold text-xs sm:text-lg'>{ percentage }<sup>%</sup></span>
                </div>
            </div>
            <p 
                className='text-white font-extrabold w-12 leading-tight text-xs sm:text-sm'>
                User Score
            </p>
        </div>
    );
  };

export default RatingMovie;