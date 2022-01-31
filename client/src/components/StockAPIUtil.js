import axios from 'axios';
// {stocks: [{},{},{},...]}
import stocks from '../../../stocks.json';

const getPreviousClose = async (ticker) => {
  const url = `https://api.polygon.io/v2/aggs/ticker/${'AAPL'}/prev`;
  let stockResult = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${process.env.STOCKS_API_TOKEN}`,
    },
  });
  stockResult = stockResult.data.results[0];
  const currentTime = parseTimestampToDate(stockResult.t);
  const roundedClose = roundPriceToTwoDecimals(stockResult.c);
  const stockData = {
    close: `$${roundedClose}`,
    stats: [
      `Low: ${roundPriceToTwoDecimals(stockResult.l)}`, 
      `High: ${roundPriceToTwoDecimals(stockResult.h)}`
    ],
    date: currentTime.date,
    time: currentTime.time,
  };
  return stockData;
};

const roundPriceToTwoDecimals = (price) => {
  let priceString = price.toString();
  if (!priceString.includes('.')) {
    return `${priceString}.00`;
  } else if (priceString.slice(priceString.indexOf('.')).length <= 2) {
    return `${priceString}0`;
  } else {
    return price;
  };
};

/**
 * Converts timestamp in milliseconds to proper date & time.
 * @param {Number} milliseconds
 * @returns {Object} Object that has date and time of timestamp.
 */
const parseTimestampToDate = (milliseconds) => {
  const date = new Date();
  date.setTime(milliseconds);
  const dateFormat = date.toLocaleDateString();
  const timeString = date.toLocaleTimeString();
  const time = timeString.substring(0,4);
  const amOrPM = timeString.substring(timeString.length - 2);
  const timeFormat = `${time} ${amOrPM}`;
  const currentDate = {
    date: dateFormat,
    time: timeFormat,
  };
  return currentDate;
};

const filteredStocksList = (input, submitOption) => {
  if (!input) return [];
  const stockList = stocks.stocks.slice(0);
  const filteredStocks = [];
  const lowInput = input.toLowerCase();
  // First, find exact ticker if possible
  for (let counter = 0; counter < stockList.length; counter++) {
    if (stockList[counter].ticker.toLowerCase() === lowInput) {
      filteredStocks.push(stockList[counter]);
      if (submitOption) return filteredStocks;
      // Prevents duplicates in final result
      stockList.splice(counter, 1);
      break;
    };
  };
  // Second, filter by tickers
  for (let counter = 0; counter < stockList.length; counter++) {
    if (stockList[counter].ticker.slice(0, input.length).toLowerCase() === lowInput) {
      filteredStocks.push(stockList[counter]);
      stockList.splice(counter, 1);
    };
  };
  // Third, filter by company name
  for (let counter = 0; counter < stockList.length; counter++) {
    if (stockList[counter].name.slice(0, input.length).toLowerCase() === lowInput) {
      filteredStocks.push(stockList[counter]);
    };
  };
  console.log(filteredStocks);
  return filteredStocks;
};

export {
  getPreviousClose,
  filteredStocksList,
};

// const submitFilter = (input) => {
//   if (!input) return [];
//   const stockList = stocks.stocks.slice(0);
//   const filteredStocks = [];
//   const lowInput = input.toLowerCase();
//   // If exact ticker found, return only that ticker
//   for (let counter = 0; counter < stockList.length; counter++) {
//     if (stockList[counter].ticker.toLowerCase() === lowInput) {
//       filteredStocks.push(stockList[counter]);
//       return filteredStocks;
//     };
//   };

//   // Next, filter by beginning tickers
//   for (let counter = 0; counter < stockList.length; counter++) {
//     if (stockList[counter].ticker.slice(0, input.length).toLowerCase() === lowInput) {
//       filteredStocks.push(stockList[counter]);
//       stockList.splice(counter, 1);
//     };
//   };

//   // Lastly, filter by company name
//   for (let counter = 0; counter < stockList.length; counter++) {
//     if (stockList[counter].name.slice(0, input.length).toLowerCase() === lowInput) {
//       filteredStocks.push(stockList[counter]);
//     };
//   };
//   return filteredStocks;
// }


/* Save function for later */
// const getCurrentDayClose = async (ticker, date) => {
//   const url = `https://api.polygon.io/v1/open-close/${ticker}/${date}`;
//   const stockData = await axios.get(url, {
//     headers: {
//       Authorization: `Bearer ${STOCKS_API_TOKEN}`,
//     },
//   });
//   return stockData;
// };

/* Save function for later */
// const hasTradingClosed = () => {
//   /**
//    * hasTradingClosed uses 24 hour time to determine if
//    * trading has closed for the day. The reason for this is
//    * because hours and minutes in 24 hour time format
//    * concatenated together and then converted to an integer
//    * will always be greater than earlier times.
//    */
//   const today = new Date();
//   const endOfDayTrading = 1300;
//   let currentMinutes = today.getMinutes();
//   if (currentMinutes.toString().length === 1) {
//     currentMinutes = `0${currentMinutes}`;
//   }
//   currentTime = Number(`${today.getHours()}${currentMinutes}`);
//   if (currentTime >= endOfDayTrading) {
//     return true;
//   } else {
//     return false;
//   };
// };
