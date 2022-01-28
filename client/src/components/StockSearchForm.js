import React, { useEffect, useState } from 'react';
import getPreviousClose from '../components/StockAPIUtil.js';

const StockSearchForm = () => {
  return (
    <form className='stock-search-form' onSubmit={(e) => {
      e.preventDefault();
      console.log('Did we submit the form?');
      getPreviousClose()
    }}>
      <label className='form-header'>Which stocks strike your fancy today?</label>
      <input className='form-input' placeholder={`Search - Ex. 'AAPL' or 'Apple'`}></input>
    </form>
  )
}

export default StockSearchForm;
