import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Card from "./src/components/Card";

//static object for fetching Restaurant Data
const restaurantList = [
  {
    id: 1,
    name: "Tasty Bites",
    cuisine: "Italian",
    rating: 4.5,
    address: "123 Main Street, Cityville",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/9fcec2678ec5d5028e8220cb4282a260",
  },
  {
    id: 2,
    name: "Spice Haven",
    cuisine: "Indian",
    rating: 4.2,
    address: "456 Oak Avenue, Townsville",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e5f4980124d3c0915f591bc196317117",
  },
  {
    id: 3,
    name: "Sushi Delight",
    cuisine: "Japanese",
    rating: 4.0,
    address: "789 Pine Road, Villageland",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/a5fca0fc66683ef8fa7067a2f57aa96d",
  },
  {
    id: 4,
    name: "Laddoo Halwayi",
    cuisine: "Indian",
    rating: 4.8,
    address: "123 Main Street, Cityville",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/uz9wrwc7fl6nc4vhrosh",
  },
];

const Container = () => {
  return (
    <>
      <Header />
      <div className="wrapper">
        {restaurantList.map((restro) => {
          return <Card key={restro.id} {...restro} />;
        })}
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Container />);
