import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import BlogCardHome from '../BlogCardHome';

export default function BlogCards() {
    const blogs = useSelector(state => state.blogs.blogs)
    return (
        blogs && <div className="single-block">
            <div className="blog-slider sb-slick-slider slider-one-column">

                {blogs.slice(0, 3).map((card, index) => {
                    return <BlogCardHome key={index} blogCart={card} />
                })}
            </div>
        </div>
    )
}

