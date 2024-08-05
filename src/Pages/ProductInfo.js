import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { removeselectedProduct, BuyItem } from "store/Slices/productSlice";
import BuynowBtn from "components/ProductInfo/BuynowBtn";

const ProductInfo = () => {
  const product = useSelector((state) => state.products.product);
  const { price, image, description, category, title } = product;
  const dispatch = useDispatch();
  const { productId } = useParams();
  const navigate = useNavigate();

  const handlebuy = (e) => {
    navigate("/buyproduct");
    dispatch(BuyItem(e));
    // console.log(e);
  };

  useEffect(() => {
    // if (productId && productId !== "")
    dispatch({ type: "SELECT_PRODUCT", payload: productId });

    return () => {
      dispatch(removeselectedProduct());
    };
  }, [productId, dispatch]);

  const btnBuyTitle = "Buy Now";

  return (
    <div className="container mx-auto mt-10 p-4 md:p-8 lg:p-20">
      {Object.keys(product).length === 0 ? (
        <h1 className="text-4xl text-center">Loading...</h1>
      ) : (
        <div className="flex gap-0 flex-col md:flex-row bg-gray-50 rounded-lg shadow-lg overflow-hidden">
          <div className="md:w-1/2 p-4 flex justify-center">
            <img
              src={image}
              alt={title}
              className="lg:w-3/4 lg:h-96 md:w-3/4 md:h-96 rounded-lg  sm:w-3/6 sm:h-72 "
            />
          </div>
          <div className="md:w-1/2 p-4 flex flex-col justify-between lg:pr-20">
            <div>
              <h1 className="text-3xl font-semibold mb-2">{title}</h1>
              <p className="text-xl text-gray-700 mb-2">{category}</p>
              <p className="text-2xl font-bold text-gray-900 mb-4">$ {price}</p>
              <Stack spacing={1}>
                <Rating name="size-medium" defaultValue={4} className="pb-2" />
              </Stack>
              <p className="text-base text-gray-600 mb-4 text-justify">
                {description}
              </p>
            </div>
            <BuynowBtn
              handlebuy={() => handlebuy([product])}
              btnBuyTitle={btnBuyTitle}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductInfo;
