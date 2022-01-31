import React, { useState } from 'react';
import StockDropDownItem from './StockDropDownItem.js';

const StocksDropDownMenu = ({ handleSubmit, stocks }) => {

  return (
    <div className='stocks-dropdown-menu'>
      {stocks.map((stock, index) => {
        return <StockDropDownItem handleSubmit={handleSubmit} key={index} stock={stock} />
      })}
    </div>
  )
}

export default StocksDropDownMenu;
