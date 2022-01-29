import React, { useState } from 'react';
import StockCard from './StockCard.js';

const StockCardList = ({ listOfStocks }) => {
  return (
    <div className='stock-list'>
      {listOfStocks.map((stock, index) => {
        return <StockCard key={index} stock={stock} />
      })}
    </div>
  )
}

export default StockCardList;
