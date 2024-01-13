import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class CategoryProduct extends Component {
    render() {
        const { product } = this.props
        return (
            <div className="single-slide">
                <div className="product-card card-style-list">
                    <div className="card-image">
                        <img src={"image/products/" + product?.image} alt="" />
                    </div>
                    <div className="product-card--body">
                        <div className="product-header">
                            <a href="" className="author">
                                {product?.authorName}
                            </a>
                            <h3>
                                <Link to={"productDetail/" + product?.slug}>{product?.name}</Link>
                            </h3>
                        </div>
                        <div className="price-block">
                            <span className="price">£{product?.price}</span>
                            <del className="price-old">£{product?.price + 10}</del>
                            <span className="price-discount">20%</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
