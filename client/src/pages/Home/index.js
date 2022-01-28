import React, { useState, useEffect } from 'react';
import getPreviousClose from '../../components/StockAPIUtil.js';
import PriceBanner from '../../components/PriceBanner.js';
import CoverPhoto from './CoverPhoto.js';
import StockSearchForm from '../../components/StockSearchForm.js';

const Home = () => {
  const [listOfStocks, setListOfStocks] = useState([]);

  const appendStock = async (e, listOfStocks) => {
    e.preventDefault();
    const newStock = await getPreviousClose();
    listOfStocks.push(newStock);
    setListOfStocks(listOfStocks);
  }

  return (
    <>
      <PriceBanner />
      <CoverPhoto />
      <StockSearchForm appendStock={appendStock} listOfStocks={listOfStocks} />
    </>
  )
}

export default Home;
