import React, { useState, useEffect } from 'react';
import { getPreviousClose, filteredStocksList } from '../../components/StockAPIUtil.js';
import PriceBanner from '../../components/PriceBanner.js';
import CoverPhoto from './CoverPhoto.js';
import StockSearchForm from '../../components/StockSearchForm.js';
import StockCardList from '../../components/StockCardList.js';

const Home = () => {
  const [listOfStocks, setListOfStocks] = useState([]);

  const appendStock = async (e, listOfStocks, stock) => {
    e.preventDefault();
    const newStock = await getPreviousClose(stock.ticker, stock.name);
    const newListOfStocks = [...listOfStocks];
    newListOfStocks.push(newStock);
    setListOfStocks(newListOfStocks);
  }

  return (
    <>
      <PriceBanner />
      <CoverPhoto />
      <StockSearchForm appendStock={appendStock} listOfStocks={listOfStocks} />
      <StockCardList listOfStocks={listOfStocks} />
    </>
  )
}

export default Home;
