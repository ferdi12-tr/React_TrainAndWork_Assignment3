import React, { Component } from 'react'
import CategoryProduct from '../../CategoryProduct'

export default class CategoryProducts extends Component {
    render() {
        return (
            <div className="single-block">
                <div className="home-right-block bg-white">
                    <div className="sb-custom-tab text-lg-left text-center">
                        <ul className="nav nav-tabs nav-style-2" id="myTab2" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="shop-tab2" data-bs-toggle="tab" href="#shop2" role="tab" aria-controls="shop2" aria-selected="true">
                                    ARTS &amp; PHOTOGRAPHY
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="men-tab2" data-bs-toggle="tab" href="#men2" role="tab" aria-controls="men2" aria-selected="true">
                                    CHILDREN'S BOOKS
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="woman-tab2" data-bs-toggle="tab" href="#woman2" role="tab" aria-controls="woman2" aria-selected="false">
                                    BIOGRAPHIES
                                </a>
                            </li>
                        </ul>
                        <div className="tab-content" id="myTabContent2">
                            <div className="tab-pane show active" id="shop2" role="tabpanel" aria-labelledby="shop-tab2">
                                <div className="product-slider product-list-slider multiple-row slider-border-multiple-row  sb-slick-slider" data-slick-setting="{
                                                  &quot;autoplay&quot;: true,
                                                  &quot;autoplaySpeed&quot;: 8000,
                                                  &quot;slidesToShow&quot;: 2,
                                                  &quot;rows&quot;:4,
                                                  &quot;dots&quot;:true
                                              }" data-slick-responsive="[
                                                  {&quot;breakpoint&quot;:992, &quot;settings&quot;: {&quot;slidesToShow&quot;: 2,&quot;rows&quot;: 3} },
              
                                                  {&quot;breakpoint&quot;:768, &quot;settings&quot;: {&quot;slidesToShow&quot;: 1} }
                                              ]">
                                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((product, index) => {
                                        return <CategoryProduct />
                                    })}
                                </div>
                            </div>
                            <div className="tab-pane" id="men2" role="tabpanel" aria-labelledby="men-tab2">
                                <div className="product-slider product-list-slider multiple-row slider-border-multiple-row  sb-slick-slider" data-slick-setting="{
                                                  &quot;autoplay&quot;: true,
                                                  &quot;autoplaySpeed&quot;: 8000,
                                                  &quot;slidesToShow&quot;: 2,
                                                  &quot;rows&quot;:4,
                                                  &quot;dots&quot;:true
                                              }" data-slick-responsive="[
                                                  {&quot;breakpoint&quot;:992, &quot;settings&quot;: {&quot;slidesToShow&quot;: 2,&quot;rows&quot;: 3} },
              
                                                  {&quot;breakpoint&quot;:768, &quot;settings&quot;: {&quot;slidesToShow&quot;: 1} }
                                              ]">
                                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((product, index) => {
                                        return <CategoryProduct />
                                    })}
                                </div>
                            </div>
                            <div className="tab-pane" id="woman2" role="tabpanel" aria-labelledby="woman-tab2">
                                <div className="product-slider product-list-slider multiple-row slider-border-multiple-row  sb-slick-slider" data-slick-setting="{
                                                      &quot;autoplay&quot;: true,
                                                      &quot;autoplaySpeed&quot;: 8000,
                                                      &quot;slidesToShow&quot;: 2,
                                                      &quot;rows&quot;:4,
                                                      &quot;dots&quot;:true
                                                  }" data-slick-responsive="[
                                                      {&quot;breakpoint&quot;:992, &quot;settings&quot;: {&quot;slidesToShow&quot;: 2,&quot;rows&quot;: 3} },
                  
                                                      {&quot;breakpoint&quot;:768, &quot;settings&quot;: {&quot;slidesToShow&quot;: 1} }
                                                  ]">
                                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((product, index) => {
                                        return <CategoryProduct />
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
