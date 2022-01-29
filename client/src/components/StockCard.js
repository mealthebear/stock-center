import React from 'react';

const StockCard = ({ stock }) => {
  return (
    <div className='stock-card'>
      <div className='stock-name-container'>
        <p>AAPL(Placeholder)</p>
        <p>Apple Inc.(Placeholder)</p>
      </div>
      <div className='stock-price-container'>
        <p>{stock.close}</p>
      </div>
    </div>
  )
}

export default StockCard;
