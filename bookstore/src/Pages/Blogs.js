import React, { useEffect } from 'react'
import BlogCard from '../Components/BlogCard'
import { useDispatch } from 'react-redux';
import { fetchBlogs } from '../Redux/blogSlice'
import { useSelector } from 'react-redux';

export default function Blogs() {
    const blogs = useSelector(state => state.blogs.blogs)
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
                        {blogs.map((blog, index) => {
                            return <BlogCard key={index} blog={blog} />
                        })}
                    </div>
                </div>
            </section>
        </>

    )
}
