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
      <div className="searchBar">
        <input
          type="text"
          placeholder="Search"
          className="searchInput"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="searchButton"
          onClick={() => {
            const data = filteredData(searchText, allRestroList);
            setFilteredRestroList(data);
          }}
        >
          Search
        </button>
      </div>
      {allRestroList.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="wrapper">
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
