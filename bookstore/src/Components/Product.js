import React, { Component } from 'react'

export default class Product extends Component {
    render() {
        return (
            <div className="single-slide">
                <div className="product-card">
                    <div className="product-header">
                        <a href="#" className="author">
                            jpple
                        </a>
                        <h3><a href="product-details.html">Rpple iPad with
                            Retina Display</a></h3>
                    </div>
                    <div className="product-card--body">
                        <div className="card-image">
                            <img src="./image/products/product-1.jpg" alt="" />
                            <div className="hover-contents">
                                <a href="product-details.html" className="hover-image">
                                    <img src="./image/products/product-1.jpg" alt="" />
                                </a>
                                <div className="hover-btns">
                                    <a href="cart.html" className="single-btn">
                                        <i className="fas fa-shopping-basket" />
                                    </a>
                                    <a href="wishlist.html" className="single-btn">
                                        <i className="fas fa-heart" />
                                    </a>
                                    <a href="compare.html" className="single-btn">
                                        <i className="fas fa-random" />
                                    </a>
                                    <a href="#" data-bs-toggle="modal" data-bs-target="#quickModal" className="single-btn">
                                        <i className="fas fa-eye" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="price-block">
                            <span className="price">£51.20</span>
                            <del className="price-old">£51.20</del>
                            <span className="price-discount">20%</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
