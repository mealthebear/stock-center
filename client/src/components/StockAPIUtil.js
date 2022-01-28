import axios from 'axios';

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

const getPreviousClose = async (ticker) => {
  const url = `https://api.polygon.io/v2/aggs/ticker/${'AAPL'}/prev`;
  let stockResult = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${process.env.STOCKS_API_TOKEN}`,
    },
  });
  stockResult = stockResult.data.results[0];
  const currentTime = parseTimestampToDate(stockResult.t);
  const stockData = {
    close: stockResult.c,
    stats: [stockResult.l, stockResult.h],
    date: currentTime.date,
    time: currentTime.time,
  };
  return stockData;
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
}

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

export default getPreviousClose;
