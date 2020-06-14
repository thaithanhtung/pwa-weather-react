// import Axios from 'axios';
// const URL = 'https://samples.openweathermap.org/data/2.5/weather';
// export const fetchWeather = async (query) => {
//   const data = await Axios.get(URL, {
//     // headers: { 'X-Requested-With': 'XMLHttpRequest' },
//     headers: 'Access-Control-Allow-Origin',
//     params: {
//       q: query,
//       // units: 'metric',
//       APPID: API_KEY,
//     },
//   });
//   return data;
// };

import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'fd37d6fb26ac0435d616d09b50ea35d2';

export const fetchWeather = async (query) => {
  const { data } = await axios.get(URL, {
    params: {
      q: query,
      units: 'metric',
      APPID: API_KEY,
    },
  });

  return data;
};
