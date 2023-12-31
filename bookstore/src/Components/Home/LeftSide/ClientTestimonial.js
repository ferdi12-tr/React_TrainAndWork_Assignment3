import React, { Component } from 'react'

export default class ClientTestimonial extends Component {
    render() {
        return (
            <div className="single-block">
                <h3 className="home-sidebar-title">
                    CLIENT TESTIMONIALS
                </h3>
                <div className="sb-slick-slider testimonial-slider slider-one-column" data-slick-setting="{
          &quot;autoplay&quot;: true,
          &quot;autoplaySpeed&quot;: 8000,
          &quot;slidesToShow&quot;:1,
          &quot;dots&quot;:true
      }" data-slick-responsive="[
          {&quot;breakpoint&quot;:1200, &quot;settings&quot;: {&quot;slidesToShow&quot;: 1} },
          {&quot;breakpoint&quot;:992, &quot;settings&quot;: {&quot;slidesToShow&quot;: 2} },
          {&quot;breakpoint&quot;:768, &quot;settings&quot;: {&quot;slidesToShow&quot;: 2} },
          {&quot;breakpoint&quot;:575, &quot;settings&quot;: {&quot;slidesToShow&quot;: 1} },
          {&quot;breakpoint&quot;:490, &quot;settings&quot;: {&quot;slidesToShow&quot;: 1} }
      ]">
                    <div className="single-slide">
                        <div className="testimonial-card">
                            <div className="testimonial-image">
                                <img src="./image/others/client-1.png" alt="" />
                            </div>
                            <div className="testimonial-body">
                                <article>
                                    <h2 className="sr-only">Testimonial Article</h2>
                                    <p>version This is Photoshops of Lorem Ipsum. Proin gravida nibh vel
                                        velit.Lorem ipsum dolor
                                        sit amet, consectetur
                                        adipiscing elit. In molestie augue magna. Pell..</p>
                                    <span className="d-block client-name">Rebecka Filson</span>
                                </article>
                            </div>
                        </div>
                    </div>
                    <div className="single-slide">
                        <div className="testimonial-card">
                            <div className="testimonial-image">
                                <img src="./image/others/client-2.png" alt="" />
                            </div>
                            <div className="testimonial-body">
                                <article>
                                    <h2 className="sr-only">Testimonial Article</h2>
                                    <p>In molestie augue magna.This is Photoshops version of Lorem
                                        Ipsum. Proin gravida nibh vel
                                        velit.Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Pell..</p>
                                    <span className="d-block client-name">Rebecka Filson</span>
                                </article>
                            </div>
                        </div>
                    </div>
                    <div className="single-slide">
                        <div className="testimonial-card">
                            <div className="testimonial-image">
                                <img src="./image/others/client-3.png" alt="" />
                            </div>
                            <div className="testimonial-body">
                                <article>
                                    <h2 className="sr-only">Testimonial Article</h2>
                                    <p>Lorem Ipsum This is Photoshops version of . Proin gravida nibh
                                        vel velit.Lorem ipsum
                                        dolor sit amet, consectetur
                                        adipiscing elit. In molestie augue magna. Pell..</p>
                                    <span className="d-block client-name">Rebecka Filson</span>
                                </article>
                            </div>
                        </div>
                    </div>
                    <div className="single-slide">
                        <div className="testimonial-card">
                            <div className="testimonial-image">
                                <img src="./image/others/client-4.png" alt="" />
                            </div>
                            <div className="testimonial-body">
                                <article>
                                    <h2 className="sr-only">Testimonial Article</h2>
                                    <p>elit. In molestie This is Photoshops version of Lorem Ipsum.
                                        Proin gravida nibh vel
                                        velit.Lorem ipsum dolor sit amet, consectetur
                                        adipiscing augue magna. Pell..</p>
                                    <span className="d-block client-name">Rebecka Filson</span>
                                </article>
                            </div>
                        </div>
                    </div>
                    <div className="single-slide">
                        <div className="testimonial-card">
                            <div className="testimonial-image">
                                <img src="./image/others/client-5.png" alt="" />
                            </div>
                            <div className="testimonial-body">
                                <article>
                                    <h2 className="sr-only">Testimonial Article</h2>
                                    <p>Pell Photoshops version of Lorem Ipsum. Proin gravida nibh vel
                                        velit.Lorem ipsum dolor
                                        sit amet, consectetur
                                        adipiscing elit. In molestie augue magna. This is..</p>
                                    <span className="d-block client-name">Rebecka Filson</span>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
