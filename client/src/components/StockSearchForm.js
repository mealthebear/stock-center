import React, { useEffect, useState } from 'react';

const StockSearchForm = ({ getPreviousClose }) => {
  return (
    <form className='stock-search-form' onSubmit={(e) => {
      e.preventDefault();
      return getPreviousClose();
    }}>
      <label className='form-header'>Which stocks strike your fancy today?</label>
      <input className='form-input' placeholder={`Search - Ex. 'AAPL' or 'Apple'`}></input>
    </form>
  )
}

export default StockSearchForm;
