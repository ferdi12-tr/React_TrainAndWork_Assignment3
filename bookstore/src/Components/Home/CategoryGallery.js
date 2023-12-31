import React, { Component } from 'react'

export default class CategoryGallery extends Component {
    render() {
        return (
            <section className="section-margin">
                <h2 className="sr-only">Category Gallery Section</h2>
                <div className="container">
                    <div className="category-gallery-block">
                        <a href="#" className="single-block hr-large">
                            <img src="./image/others/cat-gal-large.png" alt="" />
                        </a>
                        <div className="single-block inner-block-wrapper">
                            <a href="#" className="single-image mid-image">
                                <img src="./image/others/cat-gal-mid.png" alt="" />
                            </a>
                            <a href="#" className="single-image small-image">
                                <img src="./image/others/cat-gal-small.png" alt="" />
                            </a>
                            <a href="#" className="single-image small-image">
                                <img src="./image/others/cat-gal-small-2.jpg" alt="" />
                            </a>
                            <a href="#" className="single-image mid-image">
                                <img src="./image/others/cat-gal-mid-2.png" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}
