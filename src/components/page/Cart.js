import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../Card";
import { clearCart } from "../utils/cartSlice";
// import store from "../utils/store";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const clearFoodItems = dispatch(clearCart());
  return (
    <>
      <div className="">
        {cartItems.map((i) => {
          return (
            <>
              <h2 key={i.id}>{i.name}</h2> <h2 key={i.id}>{i.price}</h2>
              {/* <button className="font-extrabold size-5 h-7 text-xl text-[#eb5e28]">
                {" "}
                -{" "}
              </button> */}
            </>
          );
        })}
      </div>
    </>
  );
};

export default Cart;
