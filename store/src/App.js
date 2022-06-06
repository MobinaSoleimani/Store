import './App.css';
import { Route, Routes, Navigate } from "react-router-dom";
import Footer from './Footer';
import SignUp from './SignUp';
import Login from './Login'; 
import Navbar from './Navbar';
import Store from './components/Store';
import ProductDetails from './components/ProductDetails';
import Navbarstore from './components/shared/Navbarstore';
import ShopCart from './components/ShopCart';
import ProductContextProvider from './context/ProductContextProvider';
import CartContextProvider from './context/CartContextProvider';


function App() {
  return (
    <>
      <Navbar/>
    <ProductContextProvider>
    <CartContextProvider>
      <Navbarstore />
      <Routes>
        <Route path="/products/:id" element={<ProductDetails/>} />
        <Route path="/cart" element={<ShopCart/>} />
        <Route path="/SignUp"  element={ <SignUp/>} />
        <Route path="/Login"  element={ <Login/>} />
        <Route path="/products"  element={ <Store/>} />
        <Route path="/*" element={<Navigate to="/products"/>} />
      </Routes>
    </CartContextProvider>
  </ProductContextProvider>
  <Footer/>
  </>
  );
}

export default App;
