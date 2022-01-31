import React, { useState } from 'react';

const PriceBanner = () => {
  // Add percent change later from data in API
  const mockStockData = [
    { ticker: '^SPX', price: '4431.85', stock: 'S&P 500' },
    { ticker: '^DJI', price: '34725.47', stock: 'Dow Jones' },
  ];

  return (
    <div className='price-banner'>
      {mockStockData.map((stock, index) => {
        return <div className='banner-stock' key={index}>
          <p className='banner-ticker'>{stock.ticker}</p>
          <p className='banner-name'>{stock.stock}</p>
          <p className='index-stats'>{`$${stock.price}`}</p>
        </div>
      })}
    </div>
  )
}

export default PriceBanner;
