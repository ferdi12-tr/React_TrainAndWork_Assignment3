import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class BlogCardHome extends Component {
    render() {
        const { blogCart } = this.props
        return (
            <div className="single-slide">
                <div className="blog-card">
                    <div className="image">
                        <img src={blogCart.image} alt="" />
                    </div>
                    <div className="content">
                        <div className="content-header">
                            <div className="date-badge">
                                <span className="date">
                                    {blogCart.date.split('-')[2]}
                                </span>
                                <span className="month">
                                    {blogCart.date.split('-')[1]}
                                </span>
                            </div>
                            <h3 className="title"><Link to={"/blogDetail/" + blogCart.slug}>{blogCart.title}</Link></h3>
                        </div>
                        <p className="meta-para"><i className="fas fa-user-edit" />Post by <a href="#">{blogCart.author}</a></p>
                        <article className="blog-paragraph">
                            <h2 className="sr-only">blog-paragraph</h2>
                            <p>{blogCart.long_desc}</p>
                        </article>
                        <Link to={"/blogDetail/" + blogCart.slug} className="card-link">Read More <i className="fas fa-chevron-circle-right" /></Link>
                    </div>
                </div>
            </div>
        )
    }
}
