import {takeEvery,put} from "redux-saga/effects";   //takevery tolds when i have to call
import { setproducts } from "../Slices/productSlice"
import { selectedproduct } from "../Slices/productSlice";

function* getProducts(){
    let data = yield fetch("https://fakestoreapi.com/products")
   data = yield data.json();
// console.log("call api here", data)
   yield put(setproducts(data))
}

function* selectProduct(action){
    const productId = action.payload
    let select = yield fetch(`https://fakestoreapi.com/products/${productId}`)
    select = yield select.json();
    // console.log("hii",select)
    yield put(selectedproduct(select))
}

function* productSaga(){
    yield takeEvery("FETCH_PRODUCTS", getProducts)
    yield takeEvery("SELECT_PRODUCT", selectProduct)
}

export default productSaga;