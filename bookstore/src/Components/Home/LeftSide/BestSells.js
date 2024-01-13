import React, { Component } from 'react'
import { useSelector } from 'react-redux';
import Product from '../../Product';

export default function BestSells() {

    const products = useSelector(state => state.products.products)


    return (
        <div className="single-block">
            <h3 className="home-sidebar-title">
                BEST SELLERS
            </h3>
            <div className="product-slider product-list-slider multiple-row sb-slick-slider home-4-left-sidebar" >
                {products?.slice(-2).map((product, index) => {
                    return <Product key={index} product={product} />
                })}
            </div>
        </div>
    )
}

