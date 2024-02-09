import React, { useEffect } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  let { restId } = useParams();
  const restaurantEat = useRestaurantMenu(restId);

  return (
    <div className="flex gap-6 bg-[#fffcf2] p-12">
      <h2 className="text-[#252422] font-bold pl-4 pt-4">Menu</h2>
      <ul className="divide-y divide-dashed pt-4 pb-4">
        {restaurantEat.map((item) => (
          <li className="text-[#403d39]" key={item?.card?.info?.id}>
            {item?.card?.info?.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
