import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BuyProductDetails from "components/Buyproduct/BuyProductDetails";
import BuyerDetails from "components/Buyproduct/BuyerDetails";
import { useSelector, useDispatch } from "react-redux";
import { orderConfimed, getUserName } from "store/Slices/productSlice";
import { Alert, Snackbar } from "@mui/material";

const BuyProduct = () => {
  const Item = useSelector((state) => state.products.item);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userDetail, setUserDetail] = useState({
    userName: "",
    userNumber: "",
    userAddress: "",
    userCountry: "",
    userState: "",
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleClick = () => {
    if (
      !userDetail.userName ||
      !userDetail.userNumber ||
      !userDetail.userAddress ||
      !userDetail.userCountry ||
      !userDetail.userState
    ) {
      setSnackbar({
        open: true,
        message: "Please fill in all required fields.",
        severity: "error",
      });
    } else {
      setSnackbar({
        open: true,
        message: "Your Order is Confirmed.",
        severity: "success",
      });
      dispatch(orderConfimed(Item[0]));
      dispatch(getUserName(userDetail));

      setTimeout(() => {
        navigate("/Order");
      }, 2000);
    }
  };

  const handleClose = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const [quantities, setQuantities] = useState(
    Item.reduce((acc, item) => {
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

  return (
    <div className="flex flex-col md:flex-row md:justify-center sm:flex sm:justify-center items-center gap-10 mt-10 p-5 md:p-20">
      <div className="w-full md:w-1/2 mb-10 md:mb-0">
        <BuyProductDetails
          Item={Item}
          quantities={quantities}
          handleQuantityChange={handleQuantityChange}
        />
      </div>
      <div className="w-full lg:w-1/2 md:w-10/12 flex flex-col justify-center">
        <BuyerDetails setUserDetail={setUserDetail} userDetail={userDetail} />
        <div className="flex justify-center">
          <button
            onClick={handleClick}
            className="bg-slate-800 pt-2  pb-2 pl-5 pr-5 w-56 mr-10 text-white rounded-md "
          >
            Place Your Order
          </button>
          <Snackbar
            open={snackbar.open}
            autoHideDuration={6000}
            onClose={handleClose}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
          >
            <Alert
              onClose={handleClose}
              severity={snackbar.severity}
              sx={{ width: "100%" }}
            >
              {snackbar.message}
            </Alert>
          </Snackbar>
        </div>
      </div>
    </div>
  );
};

export default BuyProduct;
