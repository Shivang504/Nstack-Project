import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { cancelOrder } from "store/Slices/productSlice";

const Order = () => {
  const OrderList = useSelector((state) => state.products.details);
  const GetBuyerDetails = useSelector((state) => state.products.buyerDetails);
  //    console.log(GetBuyerDetails);

  const dispatch = useDispatch();

  return (
    <div className="mt-28 ml-10 mr-10 px-4">
      <div>
        <h1 className="text-center text-3xl font-medium text-slate-800 mb-3">
          Your Orders.
        </h1>
      </div>
      <table className="min-w-full border-collapse bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-4 border-b text-center"></th>
            <th className="p-4 border-b text-center text-slate-800">Title</th>
            <th className="p-4 border-b text-center text-slate-800">
              Total Price
            </th>
            <th className="p-4 border-b text-center text-slate-800">
              Billing Name & Address
            </th>
            <th className="p-4 border-b text-center text-slate-800">Status</th>
            <th className="p-4 border-b"></th>
          </tr>
        </thead>
        <tbody>
          {OrderList.map((element) => {
            const { id, title, price, image } = element;
            return (
              <tr key={id} className="hover:bg-gray-50">
                <td className="p-4 border-b text-center">
                  <img src={image} alt="imgtitle" className="h-16 w-16 "></img>
                </td>
                <td className="p-4 border-b text-center">{title}</td>
                <td className="p-4 border-b text-center">$ {price}</td>
                <td className="p-4 border-b text-center">
                  {GetBuyerDetails.userName} <br></br>{" "}
                  {GetBuyerDetails.userAddress}
                </td>
                <td className="p-4 border-b text-center">Pending</td>
                <td className="p-1 border-b text-center">
                  <button
                    className="bg-slate-800 text-white pt-0.5 pb-0.5 pl-1.5 pr-1.5 rounded-md font-light"
                    onClick={() => dispatch(cancelOrder(element.id))}
                  >
                    Cancel Order
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Order;
