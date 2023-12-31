import React, { Component } from 'react'
import BestSells from './LeftSide/BestSells'
import SpecialOffer from './LeftSide/SpecialOffer'
import ClientTestimonial from './LeftSide/ClientTestimonial'
import Product from '../Product'
import NewFeatured from './RightSide/NewFeatured'
import CategoryProduct from '../CategoryProduct'
import CategoryProducts from './RightSide/CategoryProducts'
import BlogCard from '../BlogCard'
import BlogCards from './RightSide/BlogCards'

export default class Promotion extends Component {
    render() {
        return (
            <section className="section-margin">
                <h1 className="sr-only">Promotion Section</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="home-left-side text-center text-lg-left">
                                <BestSells />
                                <div className="single-block text-center">
                                    <a href="#" className="promo-image home-sidebar-promo promo-overlay">
                                        <img src="./image/others/home-side-promo.jpg" alt="" />
                                    </a>
                                </div>
                                <SpecialOffer />
                                <ClientTestimonial />
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="home-right-side">
                                <NewFeatured />
                                <div className="single-block">
                                    <div className="row space-db--30">
                                        <div className="col-lg-8 mb--30">
                                            <a href="#" className="promo-image promo-overlay">
                                                <img src="./image/bg-images/promo-banner-with-text-big.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div className="col-lg-4 mb--30">
                                            <a href="#" className="promo-image promo-overlay">
                                                <img src="./image/bg-images/promo-banner-with-text-2--small.jpg" alt="" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <CategoryProducts />
                                <BlogCards />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}
