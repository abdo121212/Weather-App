import React from "react";
import { format } from "date-fns";

export const TimeAndLocation = ({ weather: { location } }) => {
  const currentTime = location.localtime;
  const currentTimeEpoch = location.localtime_epoch;
  function formatLocalTimeEpoch(epoch) {
    // Convert epoch seconds to milliseconds
    const date = new Date(epoch * 1000);
    // Format the date using date-fns
    return format(date, "EEEE");
  }
  const formattedDate = formatLocalTimeEpoch(currentTimeEpoch);
  return (
    <>
      <div className="flex flex-row justify-center items-center py-6 ">
        <p className="text-white text-2xl font-light max-md:text-2xl max-sm:text-lg ">
          {`${formattedDate} ,${currentTime.split(" ")[0].split("-")[2]} ${
            currentTime.split(" ")[0].split("-")[1]
          } 
          ${currentTime.split(" ")[0].split("-")[0]}  `}
        </p>
        <p className="text-white text-2xl  px-2 font-light max-md:text-2xl max-sm:text-lg">
          {" "}
          |{" "}
        </p>
        <p className="text-white text-2xl  pr-1 font-light max-md:text-2xl max-sm:text-lg">
          {" "}
          local Time
        </p>
        <p className="text-white text-2xl  font-light max-md:text-2xl max-sm:text-lg ">
          {" "}
          {currentTime.split(" ")[1]}{" "}
        </p>
      </div>
      <div className="flex flex-row justify-center items-center  ">
        <p className="text-white font-medium text-3xl max-md:text-2xl ">
          {location.country}
        </p>
        <p className="text-white font-medium text-3xl  px-2 max-md:text-2xl ">
          ,
        </p>
        <p className="text-white font-medium text-3xl  max-md:text-2xl ">
          {location.name}
        </p>
      </div>
    </>
  );
};
