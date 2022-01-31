import React, { useEffect, useState } from 'react';
import StocksDropDownMenu from './StocksDropDownMenu.js';
import { filteredStocksList } from './StockAPIUtil.js';

const StockSearchForm = ({ appendStock, listOfStocks }) => {
  const [filteredStocks, setFilteredStocks] = useState([]);

  const handleSubmit = (e) => {
    const filteredList = filteredStocksList(e.target.value);
    if (!filteredList.length || filteredList.length > 1) {
      setFilteredStocks(filteredList);
    } else {
      appendStock(e, listOfStocks);
    }
    // appendStock(e, listOfStocks);
  };

  const handleChange = (e) => {
    const filteredList = filteredStocksList(e.target.value);
    setFilteredStocks(filteredList);
  }

  return (
    <form className='stock-search-form' onSubmit={handleSubmit}>
      <label className='form-header'>Which stocks strike your fancy today?</label>
      <input className='form-input' onChange={handleChange} placeholder={`Search - Ex. 'AAPL' or 'Apple'`}></input>
      <StocksDropDownMenu stocks={filteredStocks}/>
    </form>
  )
}

export default StockSearchForm;
