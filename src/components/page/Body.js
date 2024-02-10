import React from "react";
import Card from "../Card";
import { useState } from "react";
import Shimmer from "../Shimmer";
import { Link } from "react-router-dom";
import { filteredData } from "../utils/helper";
import useRestaurantsListed from "../utils/useRestaurantsListed";
import useIsOnline from "../utils/useIsOnline";

//Default exported Component
const Body = () => {
  const [searchText, setSearchText] = useState("");
  const { allRestroList, filteredRestroList, setFilteredRestroList } =
    useRestaurantsListed();
  const isOnline = useIsOnline();

  if (!isOnline) {
    return <h2>Oopssss, Check your network issue !</h2>;
  }

  return (
    <>
      <div className="m-4 flex justify-center">
        <input
          type="text"
          placeholder="Search"
          className=" shadow-transparent rounded-2xl divide-inherit pt-2 pb-2 pl-48 text-[#403d39] font-normal w-4/12 border-y-4 border-[#eb5e28] focus:border-x-4 outline-none"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="ml-2 font-bold text-[#252422] hover:text-[#eb5e28] transition duration-300 hover:scale-110 cursor-pointer"
          onClick={() => {
            const data = filteredData(searchText, allRestroList);
            setFilteredRestroList(data);
          }}
        >
          Search
        </button>
      </div>
      {!allRestroList ? (
        <Shimmer />
      ) : (
        <div className="flex flex-wrap justify-between pl-3 pr-3 pt-3">
          {filteredRestroList.map((restaurant) => {
            return (
              <>
                <Link
                  to={"/restaurant/" + restaurant?.info?.id}
                  key={restaurant?.info?.id}
                >
                  <Card {...restaurant?.info} />
                </Link>
              </>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Body;
