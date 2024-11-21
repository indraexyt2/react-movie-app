import React from 'react';
import { AddToListIcon } from '../../assets/icon/icon';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

const AddToList = () => {
  return (
    <>
      <button id='add-to-list-button' className='text-white w-10 bg-teal-950 h-10 rounded-full'>
          <AddToListIcon />
      </button>
      <Tooltip 
      anchorId="add-to-list-button" 
      content="Add to list" 
      place="bottom" 
      style={
          { 
              backgroundColor: '#115e59', 
              color: 'white',
          }}
      />
    </>
  )
}

export default AddToList;
