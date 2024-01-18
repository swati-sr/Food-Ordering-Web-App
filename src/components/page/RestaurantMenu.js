import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  let { id } = useParams();
  const [restaurantEat, setRestaurantEat] = useState(null);

  useEffect(() => {
    getRestaurantEat();
  }, []);

  async function getRestaurantEat() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId=" +
        id
    );
    const json = await data.json();
    console.log(json.data);
    setRestaurantEat(json.data);
  }
  return (
    <div>{id}</div>
    // <ul>
    //   {Object.values(restaurantEat?.menu?.items).map((item) => (
    //     <li key={item.id}>{item.name}</li>
    //   ))}
    // </ul>
  );
};

export default RestaurantMenu;
