import React, { Component } from 'react'
import BlogCard from '../Components/BlogCard'

export default class Blogs extends Component {
    render() {
        return (
            <>
                <section className="breadcrumb-section">
                    <h2 className="sr-only">Site Breadcrumb</h2>
                    <div className="container">
                        <div className="breadcrumb-contents">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                    <li className="breadcrumb-item active">Blog</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </section><section className="inner-page-sec-padding-bottom space-db--30">
                    <div className="container">
                        <div className="row space-db-lg--60 space-db--30">
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((blog, index) => {
                                return <BlogCard />
                            })}
                        </div>
                    </div>
                </section>
            </>

        )
    }
}
