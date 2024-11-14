import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import React from "react";

export const Forecast = ({
  title,
  weather: {
    forecast: { forecastday },
  },
}) => {


  
  const forecastHour = forecastday[0].hour;
  const slider = document.getElementById("slider");
  const scrollR = () => {
    if (slider !== null) {
      slider.scrollLeft += 400;
    }
  };

  const scrollL = () => {
    if (slider !== null) {
      slider.scrollLeft -= 400;
    }
  };
  return (
    <>
      <div className="select-none ">
        <h2 className=" text-2xl uppercase text-white py-6 max-md:text-sm">
          {title}
        </h2>
        <hr />
      </div>
      <div>
        <div className="flex justify-center items-center select-none relative  group">
          <div className="after absolute  top-0 left-0  w-[100px] h-[230px] mx-[-10px]  text-white flex items-center justify-center">
            <AiOutlineArrowLeft
              size={30}
              className="cursor-pointer hidden group-hover:block"
              onClick={scrollL}
            />
          </div>
          <div
            id="slider"
            className=" flex whitespace-nowrap py-5 w-[1020px] pb-20 gap-7 text-white scroll-smooth overflow-x-auto scrolling"
          >
            {forecastHour.map((ele) => (
              <div
                key={ele.time_epoch}
                className="flex flex-col justify-center items-center pr-[105px] "
              >
                <p className="font-light text-2xl">{ele.time.split(" ")[1]}</p>
                <img src={ele.condition.icon} className="py-10" alt="" />
                <p className="font-bold text-xl">{`${ele.temp_c} °`}</p>
              </div>
            ))}
            <div className="after absolute top-0 right-0  w-[100px] h-[230px] flex items-center justify-center">
              <AiOutlineArrowRight
                size={30}
                className="cursor-pointer hidden group-hover:block"
                onClick={scrollR}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
