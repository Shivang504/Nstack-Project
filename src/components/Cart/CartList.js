import React from "react";
import { DeleteOutline } from "@mui/icons-material";
import Quantity from "components/Quantity/index";

function CartList({
  getItem,
  handleQuantityChange,
  quantities,
  handleDeleteItem,
}) {
  return (
    <table className="min-w-full border-collapse bg-white shadow-md rounded-lg">
      <thead>
        <tr className="bg-gray-100">
          <th className="p-4 border-b text-left"></th>
          <th className="p-4 border-b text-left md:text-sm lg:text-lg">
            Title
          </th>
          <th className="p-4 border-b text-left"></th>
          <th className="p-4 border-b text-left md:text-sm lg:text-lg">
            Price
          </th>
          <th className="p-4 border-b text-left md:text-sm lg:text-lg">
            Category
          </th>
          <th className="p-4 border-b text-left"></th>
        </tr>
      </thead>
      <tbody>
        {getItem.map((element) => {
          const { id, image, price, title, category } = element;
          return (
            <tr key={id} className="hover:bg-gray-50">
              <td className="p-4 border-b text-center">
                <img
                  className="lg:h-16 lg:w-16 md:h-9 md:w-9"
                  src={image}
                  alt={title}
                />
              </td>
              <td className="p-4 border-b lg:text-lg md:text-sm">{title}</td>
              <td className="p-4 border-b ">
                <Quantity
                  quantity={quantities[id]}
                  onQuantityChange={(newQuantity) =>
                    handleQuantityChange(id, newQuantity)
                  }
                />
              </td>
              <td className="p-4 border-b lg:text-lg md:text-sm">
                {" "}
                $ {parseFloat(price * quantities[id]).toFixed(2)}
              </td>
              <td className="p-4 border-b lg:text-lg md:text-sm">{category}</td>
              <td className="p-4 border-b text-center">
                <DeleteOutline
                  className="cursor-pointer"
                  onClick={handleDeleteItem}
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default CartList;
