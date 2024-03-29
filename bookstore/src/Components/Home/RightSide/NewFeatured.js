import React, { useState, useEffect } from 'react'
import Product from '../../Product'
import { useSelector } from 'react-redux';


export default function NewFeatured() {
    const [featuredProducts, setFeaturedProducts] = useState([])
    const [newArrivalProducts, setNewArrivalProducts] = useState([])
    const [mostViewProducts, setMostViewProducts] = useState([])

    const products = useSelector(state => state.products.products)

    useEffect(() => {
        if (products.length !== 0) {
            setFeaturedProducts(products.filter(product => product.isNewFeatured))
            setNewArrivalProducts(products.filter(product => product.isNewArrival))
            setMostViewProducts(products.filter(product => product.isMostViewed))
        }
    }, [products])

    return (
        <div className="single-block">
            <div className="sb-custom-tab text-lg-left text-center">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" id="shop-tab" data-bs-toggle="tab" href="#shop" role="tab" aria-controls="shop" aria-selected="true">
                            Featured Products
                        </a>
                        <span className="arrow-icon" />
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="men-tab" data-bs-toggle="tab" href="#men" role="tab" aria-controls="men" aria-selected="true">
                            New Arrivals
                        </a>
                        <span className="arrow-icon" />
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="woman-tab" data-bs-toggle="tab" href="#woman" role="tab" aria-controls="woman" aria-selected="false">
                            Most view products
                        </a>
                        <span className="arrow-icon" />
                    </li>
                </ul>
                <div className="tab-content space-db--30" id="myTabContent">
                    <div className="tab-pane show active" id="shop" role="tabpanel" aria-labelledby="shop-tab">
                        <div className="product-slider multiple-row slider-border-multiple-row  sb-slick-slider">
                            <div className="container">
                                <div className="row">
                                    {featuredProducts && featuredProducts.map((product, index) => {
                                        return <div className="col-4">
                                            <Product key={index} product={product} />
                                        </div>
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane" id="men" role="tabpanel" aria-labelledby="men-tab">
                        <div className="product-slider multiple-row slider-border-multiple-row  sb-slick-slider">
                            <div className="container">
                                <div className="row">
                                    {newArrivalProducts && newArrivalProducts.map((product, index) => {
                                        return <div className="col-4">
                                            <Product key={index} product={product} />
                                        </div>
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane" id="woman" role="tabpanel" aria-labelledby="woman-tab">
                        <div className="product-slider multiple-row slider-border-multiple-row  sb-slick-slider">
                            <div className="container">
                                <div className="row">
                                    {mostViewProducts && mostViewProducts.map((product, index) => {
                                        return <div className="col-4">
                                            <Product key={index} product={product} />
                                        </div>
                                    })}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
