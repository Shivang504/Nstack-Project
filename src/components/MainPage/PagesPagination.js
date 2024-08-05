import React from "react";
import { Pagination } from "@mui/material";

function PagesPagination({ products, itemsPage, handlePage, currentPage }) {
  return (
    <Pagination
      count={Math.ceil(products.length / itemsPage)}
      page={currentPage}
      variant="outlined"
      shape="rounded"
      onChange={handlePage}
      color="primary"
      className="pagination flex justify-center my-8"
    />
  );
}

export default PagesPagination;
