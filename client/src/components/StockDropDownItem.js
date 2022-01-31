import React, { useState } from 'react';

const StockDropDownItem = ({ handleSubmit, stock }) => {

  return (
    <p
      ariaDescription={stock.name}
      ariaLabel={stock.ticker}
      className='dropdown-item'
      onClick={(e) => {
        handleSubmit(e, e.target.attributes.arialabel.nodeValue, e.target.attributes.ariadescription.nodeValue);
    }}
    >
      {stock.ticker} - {stock.name}
    </p>
  )
}

export default StockDropDownItem;
