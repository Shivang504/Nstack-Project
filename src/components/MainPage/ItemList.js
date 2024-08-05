import React, { useState } from "react";
import { Link } from "react-router-dom";
import PagesPagination from "./PagesPagination";
import Btns from "./Btns";

const ItemList = ({ products, addProduct, handleBuy }) => {
  const [currentPage, setcurrentPage] = useState(1);
  const itemsPage = 8;

  const indexofLastPage = currentPage * itemsPage;
  const indexofFirstPage = indexofLastPage - itemsPage;
  const currentProducts = products.slice(indexofFirstPage, indexofLastPage);

  const handlePage = (event, value) => {
    setcurrentPage(value);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {currentProducts.length === 0 ? (
        <h1 className="text-4xl font-semibold text-center">Loading...</h1>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-5">
          {currentProducts.map((element) => {
            const { id, price, image, category, title } = element;
            return (
              <div
                className="border p-4 rounded-lg flex flex-col justify-between"
                key={id}
              >
                <Link to={`/product/${id}`} className="flex-grow">
                  <div className="mb-4 flex justify-center">
                    <img src={image} alt={title} className="w-32 h-40" />
                  </div>
                  <div className="text-1xl font-medium mb-2">{title}</div>
                  <div className="text-gray-600 mb-2 font-semibold text-xl">
                    $ {price}
                  </div>
                  <div className="text-gray-500 mb-4">{category}</div>
                </Link>
                <div className="flex justify-center gap-5">
                  <Link to={`/product/${id}`}>
                    <Btns handleclick={()=>handleBuy} btnTitle="Buy Now" />
                  </Link>
                  <Btns
                    handleclick={() => addProduct(element)}
                    btnTitle="Add To Cart"
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}
      <PagesPagination
        products={products}
        itemsPage={itemsPage}
        currentPage={currentPage}
        handlePage={handlePage}
      />
    </>
  );
};

export default ItemList;
