import React, { useEffect, useState } from 'react';

const StockSearchForm = ({ appendStock, listOfStocks }) => {
  const handleSubmit = (e) => {
    appendStock(e, listOfStocks);
  };

  return (
    <form className='stock-search-form' onSubmit={handleSubmit}>
      <label className='form-header'>Which stocks strike your fancy today?</label>
      <input className='form-input' placeholder={`Search - Ex. 'AAPL' or 'Apple'`}></input>
    </form>
  )
}

export default StockSearchForm;
