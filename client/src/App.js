import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Pages/Main";
import Admin from "./Pages/AdminPages/Admin/Admin";
import Products from "./Pages/AllPages/Products/Products";
import Cart from "./Pages/AllPages/Cart/Cart";
import Home from './Pages/AllPages/Home/Home';
import ScrollToTop from "./Components/ScrollToTop";
import Register from "./Pages/AllPages/Register/Register";
import Login from "./Pages/AllPages/Register/Login";
import ProductInfo from "./Pages/AllPages/ProductInfo/ProductInfo";
import AdminProducts from "./Pages/AdminPages/AdminProducts/AdminProducts";
import AdminMain from "./Pages/AdminPages/AdminMain";
import AdminAdd from "./Pages/AdminPages/AdminAdd/AdminAdd";
import Orders from "./Pages/AdminPages/Orders/Orders";
import Users from "./Pages/AdminPages/Users/Users";
import Reviews from "./Pages/AdminPages/Reviews/Reviews";
import OrderDetail from "./Pages/AdminPages/OrderDetail/OrderDetail";
import AdminUpdatePd from "./Pages/AdminPages/AdminAdd/AdminUpdatePd";


function App() {
  return (
    <>
      <BrowserRouter>
      <ScrollToTop/>
        <Routes>

          <Route path="/" element={<Main />}>
            <Route index path="/" element={<Home/>} />
            <Route path="products" element={<Products />} />
            <Route path="products/1" element={<ProductInfo />} />
            <Route path="cart" element={<Cart />} />
            <Route path="register" element={<Register/>} />
            <Route path="Login" element={<Login/>} />
          </Route>

          <Route path="admin" element={<AdminMain/>} >
            <Route index path=""  element={<Admin />}  />
            <Route path="products"  element={<AdminProducts />}  />
            <Route path="addproduct"  element={<AdminAdd />}  />
            <Route path="addproduct1"  element={<AdminUpdatePd />}  />
            <Route path="orders"  element={<Orders />}  />
            <Route path="orders/od"  element={<OrderDetail />}  />
            <Route path="users"  element={<Users />}  />
            <Route path="reviews"  element={<Reviews />}  />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
