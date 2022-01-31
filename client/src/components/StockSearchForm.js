import React, { useEffect, useState } from 'react';
import StocksDropDownMenu from './StocksDropDownMenu.js';
import { filteredStocksList } from './StockAPIUtil.js';

const StockSearchForm = ({ appendStock, listOfStocks }) => {
  const [filteredStocks, setFilteredStocks] = useState([]);
  const [formInput, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const filteredList = filteredStocksList(formInput, true);
    if (!filteredList.length || filteredList.length > 1) {
      setFilteredStocks(filteredList);
    } else {
      appendStock(e, listOfStocks, filteredList[0].ticker);
    };
  };

  const handleChange = (e) => {
    const filteredList = filteredStocksList(e.target.value);
    setInput(e.target.value);
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
