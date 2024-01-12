import React from "react";
import ReactDOM from "react-dom/client";
import Header from "../Header";
import Card from "../Card";
import { restaurantList } from "../constant";
import { useState } from "react";

function filteredData(searchText, restaurants) {
  const filerData = restaurants.filter((restaurant) => {
    return restaurant.data.name.includes(searchText);
  });
  return filerData;
}
const Home = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState(restaurantList);
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
            console.log("Hi");
            const data = filteredData(searchText, restaurants);
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="wrapper">
        {restaurants.map((restaurant) => {
          return <Card key={restaurant.data.id} {...restaurant.data} />;
        })}
      </div>
    </>
  );
};

export default Home;
