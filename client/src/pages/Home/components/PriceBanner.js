import React, { useState } from 'react';

const PriceBanner = () => {
  const mockStockData = [
    { stock: 'SPY', price: '450' },
    { stock: 'DJI', price: '35455' },
  ];

  return (
    <div className="price-banner">
      {mockStockData.map((stock, index) => {
        return <div key={index}>{stock.stock} {stock.price}</div>
      })}
    </div>
  )
}

export default PriceBanner;
