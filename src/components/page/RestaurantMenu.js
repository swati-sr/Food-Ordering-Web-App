import React from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaurantMenu = () => {
  let { restId } = useParams();
  const restaurantEat = useRestaurantMenu(restId);
  const dispatch = useDispatch();
  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="flex gap-6 bg-[#fffcf2] p-12">
      <h2 className="text-[#252422] font-bold pl-4 pt-4">Menu</h2>
      <ul className="divide-y divide-dashed pt-4 pb-4">
        {restaurantEat.map((item) => (
          <li className="text-[#403d39]" key={item?.card?.info?.id}>
            <>
              <div>{item?.card?.info?.name}</div>
              <div>
                Rs.{item?.card?.info?.price}{" "}
                <button
                  className="font-extrabold size-5 h-7 text-xl text-[#eb5e28]"
                  onClick={() => addFoodItem(item?.card?.info)}
                >
                  +
                </button>
              </div>
            </>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
