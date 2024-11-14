// const API_KEY = "fc63e69958b84cefad5164030232908";

// export const getWeatherData = (SeachParams) => {
//   const url = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${SeachParams}&days=3&aqi=no&alerts=no`;
//   const data = fetch(url).then((res) => {
//     res.json().then((data) => {
//       console.log("data form weather api js", data);
//     });
//   });
// };

// export const getFormatData = async (searchParams) => {
//   const data = await getWeatherData("weather", searchParams);
//   const {
//     coord: { lat, lon },
//     main: { temp, feels_like, humidity, temp_max, temp_min },
//     dt,
//     sys: { country, sunrise, sunset },
//     wind: { speed },
//     weather,
//   } = data;

//   const { icon, main, description } = weather[0];
//   return {
//     description,
//     lat,
//     lon,
//     temp,
//     feels_like,
//     icon,
//     main,
//     humidity,
//     temp_max,
//     temp_min,
//     dt,
//     country,
//     sunrise,
//     speed,
//     sunset,
//   };
// };
