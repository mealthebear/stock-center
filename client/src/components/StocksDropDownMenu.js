import React, { useState } from 'react';

const StocksDropDownMenu = ({ stocks }) => {
  return (
    <div className='stocks-dropdown-menu'>
      {stocks.map((stock, index) => {
        return <p className='dropdown-item' key={index}>{stock.ticker} - {stock.name}</p>
      })}
    </div>
  )
}

export default StocksDropDownMenu;
