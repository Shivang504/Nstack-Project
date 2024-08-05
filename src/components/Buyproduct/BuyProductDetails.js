import React from "react";
import Quantity from "../Quantity/index";

const BuyProductDetails = ({ Item, quantities, handleQuantityChange }) => {
  return (
    <>
      {Item.map((element) => {
        const { image, title, price, id } = element;
        return (
          <div
            key={id}
            className="flex flex-col gap-5 items-center bg-slate-50 p-2 rounded-lg"
          >
            <img
              src={image}
              alt={title}
              className="lg:h-56 lg:w-56  md:h-40 md:w-40 sm:w-32 sm:h-32 p-2 shadow-sm rounded-md"
            />
            <div className="text-center flex flex-col gap-2">
              <p className="text-lg">{title}</p>
              {/* <p className="text-xl">{category}</p> */}
              <p className="text-2xl font-medium">$ {price}</p>
              <div className="flex items-center justify-center mt-3 mb-2 gap-10">
                <Quantity
                  quantity={quantities[id]}
                  onQuantityChange={(newQuantity) =>
                    handleQuantityChange(id, newQuantity)
                  }
                />
                <p className="pb-2 font-semibold text-lg">
                  Total Cost: $ {parseFloat(price * quantities[id])}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default BuyProductDetails;
