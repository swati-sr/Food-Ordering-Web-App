import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  let { restId } = useParams();
  const [restaurantEat, setRestaurantEat] = useState([]);

  useEffect(() => {
    getRestaurantEat();
  }, []);

  async function getRestaurantEat() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.21290&lng=81.42940&restaurantId=" +
        restId +
        "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    setRestaurantEat(
      json.data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards
    );
  }

  return (
    <div className="menuPage">
      <h2>Menu</h2>
      <ul>
        {restaurantEat.map((item) => (
          <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
