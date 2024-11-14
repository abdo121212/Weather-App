import { TopButtons } from "./Components/TopButtons";
import "./index.css";
import { Search } from "./Components/Search";
import { TimeAndLocation } from "./Components/TimeAndLocation";
import { TemperatureAndDetalis } from "./Components/TemperatureAndDetalis";
import { Forecast } from "./Components/Forecast";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  const [query, setQuery] = useState("london");

  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const API_KEY = "fc63e69958b84cefad5164030232908";
      const url = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${query}&days=3&aqi=no&alerts=no`;

      const data = await fetch(url)
        .then((res) => res.json())
        .then((data) => {
          return data;
        });
      console.log(data);

      if (data.error) {
        toast.info(` ${query}  City Not found   `, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          style: { backgroundColor: "red", color: "white" },
        });
      } else {
        setWeather(data);
      }
    };
    getData();
  }, [query]);

  useEffect(() => {
    const toastify = () => {
      toast.info(`🌤️ Fetching Weather For ${query}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    };
    toastify();
  }, [query]);

  const formatBackGround = () => {
    if (weather !== null) {
      if (weather.current.temp_c <= 35) {
        return `from-cyan-700 to-blue-700 `;
      } else {
        return `from-yellow-700 to-orange-500`;
      }
    }
  };
  return (
    <>
      <div
        className={` max-md:px-0  px-40  bg-gradient-to-br  ${formatBackGround()} `}
      >
        {weather && (
          <div>
            <TopButtons setQuery={setQuery} />
            <Search setQuery={setQuery} />
            <TimeAndLocation weather={weather} />
            <TemperatureAndDetalis weather={weather} />
            <Forecast weather={weather} title="hourly forecast" />
          </div>
        )}
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
