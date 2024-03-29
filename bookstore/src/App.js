import './App.css';
import { Route, Routes, useNavigate } from "react-router-dom";
import HeaderTop from './Components/Home/HeaderTop';
import HeaderMiddle from './Components/Home/HeaderMiddle';
import HeaderBottom from './Components/Home/HeaderBottom';
import Footer from './Components/Home/Footer';
import Home from "./Pages/Home"
import ProductDetail from './Pages/ProductDetail';
import Blogs from './Pages/Blogs';
import Cart from './Pages/Cart';
import BlogDetail from './Pages/BlogDetail';
import WishList from './Pages/WishList';
import LoginRegister from './Pages/LoginRegister';
import Checkout from './Pages/Checkout';
import Contact from './Pages/Contact';
import { useDispatch } from 'react-redux';
import { fetchProducts } from './Redux/productSlice'
import React, { useEffect } from 'react'
import { fetchBlogs } from './Redux/blogSlice';
import {
  fetchCategories
} from './Redux/categorySlice';
import { getAuthToken, getTokenExpireDate } from './Utils/auth';

function App() {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const token = getAuthToken()

  useEffect(() => {
    if (!token) {
      return;
    }

    if (token === "EXPIRED") {
      localStorage.removeItem("auth")
    }

    const tokenDuration = getTokenExpireDate()
    setTimeout(() => {
      localStorage.removeItem("auth")
      navigate("/login")
    }, tokenDuration);

  }, [token])

  useEffect(() => {
    dispatch(fetchProducts())
    dispatch(fetchBlogs())
    dispatch(fetchCategories())
  }, [dispatch])

  return (
    <div class="site-wrapper" id="top">
      <div class="site-header header-4 mb--20 d-none d-lg-block">
        <HeaderTop />
        <HeaderMiddle />
        <HeaderBottom />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/productDetail/:slug' element={<ProductDetail />} />
          <Route path='/blogs' element={<Blogs />}></Route>
          <Route path='/blogDetail/:slug' element={<BlogDetail />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/wishlist' element={<WishList />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/login' element={<LoginRegister />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
