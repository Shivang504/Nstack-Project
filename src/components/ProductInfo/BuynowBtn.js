import React from "react";

const BuynowBtn = ({handlebuy,btnBuyTitle}) => {
  return (
    <button
      className="mt-4 bg-slate-900 text-white px-6 py-2 rounded-lg shadow-md hover:bg-white-700"
      onClick={handlebuy}>
      {btnBuyTitle}
    </button>
  );
};

export default BuynowBtn;
