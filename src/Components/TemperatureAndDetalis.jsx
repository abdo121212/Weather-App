import { BsDropletHalf } from "react-icons/bs";
import { BsSunsetFill } from "react-icons/bs";
import { BiSun } from "react-icons/bi";
import { AiOutlineArrowUp } from "react-icons/ai";
import { AiOutlineArrowDown } from "react-icons/ai";
import { BiWind } from "react-icons/bi";
import { WiHumidity } from "react-icons/wi";
import { CiTempHigh } from "react-icons/ci";
import React from "react";

export const TemperatureAndDetalis = ({
  weather: {
    forecast: { forecastday },
    current,
  },
}) => {
  const checkWeather = () => {
    if (current.temp_c >= 35) {
      return `text-orange-900`;
    } else {
      return `text-cyan-500 `;
    }
  };
  return (
    <div className="select-none">
      <div
        className={`${checkWeather()}  flex justify-center items-center text-2xl font-normal py-6 max-md:text-sm`}
      >
        {current.condition.text}
      </div>
      <div className="grid grid-cols-3 max-md:grid-cols-1 ">
        <div className="flex justify-center items-center ">
          <img src={current.condition.icon} alt="" />
        </div>
        <div className="flex justify-center items-center font-bold text-white text-4xl max-md:py-10">
          {`${current.temp_c.toFixed()} °`}
        </div>
        <div className="text-white">
          <div className="flex justify-center items-center">
            <CiTempHigh size={30} />
            <p className="font-light text-xl  max-md:text-[15px]">Real fell</p>
            <p className="px-2">:</p>
            <p className="font-medium text-xl  max-md:text-[15px]">{`${current.feelslike_c.toFixed()} °`}</p>
          </div>

          <div className="flex justify-center items-center">
            <WiHumidity size={30} />
            <p className="font-light text-xl max-md:text-[15px]">Humidity</p>
            <p className="px-2">:</p>

            <p className="font-medium text-xl max-md:text-[15px]">{`${current.humidity} %`}</p>
          </div>

          <div className="flex justify-center items-center">
            <BiWind size={30} />
            <p className="font-light text-xl max-md:text-[15px]">Wind</p>
            <p className="px-2">:</p>

            <p className="font-medium text-xl max-md:text-[15px] md:text-[18px]">
              {`${current.wind_mph} km/h`}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-5 py-9 max-xl:grid-cols-1 max-md:font-thin max-md-py-5 ">
        <div className="flex text-white  justify-center items-center text-xl">
          <BiSun size={30} />
          <p className="px-3 font-light ">Rise : </p>
          <p className="pr-2 font-medium  ">{forecastday[0].astro.sunrise}</p>
          <p className="font-blod">|</p>
        </div>{" "}
        <div className="flex text-white  text-xl justify-center items-center">
          <BsSunsetFill size={30} />
          <p className="px-3 font-light">Set : </p>
          <p className="pr-2 font-medium">{forecastday[0].astro.sunset}</p>

          <p className="font-bold">|</p>
        </div>
        <div className="flex text-white text-xl justify-center items-center">
          <AiOutlineArrowUp size={30} />
          <p className="px-3 font-light">Hight : </p>
          <p className="pr-2 font-medium">{`${forecastday[0].day.maxtemp_c.toFixed()} °  `}</p>

          <p className="font-bold">|</p>
        </div>
        <div className="flex text-white text-xl justify-center items-center">
          <BsDropletHalf size={30} />
          <p className="px-3 font-light">Medium : </p>
          <p className="pr-2 font-medium">{`${forecastday[0].day.avgtemp_c.toFixed()} °  `}</p>

          <p className="font-bold">|</p>
        </div>
        <div className="flex text-white text-xl justify-center items-center">
          <AiOutlineArrowDown size={30} />
          <p className="px-3 font-light">Low : </p>
          <p className="pr-2 font-medium">{`${forecastday[0].day.mintemp_c.toFixed()} °  `}</p>
        </div>
      </div>
    </div>
  );
};
