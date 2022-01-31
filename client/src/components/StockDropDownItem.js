import React, { useState } from 'react';

const StockDropDownItem = ({ handleSubmit, stock }) => {
  const [name, setName] = useState(stock.name);
  const [ticker, setTicker] = useState(stock.ticker);

  return (
    <p 
      className='dropdown-item' 
      onClick={(e) => {
        console.log(name, ticker, 'Just clicked this stock!');
        handleSubmit(e, ticker, name)
    }}
    >
      {stock.ticker} - {stock.name}
    </p>
  )
}

export default StockDropDownItem;
