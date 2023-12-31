import './App.css';
import { Route, Routes } from "react-router-dom";
import HeaderTop from './Components/Home/HeaderTop';
import HeaderMiddle from './Components/Home/HeaderMiddle';
import HeaderBottom from './Components/Home/HeaderBottom';
import Footer from './Components/Home/Footer';
import Home from "./Pages/Home"
import ProductDetail from './Pages/ProductDetail';

function App() {
  return (
    <div class="site-wrapper" id="top">
      <div class="site-header header-4 mb--20 d-none d-lg-block">
        <HeaderTop />
        <HeaderBottom />
        <HeaderMiddle />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/productDetail' element={<ProductDetail />}></Route>
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
