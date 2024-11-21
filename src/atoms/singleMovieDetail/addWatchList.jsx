import React from 'react';
import { AddToLWatchListIcon } from '../../assets/icon/icon';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

const AddWatchList = () => {
  return (
    <>
      <button id="watchlist-button" className='text-white w-10 bg-teal-950 h-10 rounded-full'>
        <AddToLWatchListIcon />
      </button>
      <Tooltip 
        anchorId="watchlist-button" 
        content="Add to your watchlist" 
        place="bottom" 
        style={
            { 
                backgroundColor: '#115e59', 
                color: 'white',
            }}/>
    </>
  )
}

export default AddWatchList;
