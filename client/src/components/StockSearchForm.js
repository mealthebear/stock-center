import React, { useEffect, useState } from 'react';
import StocksDropDownMenu from './StocksDropDownMenu.js';
import { filteredStocksList } from './StockAPIUtil.js';

const StockSearchForm = ({ appendStock, listOfStocks }) => {
  const [filteredStocks, setFilteredStocks] = useState([]);

  const handleSubmit = (e) => {
    appendStock(e, listOfStocks);
  };

  const handleChange = (e) => {
    const filteredList = filteredStocksList(e.target.value);
    setFilteredStocks(filteredList);
  }

  return (
    <form className='stock-search-form' onSubmit={handleSubmit}>
      <label className='form-header'>Which stocks strike your fancy today?</label>
      <input className='form-input' onChange={handleChange} placeholder={`Search - Ex. 'AAPL' or 'Apple'`}></input>
      <StocksDropDownMenu stocks={[{name: 'Apple Inc.', ticker: 'AAPL'},{name: 'Microsoft Corporation', ticker: 'MSFT'}]}/>
    </form>
  )
}

export default StockSearchForm;
