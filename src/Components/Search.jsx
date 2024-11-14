import { BiCurrentLocation } from "react-icons/bi";
import { BiSearchAlt2 } from "react-icons/bi";
import React, { useEffect, useState } from "react";

export const Search = ({ setQuery }) => {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (city !== "") setQuery(city);
  };


  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="flex flex-row justify-center py-6 ">
      <div className="flex w-[900px] space-x-4 items-center">
        <input
          type="text"
          className="w-full text-lg capitalize px-3 h-11 rounded-md focus:outline-none max-sm:flex "
          placeholder="search for city ...."
          value={city}
          onChange={(e) => {
            setCity(e.currentTarget.value);
          }}
        />
        <BiSearchAlt2
          size={30}
          onClick={handleSearch}
          className="text-white cursor-pointer duration-200  max-md:hidden transiton ease-out hover:scale-125 max-sm:hidden"
        />
        <BiCurrentLocation
          onClick={() => {
            setQuery("fayoum");
          }}
          size={30}
          className="text-white cursor-pointer transiton duration-200 max-md:hidden ease-out hover:scale-125  max-sm:hidden "
        />
      </div>
      <div className="flex flex-row  justify-start items-center px-10  max-md:hidden select-none ">
        <button className="text-white text-3xl font-light">°C</button>
        <p className="text-white text-2xl px-1">|</p>
        <button className="text-white text-3xl font-light">°F</button>
      </div>
    </div>
  );
};
