import React, { useState } from 'react';

const PriceBanner = () => {
  // Add percent change later from data in API
  const mockStockData = [
    { stock: 'SPY', price: '450' },
    { stock: 'DJI', price: '35455' },
  ];

  return (
    <div className='price-banner'>
      {mockStockData.map((stock, index) => {
        return <div className='stock-index' key={index}>
          <span className='index-name'>{stock.stock}</span>
          <span className='index-stats'>{stock.price}</span>
        </div>
      })}
    </div>
  )
}

export default PriceBanner;
