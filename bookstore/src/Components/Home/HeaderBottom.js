import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class HeaderBottom extends Component {
    render() {
        return (
            <div className="header-bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-3">
                            <nav className="category-nav  primary-nav">
                                <div>
                                    <a href="#" className="category-trigger"><i className="fa fa-bars" />Browse
                                        categories</a>
                                    <ul className="category-menu">
                                        <li className="cat-item has-children">
                                            <a href="#">Arts &amp; Photography</a>
                                            <ul className="sub-menu">
                                                <li><a href="#">Bags &amp; Cases</a></li>
                                                <li><a href="#">Binoculars &amp; Scopes</a></li>
                                                <li><a href="#">Digital Cameras</a></li>
                                                <li><a href="#">Film Photography</a></li>
                                                <li><a href="#">Lighting &amp; Studio</a></li>
                                            </ul>
                                        </li>
                                        <li className="cat-item has-children mega-menu"><a href="#">Biographies</a>
                                            <ul className="sub-menu">
                                                <li className="single-block">
                                                    <h3 className="title">WHEEL SIMULATORS</h3>
                                                    <ul>
                                                        <li><a href="#">Bags &amp; Cases</a></li>
                                                        <li><a href="#">Binoculars &amp; Scopes</a></li>
                                                        <li><a href="#">Digital Cameras</a></li>
                                                        <li><a href="#">Film Photography</a></li>
                                                        <li><a href="#">Lighting &amp; Studio</a></li>
                                                    </ul>
                                                </li>
                                                <li className="single-block">
                                                    <h3 className="title">WHEEL SIMULATORS</h3>
                                                    <ul>
                                                        <li><a href="#">Bags &amp; Cases</a></li>
                                                        <li><a href="#">Binoculars &amp; Scopes</a></li>
                                                        <li><a href="#">Digital Cameras</a></li>
                                                        <li><a href="#">Film Photography</a></li>
                                                        <li><a href="#">Lighting &amp; Studio</a></li>
                                                    </ul>
                                                </li>
                                                <li className="single-block">
                                                    <h3 className="title">WHEEL SIMULATORS</h3>
                                                    <ul>
                                                        <li><a href="#">Bags &amp; Cases</a></li>
                                                        <li><a href="#">Binoculars &amp; Scopes</a></li>
                                                        <li><a href="#">Digital Cameras</a></li>
                                                        <li><a href="#">Film Photography</a></li>
                                                        <li><a href="#">Lighting &amp; Studio</a></li>
                                                    </ul>
                                                </li>
                                                <li className="single-block">
                                                    <h3 className="title">WHEEL SIMULATORS</h3>
                                                    <ul>
                                                        <li><a href="#">Bags &amp; Cases</a></li>
                                                        <li><a href="#">Binoculars &amp; Scopes</a></li>
                                                        <li><a href="#">Digital Cameras</a></li>
                                                        <li><a href="#">Film Photography</a></li>
                                                        <li><a href="#">Lighting &amp; Studio</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="cat-item has-children"><a href="#">Business &amp; Money</a>
                                            <ul className="sub-menu">
                                                <li><a href="#">Brake Tools</a></li>
                                                <li><a href="#">Driveshafts</a></li>
                                                <li><a href="#">Emergency Brake</a></li>
                                                <li><a href="#">Spools</a></li>
                                            </ul>
                                        </li>
                                        <li className="cat-item has-children"><a href="#">Calendars</a>
                                            <ul className="sub-menu">
                                                <li><a href="#">Brake Tools</a></li>
                                                <li><a href="#">Driveshafts</a></li>
                                                <li><a href="#">Emergency Brake</a></li>
                                                <li><a href="#">Spools</a></li>
                                            </ul>
                                        </li>
                                        <li className="cat-item has-children"><a href="#">Children's Books</a>
                                            <ul className="sub-menu">
                                                <li><a href="#">Brake Tools</a></li>
                                                <li><a href="#">Driveshafts</a></li>
                                                <li><a href="#">Emergency Brake</a></li>
                                                <li><a href="#">Spools</a></li>
                                            </ul>
                                        </li>
                                        <li className="cat-item has-children"><a href="#">Comics</a>
                                            <ul className="sub-menu">
                                                <li><a href="#">Brake Tools</a></li>
                                                <li><a href="#">Driveshafts</a></li>
                                                <li><a href="#">Emergency Brake</a></li>
                                                <li><a href="#">Spools</a></li>
                                            </ul>
                                        </li>
                                        <li className="cat-item"><a href="#">Perfomance Filters</a></li>
                                        <li className="cat-item has-children"><a href="#">Cookbooks</a>
                                            <ul className="sub-menu">
                                                <li><a href="#">Brake Tools</a></li>
                                                <li><a href="#">Driveshafts</a></li>
                                                <li><a href="#">Emergency Brake</a></li>
                                                <li><a href="#">Spools</a></li>
                                            </ul>
                                        </li>
                                        <li className="cat-item hidden-menu-item"><a href="#">Accessories</a></li>
                                        <li className="cat-item hidden-menu-item"><a href="#">Education</a></li>
                                        <li className="cat-item hidden-menu-item"><a href="#">Indoor Living</a></li>
                                        <li className="cat-item"><a href="#" className="js-expand-hidden-menu">More
                                            Categories</a></li>
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
                                        <a href="">Home</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="">shop </a>
                                    </li>
                                    <li className="menu-item has-children">
                                        <a href="">Pages <i className="fas fa-chevron-down dropdown-arrow" /></a>
                                        <ul className="sub-menu">
                                            <li><a href="cart.html">Cart</a></li>
                                            <li><a href="checkout.html">Checkout</a></li>
                                            <li><a href="wishlist.html">Wishlist</a></li>
                                            <li><a href="login-register.html">Login Register</a></li>
                                            <li><a href="my-account.html">My Account</a></li>
                                            <li><a href="order-complete.html">Order Complete</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item">
                                        <Link to={"/blogs"}>Blog</Link>
                                    </li>
                                    <li className="menu-item">
                                        <a href="contact.html">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
