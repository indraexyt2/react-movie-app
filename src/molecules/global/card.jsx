import React from 'react';
import { Image, Title, Description } from '../../atoms';

const Card = ({ name, character, profile }) => {
  return (
    <div className='flex flex-col bg-white w-44 h-80 rounded-md overflow-hidden'>
        <div className=' bg-red-700 w-full'>
            <Image src={ profile } />
        </div>
        <div className='px-4 pt-2 pb-5 -mt-7 bg-white relative z-20'>
            <Title>{ name }</Title>
            <Description>{ character }</Description>
        </div>
    </div>
  )
}

export default Card
