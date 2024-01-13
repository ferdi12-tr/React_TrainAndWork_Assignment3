import React, { Component } from 'react'
import { useSelector } from 'react-redux';
import Product from '../../Product';

export default function SpecialOffer() {

    const products = useSelector(state => state.products.products)

    return (
        <div className="single-block text-center">
            <h3 className="home-sidebar-title style-2">
                Special offer
            </h3>
            <div className="product-slider countdown-single with-countdown sb-slick-slider product-border-reset">
                <div className="single-slide">
                    {products?.slice(0, 2).map((product, index) => {
                        return <Product key={index} product={product} />
                    })}
                </div>
            </div>
        </div>
    )
}



