import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const removeFoodItem = (item) => {
    dispatch(removeItem(item));
  };

  const clearFoodItem = () => {
    dispatch(clearCart());
  };

  return (
    <>
      <div className="">
        {cartItems.map((item) => {
          return (
            <div className="flex" key={item.id}>
              <h2>
                {item.name} :: Rs.{item.price}
              </h2>
              <button
                className="font-extrabold size-5 h-7 text-sm text-[#eb5e28]"
                onClick={(item) => removeFoodItem(item)}
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>
      <button
        className="font-extrabold size-5 h-7 text-sm text-[#eb5e28]"
        onClick={() => clearFoodItem()}
      >
        Clear
      </button>
    </>
  );
};

export default Cart;
