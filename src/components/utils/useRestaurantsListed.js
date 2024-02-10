import { useState, useEffect } from "react";
import { CLI_RESTROLIST_URL } from "../constant";

const useRestaurantsListed = () => {
  const [allRestroList, setAllRestroList] = useState(null);
  const [filteredRestroList, setFilteredRestroList] = useState([]);

  useEffect(() => {
    getRestaurantsData();
  }, []);

  async function getRestaurantsData() {
    const data = await fetch(CLI_RESTROLIST_URL);
    const json = await data?.json();
    const restaurants =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setAllRestroList(restaurants);
    setFilteredRestroList(restaurants);
  }

  return {
    allRestroList,
    filteredRestroList,
    setAllRestroList,
    setFilteredRestroList,
  };
};

export default useRestaurantsListed;
