import React, { Component } from 'react'
import BlogCard from '../../BlogCard'

export default class BlogCards extends Component {
    render() {
        return (
            <div className="single-block">
                <div className="blog-slider sb-slick-slider slider-one-column" data-slick-setting="{
                  &quot;autoplay&quot;: false,
                  &quot;autoplaySpeed&quot;: 8000,
                  &quot;slidesToShow&quot;: 1,
                  &quot;dots&quot;: true
              }">

                    {[1, 2, 3].map((card, index) => {
                        return <BlogCard />
                    })}
                </div>
            </div>
        )
    }
}
