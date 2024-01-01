import './App.css';
import { Route, Routes } from "react-router-dom";
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

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
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
