import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CLI_RESTROMENU_URL_FIRST, CLI_RESTROMENU_URL_END } from "../constant";

const useRestaurantMenu = (restId) => {
  const [restaurantEat, setRestaurantEat] = useState([]);
  useEffect(() => {
    getRestaurantEat();
  }, []);

  async function getRestaurantEat() {
    const data = await fetch(
      CLI_RESTROMENU_URL_FIRST + restId + CLI_RESTROMENU_URL_END
    );
    const json = await data.json();
    setRestaurantEat(
      json.data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards
    );
    console.log(
      "DATA===>>>",
      json.data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards
    );
  }
  return restaurantEat;
};

export default useRestaurantMenu;
