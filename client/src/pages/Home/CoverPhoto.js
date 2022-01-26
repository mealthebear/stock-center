import React from 'react';

const CoverPhoto = () => {
  return (
    <div>
      <img alt='New York Stock Exchange' className='cover-photo' src='./nyse.jpeg' />
      <div className='photo-caption'>
        <p>Welcome to the Stock Center.</p>
        <p>Wall Street at your service.</p>
      </div>
    </div>
  )
}

export default CoverPhoto;
