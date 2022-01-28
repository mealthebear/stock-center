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
  const url = `https://api.polygon.io/v2/aggs/ticker/${ticker}/prev`;
  const stockData = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${STOCKS_API_TOKEN}`,
    },
  });
  return stockData;
};

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
