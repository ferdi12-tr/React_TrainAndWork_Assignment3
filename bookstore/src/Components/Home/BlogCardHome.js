import React, { Component } from 'react'

export default class BlogCard extends Component {
    render() {
        return (
            <div className="single-slide">
                <div className="blog-card">
                    <div className="image">
                        <img src="./image/others/home-blog-1.jpg" alt="" />
                    </div>
                    <div className="content">
                        <div className="content-header">
                            <div className="date-badge">
                                <span className="date">
                                    30
                                </span>
                                <span className="month">
                                    OCT
                                </span>
                            </div>
                            <h3 className="title"><a href="blog-details.html">How to Water and Care
                                for Mounted</a></h3>
                        </div>
                        <p className="meta-para"><i className="fas fa-user-edit" />Post by <a href="#">Hastech</a></p>
                        <article className="blog-paragraph">
                            <h2 className="sr-only">blog-paragraph</h2>
                            <p>Virtual reality and 3-D technology are already well-established
                                in the entertainment...</p>
                        </article>
                        <a href="blog-details.html" className="card-link">Read More <i className="fas fa-chevron-circle-right" /></a>
                    </div>
                </div>
            </div>
        )
    }
}
