import { configureStore} from "@reduxjs/toolkit";
import productSlice from "./Slices/productSlice";
import productSaga from "../store/Middleware/productSaga";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    products: productSlice,
},
   middleware: () => [sagaMiddleware]
});


sagaMiddleware.run(productSaga);
export default store;
