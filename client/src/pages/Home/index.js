import React, { useState, useEffect } from 'react';
import PriceBanner from '../../components/PriceBanner.js';
import CoverPhoto from './CoverPhoto.js';
import StockSearchForm from '../../components/StockSearchForm.js';

const Home = () => {
  return (
    <>
      <PriceBanner />
      <CoverPhoto />
      <StockSearchForm />
    </>
  )
}

export default Home;
