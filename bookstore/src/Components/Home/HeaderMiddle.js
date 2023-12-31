import React, { Component } from 'react'

export default class HeaderMiddle extends Component {
    render() {
        return (
            <div className="header-middle pt--10 pb--10">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-3">
                            <a href="index.html" className="site-brand">
                                <img src="image/logo.png" alt="" />
                            </a>
                        </div>
                        <div className="col-lg-5">
                            <div className="header-search-block">
                                <input type="text" placeholder="Search entire store here" />
                                <button>Search</button>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="main-navigation flex-lg-right">
                                <div className="cart-widget">
                                    <div className="login-block">
                                        <a href="login-register.html" className="font-weight-bold">Login</a> <br />
                                        <span>or</span><a href="login-register.html">Register</a>
                                    </div>
                                    <div className="cart-block">
                                        <div className="cart-total">
                                            <span className="text-number">
                                                1
                                            </span>
                                            <span className="text-item">
                                                Shopping Cart
                                            </span>
                                            <span className="price">
                                                £0.00
                                                <i className="fas fa-chevron-down" />
                                            </span>
                                        </div>
                                        <div className="cart-dropdown-block">
                                            <div className=" single-cart-block ">
                                                <div className="cart-product">
                                                    <a href="product-details.html" className="image">
                                                        <img src="image/products/cart-product-1.jpg" alt="" />
                                                    </a>
                                                    <div className="content">
                                                        <h3 className="title"><a href="product-details.html">Kodak PIXPRO
                                                            Astro Zoom AZ421 16 MP</a>
                                                        </h3>
                                                        <p className="price"><span className="qty">1 ×</span> £87.34</p>
                                                        <button className="cross-btn"><i className="fas fa-times" /></button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className=" single-cart-block ">
                                                <div className="btn-block">
                                                    <a href="cart.html" className="btn">View Cart <i className="fas fa-chevron-right" /></a>
                                                    <a href="checkout.html" className="btn btn--primary">Check Out <i className="fas fa-chevron-right" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
