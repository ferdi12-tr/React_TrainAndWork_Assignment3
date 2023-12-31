import React, { Component } from 'react'

export default class Slider extends Component {
    render() {
        return (
            <section className="hero-area hero-slider-4 ">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 offset-lg-3">
                            <div className="sb-slick-slider" data-slick-setting="{
                                                              &quot;autoplay&quot;: true,
                                                              &quot;autoplaySpeed&quot;: 8000,
                                                              &quot;slidesToShow&quot;: 1,
                                                              &quot;dots&quot;:true
                                                              }">
                                <div className="single-slide bg-image bg-overlay--white" data-bg="image/bg-images/home-4-slider-1.jpg">
                                    <div className="home-content text-left pl--30">
                                        <div className="row">
                                            <div className="col-lg-5">
                                                <span className="title-small">Magazine Cover</span>
                                                <h1>Mockup.</h1>
                                                <p>Cover up front of book and
                                                    <br />leave summary</p>
                                                <a href="shop-grid.html" className="btn btn-outlined--pink">
                                                    Shop Now
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-slide bg-image bg-overlay--dark" data-bg="./image/bg-images/home-4-slider-2.jpg">
                                    <div className="home-content text-center">
                                        <div className="row justify-content-end">
                                            <div className="col-lg-8">
                                                <h1 className="v2">I Love This Idea!</h1>
                                                <h2>Cover up front of book and
                                                    leave summary</h2>
                                                <a href="shop-grid.html" className="btn btn--yellow">
                                                    Shop Now
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}
