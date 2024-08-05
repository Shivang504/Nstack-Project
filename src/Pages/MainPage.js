import React, { useEffect } from "react";
import { Addtocart } from "store/Slices/productSlice";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "components/MainPage/ItemList";
import { selectedproduct } from "store/Slices/productSlice";

const MainPage = () => {
  const products = useSelector((state) => state.products.productslist);
  const getItem = useSelector((state) => state.products.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "FETCH_PRODUCTS" });
  }, [dispatch]);

  const handleBuy = (element) => {
    dispatch(selectedproduct(element));
    // console.log(selectedproduct(element));
  };

  // const addProduct = (element) => {
  //     dispatch(Addtocart(element));
  //   }
  // };

  const addProduct = (element) => {
    if (!getItem.some((item) => item.id === element.id)) {
      dispatch(Addtocart(element));
    } else {
      alert("Already You have added in Cart");
    }
  };

  return (
    <>
      <div className="mt-28  ml-15 pl-5 pr-5 mr-15 mb-20">
        <ItemList
          products={products}
          addProduct={addProduct}
          handleBuy={handleBuy}
        />
      </div>
    </>
  );
};

export default MainPage;
