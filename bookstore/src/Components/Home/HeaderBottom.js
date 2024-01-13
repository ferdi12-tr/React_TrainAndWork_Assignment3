import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories } from '../../Redux/categorySlice';


export default function HeaderBottom() {
    const categories = useSelector(state => state.categories.categories)
    return (categories &&
        <div className="header-bottom">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-3">
                        <nav className="category-nav  primary-nav">
                            <div>
                                <a href="#" className="category-trigger"><i className="fa fa-bars" />Browse
                                    categories</a>
                                <ul className="category-menu">
                                    {categories && categories.map((category, index) => {
                                        return <li key={index} className="cat-item has-children"><a href="#">{category.name}</a>
                                            <ul className="sub-menu">
                                                <li><a href="#">Brake Tools</a></li>
                                                <li><a href="#">Driveshafts</a></li>
                                                <li><a href="#">Emergency Brake</a></li>
                                                <li><a href="#">Spools</a></li>
                                            </ul></li>
                                    })}
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <div className="col-lg-3">
                        <div className="header-phone ">
                            <div className="icon">
                                <i className="fas fa-headphones-alt" />
                            </div>
                            <div className="text">
                                <p>Free Support 24/7</p>
                                <p className="font-weight-bold number">+01-202-555-0181</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="main-navigation flex-lg-right">
                            <ul className="main-menu menu-right li-last-0">
                                <li className="menu-item">
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="menu-item has-children">
                                    <a href="">Pages <i className="fas fa-chevron-down dropdown-arrow" /></a>
                                    <ul className="sub-menu">
                                        <li><Link to="/cart">Cart</Link></li>
                                        <li><Link to="/checkout">Checkout</Link></li>
                                        <li><Link to="/wishlist">Wishlist</Link></li>
                                        <li><Link to="/login">Login Register</Link></li>
                                        {/* <li><a href="my-account.html">My Account</a></li> */}
                                        {/* <li><a href="order-complete.html">Order Complete</a></li> */}
                                    </ul>
                                </li>
                                <li className="menu-item">
                                    <Link to={"/blogs"}>Blog</Link>
                                </li>
                                <li className="menu-item">
                                    <Link to="/contact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}


