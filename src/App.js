import MainPage from './Pages/MainPage';
import Navbar from './components/Navbar/index'
import Order  from './Pages/Order';
import ProductInfo from './Pages/ProductInfo';
import { Routes,Route } from 'react-router-dom';
import BuyProduct from './Pages/BuyProduct';
import Cart from './Pages/Cart';


function App() {
  return (
    <div className="App">
        <Navbar />
        <Routes>
          <Route path='/Home' element={<MainPage />}></Route>
          <Route path='/product/:productId'  element={<ProductInfo />}></Route>
          <Route path='/buyproduct' element={<BuyProduct />}></Route>
          <Route path='/yourCart' element={<Cart />}></Route> 
          <Route path='/Order' element={<Order/>}></Route>
        </Routes>
    </div>

);
}

export default App;

