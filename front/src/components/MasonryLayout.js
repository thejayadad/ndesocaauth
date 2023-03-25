import React from 'react'
import Masonry from 'react-masonry-css';
import Note from './Note';

const breakpointColumnsObj = {
    default: 4,
    3000: 6,
    2000: 5,
    1200: 3,
    1000: 2,
    500: 1,
  };

const MasonryLayout = () => {
  return (
    <Masonry className="flex animate-slide-fwd" breakpointCols={breakpointColumnsObj}>
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />

  </Masonry>
  )
}

export default MasonryLayout