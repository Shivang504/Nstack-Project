import React from "react";

const RemoveBtn = ({ handleRemoveAll, btnTitle }) => {
  return (
    <button
      className="lg:text-1xl md:text-lg sm:text-sm  bg-gray-200 p-2 rounded-md hover:bg-slate-50"
      onClick={handleRemoveAll}
    >
      {btnTitle}
    </button>
  );
};

export default RemoveBtn;
