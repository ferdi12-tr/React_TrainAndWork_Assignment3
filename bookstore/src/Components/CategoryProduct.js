import React, { Component } from 'react'

export default class CategoryProduct extends Component {
    render() {
        return (
            <div className="single-slide">
                <div className="product-card card-style-list">
                    <div className="card-image">
                        <img src="./image/products/product-1.jpg" alt="" />
                    </div>
                    <div className="product-card--body">
                        <div className="product-header">
                            <a href="#" className="author">
                                Fpple
                            </a>
                            <h3><a href="product-details.html">5 Ways To Get
                                Through To Your BOOK</a></h3>
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
