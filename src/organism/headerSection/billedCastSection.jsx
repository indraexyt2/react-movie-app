import React from 'react';
import { SectionTitle, ViewAllButton } from '../../atoms';

const BilledCastSection = () => {
  return (
    <div className='flex justify-between'>
      <SectionTitle>Top Billed Cast</SectionTitle>
      <ViewAllButton></ViewAllButton>
    </div>
  )
}
export default BilledCastSection;
