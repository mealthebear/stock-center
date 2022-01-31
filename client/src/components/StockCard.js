import React from 'react';

const StockCard = ({ stock }) => {
  return (
    <div className='stock-card'>
      <div className='stock-name-container'>
        <p>{stock.ticker}</p>
        <p>{stock.name}</p>
      </div>
      <div className='stock-price-container'>
        <p>{stock.close}</p>
      </div>
      <div className='stock-stats-container'>
        {stock.stats.map((stat, index) => {
          return <p key={index}>{stat}</p>
        })}
      </div>
    </div>
  )
}

export default StockCard;
