import React from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  let { restId } = useParams();
  const restaurantEat = useRestaurantMenu(restId);

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
