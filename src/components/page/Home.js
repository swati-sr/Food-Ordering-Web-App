import React, { useEffect } from "react";
import Header from "../Header";
import Card from "../Card";
import { useState } from "react";
// import { ShimmerThumbnail, ShimmerButton } from "react-shimmer-effects";
import Shimmer from "../Shimmer";

//function for searching restaurant
function filteredData(searchText, allRestroList) {
  const filterData = allRestroList.filter((restaurant) => {
    return restaurant.info.name.includes(searchText);
  });
  return filterData;
}

//Default exported Component
const Home = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredRestroList, setFilteredRestroList] = useState([]);
  const [allRestroList, setAllRestroList] = useState([]);

  useEffect(() => {
    getRestaurantsData();
  }, []);

  //fetch data from API and setting the value below
  async function getRestaurantsData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllRestroList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestroList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }
  if (!allRestroList) {
    return null;
  }

  return (
    <>
      <Header />
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
                <Card key={restaurant?.info?.id} {...restaurant?.info} />
              </>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Home;
