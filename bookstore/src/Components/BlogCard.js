import React, { Component } from 'react'

export default class BlogCard extends Component {
    render() {
        return (
            <div className="col-lg-4 col-md-6 mb-lg--60 mb--30">
                <div className="blog-card card-style-grid">
                    <a href="blog-details.html" className="image d-block">
                        <img src="./image/others/blog-grid-1.jpg" alt="" />
                    </a>
                    <div className="card-content">
                        <h3 className="title"><a href="blog-details.html">Use BLOG TITLE To Make Someone Fall In Love</a></h3>
                        <p className="post-meta"><span>13/08/2017 </span> | <a href="#">Hastech</a></p>
                        <article>
                            <h2 className="sr-only">
                                Blog Article
                            </h2>
                            <p>Maria Denardo is the Fashion Director theFashion Spot at. Prior to joining tFS, she worked as...
                            </p>
                            <a href="blog-details.html" className="blog-link">Read More</a>
                        </article>
                    </div>
                </div>
            </div>
        )
    }
}
