import React, { useEffect, useState } from 'react';
import StocksDropDownMenu from './StocksDropDownMenu.js';

const StockSearchForm = ({ appendStock, listOfStocks }) => {
  const handleSubmit = (e) => {
    appendStock(e, listOfStocks);
  };

  return (
    <form className='stock-search-form' onSubmit={handleSubmit}>
      <label className='form-header'>Which stocks strike your fancy today?</label>
      <input className='form-input' placeholder={`Search - Ex. 'AAPL' or 'Apple'`}></input>
      <StocksDropDownMenu stocks={[{name: 'Apple Inc.', ticker: 'AAPL'},{name: 'Microsoft Corporation', ticker: 'MSFT'}]}/>
    </form>
  )
}

export default StockSearchForm;
