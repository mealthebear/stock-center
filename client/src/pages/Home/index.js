import React, { useState, useEffect } from 'react';
import PriceBanner from '../../components/PriceBanner.js';
import CoverPhoto from './CoverPhoto.js';

const Home = () => {
  return (
    <>
      <PriceBanner />
      <CoverPhoto />
    </>
  )
}

export default Home;
