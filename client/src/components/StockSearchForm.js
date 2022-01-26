import React, { useEffect, useState } from 'react';

const StockSearchForm = () => {
  return (
    <form className='stock-search-form'>
      <label className='form-header'>Which stocks strike your fancy today?</label>
      <input className='form-input' placeholder={`Search - Ex. 'AAPL' or 'Apple'`}></input>
    </form>
  )
}

export default StockSearchForm;
