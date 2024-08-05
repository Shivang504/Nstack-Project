import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productslist: [],
  product: {},
  item: [],
  cart: [],
  details: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setproducts(state, action) {
      state.productslist = action.payload;
    },
    selectedproduct(state, action) {
      state.product = action.payload;
    },
    removeselectedProduct(state) {
      state.product = {};
    },
    BuyItem(state, action) {
      state.item = action.payload;
    },
    Addtocart(state, action) {
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    },
    deletecartItem(state, action) {
      state.cart = state.cart.filter(
        (element) => element.id !== action.payload
      );
    },
    removeAllcart(state) {
      state.cart = [];
    },
    orderConfimed(state, action) {
      return {
        ...state,
        details: [...state.details, action.payload],
      };
    },
    cancelOrder(state, action) {
      state.details = state.details.filter(
        (element) => element.id !== action.payload
      );
    },
    getUserName(state, action) {
      state.buyerDetails = action.payload;
    },
  },
});

export default productSlice.reducer;
export const {
  setproducts,
  selectedproduct,
  removeselectedProduct,
  BuyItem,
  Addtocart,
  deletecartItem,
  removeAllcart,
  orderConfimed,
  cancelOrder,
  getUserName,
} = productSlice.actions;


