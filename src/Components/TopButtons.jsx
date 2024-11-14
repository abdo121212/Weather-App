import React from "react";

export const TopButtons = ({ setQuery }) => {
  const cities = [
    {
      id: 1,
      title: "syria",
    },
    {
      id: 2,
      title: "Paris",
    },
    {
      id: 3,
      title: "Egypt",
    },
    {
      id: 4,
      title: "Sydney",
    },

    {
      id: 5,
      title: "Toronto",
    },
  ];

  const handleCity = (e) => {
    setQuery(e.target.innerText);
  };
  return (
    <div className="flex justify-between items-start py-4  max-sm:hidden">
      {cities.map((city) => (
        <div
          onClick={handleCity}
          key={city.id}
          className="text-white font-bold text-lg select-none cursor-pointer transition	hover:text-cyan-200 capitalize"
        >
          {city.title}
        </div>
      ))}
    </div>
  );
};
