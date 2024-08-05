import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeAllcart, deletecartItem } from "store/Slices/productSlice";
import CartList from "components/Cart/CartList";
import RemoveBtn from "components/Cart/RemoveBtn";

const Cart = () => {
  const getItem = useSelector((state) => state.products.cart);
  const dispatch = useDispatch();

  const [quantities, setQuantities] = useState(
    getItem.reduce((acc, item) => {
      acc[item.id] = 1;
      return acc;
    }, {})
  );

  const handleQuantityChange = (id, newQuantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: newQuantity,
    }));
  };

  const handleRemoveAll = () => {
    dispatch(removeAllcart(""));
  };


  const handleDeleteItem = () => {
    dispatch(deletecartItem());
  };

  const total = getItem.reduce(
    (accu, item) => accu + item.price * quantities[item.id],
    0
  );
  const changetotal = parseFloat(total.toFixed(2));
  return (
    <div className="mt-28 ml-10 mr-10 px-4">
      <div className="m-2 flex justify-between items-center">
        <p className="lg:text-2xl md:text-1xl sm:text-md">
          Shopping Cart ({getItem.length}){" "}
        </p>
        <p className="lg:text-2xl md:text-1xl sm:text-md">
          Total Cost on you : {changetotal}{" "}
        </p>
        <RemoveBtn handleRemoveAll={handleRemoveAll} btnTitle={"Remove All"} />
      </div>
      <div className="">
        <CartList
          getItem={getItem}
          quantities={quantities}
          handleQuantityChange={handleQuantityChange}
          handleDeleteItem={handleDeleteItem}
        />
      </div>
    </div>
  );
};

export default Cart;
