import React, { Component } from 'react'

export default class SpecialOffer extends Component {
    render() {
        return (
            <div className="single-block text-center">
                <h3 className="home-sidebar-title style-2">
                    Special offer
                </h3>
                <div className="product-slider countdown-single with-countdown sb-slick-slider product-border-reset" data-slick-setting="{
                                          &quot;autoplay&quot;: true,
                                          &quot;autoplaySpeed&quot;: 8000,
                                          &quot;slidesToShow&quot;: 1,
                                          &quot;dots&quot;:true
                                      }" data-slick-responsive="[
                                      {&quot;breakpoint&quot;:1200, &quot;settings&quot;: {&quot;slidesToShow&quot;: 1} },
                                      {&quot;breakpoint&quot;:992, &quot;settings&quot;: {&quot;slidesToShow&quot;: 2} },
                                      {&quot;breakpoint&quot;:768, &quot;settings&quot;: {&quot;slidesToShow&quot;: 2} },
                                      {&quot;breakpoint&quot;:575, &quot;settings&quot;: {&quot;slidesToShow&quot;: 1} },
                                      {&quot;breakpoint&quot;:490, &quot;settings&quot;: {&quot;slidesToShow&quot;: 1} }
                                  ]">
                    <div className="single-slide">
                        <div className="product-card">
                            <div className="product-header">
                                <a href="#" className="author">
                                    Ypple
                                </a>
                                <h3><a href="product-details.html">BOOK: Do You Really Need It? This
                                    Will Help You</a></h3>
                            </div>
                            <div className="product-card--body">
                                <div className="card-image">
                                    <img src="./image/products/product-2.jpg" alt="" />
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
                                <div className="count-down-block">
                                    <div className="product-countdown" data-countdown="01/05/2020" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="single-slide">
                        <div className="product-card">
                            <div className="product-header">
                                <a href="#" className="author">
                                    Upple
                                </a>
                                <h3><a href="product-details.html">Here Is A Quick Cure For BOOK
                                    This Will Help</a></h3>
                            </div>
                            <div className="product-card--body">
                                <div className="card-image">
                                    <img src="./image/products/product-2.jpg" alt="" />
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
                                <div className="count-down-block">
                                    <div className="product-countdown" data-countdown="01/05/2020" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="single-slide">
                        <div className="product-card">
                            <div className="product-header">
                                <a href="#" className="author">
                                    Ypple
                                </a>
                                <h3><a href="product-details.html">Simple Things
                                    You Can Do Save BOOK save money</a>
                                </h3>
                            </div>
                            <div className="product-card--body">
                                <div className="card-image">
                                    <img src="./image/products/product-3.jpg" alt="" />
                                    <div className="hover-contents">
                                        <a href="product-details.html" className="hover-image">
                                            <img src="./image/products/product-2.jpg" alt="" />
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
                                <div className="count-down-block">
                                    <div className="product-countdown" data-countdown="01/05/2020" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="single-slide">
                        <div className="product-card">
                            <div className="product-header">
                                <a href="#" className="author">
                                    Epple
                                </a>
                                <h3><a href="product-details.html">What You Can Learn From Bill
                                    Gates reading a book</a></h3>
                            </div>
                            <div className="product-card--body">
                                <div className="card-image">
                                    <img src="./image/products/product-5.jpg" alt="" />
                                    <div className="hover-contents">
                                        <a href="product-details.html" className="hover-image">
                                            <img src="./image/products/product-4.jpg" alt="" />
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
                                <div className="count-down-block">
                                    <div className="product-countdown" data-countdown="01/05/2020" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="single-slide">
                        <div className="product-card">
                            <div className="product-header">
                                <a href="#" className="author">
                                    Rpple
                                </a>
                                <h3><a href="product-details.html">3 Ways Create Better BOOK With
                                    The Help Of Your Dog</a>
                                </h3>
                            </div>
                            <div className="product-card--body">
                                <div className="card-image">
                                    <img src="./image/products/product-6.jpg" alt="" />
                                    <div className="hover-contents">
                                        <a href="product-details.html" className="hover-image">
                                            <img src="./image/products/product-4.jpg" alt="" />
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
                                <div className="count-down-block">
                                    <div className="product-countdown" data-countdown="01/05/2020" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="single-slide">
                        <div className="product-card">
                            <div className="product-header">
                                <a href="#" className="author">
                                    Tpple
                                </a>
                                <h3><a href="product-details.html">Turn Your BOOK Into A High
                                    Performing Machine</a></h3>
                            </div>
                            <div className="product-card--body">
                                <div className="card-image">
                                    <img src="./image/products/product-8.jpg" alt="" />
                                    <div className="hover-contents">
                                        <a href="product-details.html" className="hover-image">
                                            <img src="./image/products/product-7.jpg" alt="" />
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
                                <div className="count-down-block">
                                    <div className="product-countdown" data-countdown="01/05/2020" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
