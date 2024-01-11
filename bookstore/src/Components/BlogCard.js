import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class BlogCard extends Component {
    render() {
        const { blog } = this.props
        return (
            <div className="col-lg-4 col-md-6 mb-lg--60 mb--30">
                <div className="blog-card card-style-grid">
                    <Link to={"/blogDetail/" + blog.slug} className="image d-block">
                        <img src={"/image/blogs/" + blog.image} alt="" />
                    </Link>
                    <div className="card-content">
                        <h3 className="title"><Link to={"/blogDetail/" + blog.slug}>{blog.title}</Link></h3>
                        <p className="post-meta"><span>{blog.date} </span> | <a href="#">{blog.authorUserName}</a></p>
                        <article>
                            <h2 className="sr-only">
                                Blog Article
                            </h2>
                            <p>{blog.long_desc}</p>
                            <Link to={"/blogDetail/" + blog.slug} className="blog-link">Read More</Link>
                        </article>
                    </div>
                </div>
            </div>
        )
    }
}
