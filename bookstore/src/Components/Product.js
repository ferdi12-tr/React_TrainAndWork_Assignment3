import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Product extends Component {
    render() {
        const { product } = this.props

        if (!product)
            return

        return (
            <div className="single-slide">
                <div className="product-card">
                    <div className="product-header">
                        <a href="" className="author">
                            {product.authorName}
                        </a>
                        <h3><Link to={"productDetail/" + product.slug}>{product.name}</Link></h3>
                    </div>
                    <div className="product-card--body">
                        <div className="card-image">
                            <img src={"image/products/" + product.image} alt="" />
                            <div className="hover-contents">
                                <Link to={"productDetail/" + product.slug} className="hover-image">
                                    <img src={product.image} alt="" />
                                </Link>
                                <div className="hover-btns">
                                    <a href="#" className="single-btn">
                                        <i className="fas fa-shopping-basket" />
                                    </a>
                                    <a href="#" className="single-btn">
                                        <i className="fas fa-heart" />
                                    </a>
                                    <a href="" data-bs-toggle="modal" data-bs-target="#quickModal" className="single-btn">
                                        <i className="fas fa-eye" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="price-block">
                            <span className="price">£{product.price}</span>
                            <del className="price-old">£{product.price + 10}</del>
                            <span className="price-discount">20%</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
