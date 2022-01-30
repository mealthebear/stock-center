import React, { useState } from 'react';

const StocksDropDownMenu = ({ stocks }) => {
  return (
    <div className='stocks-dropdown-menu'>
      {stocks.map((stock) => {
        return <p>{stock.ticker} - {stock.name}</p>
      })}
    </div>
  )
}

export default StocksDropDownMenu;
