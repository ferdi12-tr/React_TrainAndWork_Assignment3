import React from 'react'
import LookModal from '../Components/LookModal'
import Product from '../Components/Product'

export default function ProductDetail() {
    return (
        <>
            <div>
                <section className="breadcrumb-section">
                    <h2 className="sr-only">Site Breadcrumb</h2>
                    <div className="container">
                        <div className="breadcrumb-contents">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                    <li className="breadcrumb-item active">Product Details</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </section>
                <main className="inner-page-sec-padding-bottom">
                    <div className="container">
                        <div className="row  mb--60">
                            <div className="col-lg-5 mb--30">
                                <div className="product-details-slider sb-slick-slider arrow-type-two" data-slick-setting="{
        &quot;slidesToShow&quot;: 1,
        &quot;arrows&quot;: false,
        &quot;fade&quot;: true,
        &quot;draggable&quot;: false,
        &quot;swipe&quot;: false,
        &quot;asNavFor&quot;: &quot;.product-slider-nav&quot;
        }">
                                    <div className="single-slide">
                                        <img src="./image/products/product-details-1.jpg" alt="" />
                                    </div>
                                    <div className="single-slide">
                                        <img src="./image/products/product-details-2.jpg" alt="" />
                                    </div>
                                    <div className="single-slide">
                                        <img src="./image/products/product-details-3.jpg" alt="" />
                                    </div>
                                    <div className="single-slide">
                                        <img src="./image/products/product-details-4.jpg" alt="" />
                                    </div>
                                    <div className="single-slide">
                                        <img src="./image/products/product-details-5.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="mt--30 product-slider-nav sb-slick-slider arrow-type-two" data-slick-setting="{
      &quot;infinite&quot;:true,
        &quot;autoplay&quot;: true,
        &quot;autoplaySpeed&quot;: 8000,
        &quot;slidesToShow&quot;: 4,
        &quot;arrows&quot;: true,
        &quot;prevArrow&quot;:{&quot;buttonClass&quot;: &quot;slick-prev&quot;,&quot;iconClass&quot;:&quot;fa fa-chevron-left&quot;},
        &quot;nextArrow&quot;:{&quot;buttonClass&quot;: &quot;slick-next&quot;,&quot;iconClass&quot;:&quot;fa fa-chevron-right&quot;},
        &quot;asNavFor&quot;: &quot;.product-details-slider&quot;,
        &quot;focusOnSelect&quot;: true
        }">
                                    <div className="single-slide">
                                        <img src="./image/products/product-details-1.jpg" alt="" />
                                    </div>
                                    <div className="single-slide">
                                        <img src="./image/products/product-details-2.jpg" alt="" />
                                    </div>
                                    <div className="single-slide">
                                        <img src="./image/products/product-details-3.jpg" alt="" />
                                    </div>
                                    <div className="single-slide">
                                        <img src="./image/products/product-details-4.jpg" alt="" />
                                    </div>
                                    <div className="single-slide">
                                        <img src="./image/products/product-details-5.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="product-details-info pl-lg--30 ">
                                    <p className="tag-block">Tags: <a href="#">Movado</a>, <a href="#">Omega</a></p>
                                    <h3 className="product-title">Beats EP Wired On-Ear Headphone-Black</h3>
                                    <ul className="list-unstyled">
                                        <li>Ex Tax: <span className="list-value"> £60.24</span></li>
                                        <li>Brands: <a href="#" className="list-value font-weight-bold"> Canon</a></li>
                                        <li>Product Code: <span className="list-value"> model1</span></li>
                                        <li>Reward Points: <span className="list-value"> 200</span></li>
                                        <li>Availability: <span className="list-value"> In Stock</span></li>
                                    </ul>
                                    <div className="price-block">
                                        <span className="price-new">£73.79</span>
                                        <del className="price-old">£91.86</del>
                                    </div>
                                    <div className="rating-widget">
                                        <div className="rating-block">
                                            <span className="fas fa-star star_on" />
                                            <span className="fas fa-star star_on" />
                                            <span className="fas fa-star star_on" />
                                            <span className="fas fa-star star_on" />
                                            <span className="fas fa-star " />
                                        </div>
                                        <div className="review-widget">
                                            <a href="#">(1 Reviews)</a> <span>|</span>
                                            <a href="#">Write a review</a>
                                        </div>
                                    </div>
                                    <article className="product-details-article">
                                        <h4 className="sr-only">Product Summery</h4>
                                        <p>Long printed dress with thin adjustable straps. V-neckline and wiring under the Dust
                                            with ruffles at the bottom of the
                                            dress.</p>
                                    </article>
                                    <div className="add-to-cart-row">
                                        <div className="count-input-block">
                                            <span className="widget-label">Qty</span>
                                            <input type="number" className="form-control text-center" defaultValue={1} />
                                        </div>
                                        <div className="add-cart-btn">
                                            <a href="#" className="btn btn-outlined--primary"><span className="plus-icon">+</span>Add to
                                                Cart</a>
                                        </div>
                                    </div>
                                    <div className="compare-wishlist-row">
                                        <a href="#" className="add-link"><i className="fas fa-heart" />Add to Wish List</a>
                                        <a href="#" className="add-link"><i className="fas fa-random" />Add to Compare</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sb-custom-tab review-tab section-padding">
                            <ul className="nav nav-tabs nav-style-2" id="myTab2" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="tab1" data-bs-toggle="tab" href="#tab-1" role="tab" aria-controls="tab-1" aria-selected="true">
                                        DESCRIPTION
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="tab2" data-bs-toggle="tab" href="#tab-2" role="tab" aria-controls="tab-2" aria-selected="true">
                                        REVIEWS (1)
                                    </a>
                                </li>
                            </ul>
                            <div className="tab-content space-db--20" id="myTabContent">
                                <div className="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="tab1">
                                    <article className="review-article">
                                        <h1 className="sr-only">Tab Article</h1>
                                        <p>Fashion has been creating well-designed collections since 2010. The brand offers
                                            feminine designs delivering
                                            stylish
                                            separates and statement dresses which have since evolved into a full ready-to-wear
                                            collection in which every
                                            item is
                                            a
                                            vital part of a woman's wardrobe. The result? Cool, easy, chic looks with youthful
                                            elegance and unmistakable
                                            signature
                                            style. All the beautiful pieces are made in Italy and manufactured with the greatest
                                            attention. Now Fashion
                                            extends
                                            to
                                            a range of accessories including shoes, hats, belts and more!</p>
                                    </article>
                                </div>
                                <div className="tab-pane fade" id="tab-2" role="tabpanel" aria-labelledby="tab2">
                                    <div className="review-wrapper">
                                        <h2 className="title-lg mb--20">1 REVIEW FOR AUCTOR GRAVIDA ENIM</h2>
                                        <div className="review-comment mb--20">
                                            <div className="avatar">
                                                <img src="./image/icon/author-logo.png" alt="" />
                                            </div>
                                            <div className="text">
                                                <div className="rating-block mb--15">
                                                    <span className="ion-android-star-outline star_on" />
                                                    <span className="ion-android-star-outline star_on" />
                                                    <span className="ion-android-star-outline star_on" />
                                                    <span className="ion-android-star-outline" />
                                                    <span className="ion-android-star-outline" />
                                                </div>
                                                <h6 className="author">ADMIN – <span className="font-weight-400">March 23, 2015</span>
                                                </h6>
                                                <p>Lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio
                                                    quis mi.</p>
                                            </div>
                                        </div>
                                        <h2 className="title-lg mb--20 pt--15">ADD A REVIEW</h2>
                                        <div className="rating-row pt-2">
                                            <p className="d-block">Your Rating</p>
                                            <span className="rating-widget-block">
                                                <input type="radio" name="star" id="star1" />
                                                <label htmlFor="star1" />
                                                <input type="radio" name="star" id="star2" />
                                                <label htmlFor="star2" />
                                                <input type="radio" name="star" id="star3" />
                                                <label htmlFor="star3" />
                                                <input type="radio" name="star" id="star4" />
                                                <label htmlFor="star4" />
                                                <input type="radio" name="star" id="star5" />
                                                <label htmlFor="star5" />
                                            </span>
                                            <form action="https://htmldemo.net/pustok/pustok/" className="mt--15 site-form ">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="form-group">
                                                            <label htmlFor="message">Comment</label>
                                                            <textarea name="message" id="message" cols={30} rows={10} className="form-control" defaultValue={""} />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <div className="form-group">
                                                            <label htmlFor="name">Name *</label>
                                                            <input type="text" id="name" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <div className="form-group">
                                                            <label htmlFor="email">Email *</label>
                                                            <input type="text" id="email" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <div className="form-group">
                                                            <label htmlFor="website">Website</label>
                                                            <input type="text" id="website" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <div className="submit-btn">
                                                            <a href="#" className="btn btn-black">Post Comment</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className>
                        <div className="container">
                            <div className="section-title section-title--bordered">
                                <h2>RELATED PRODUCTS</h2>
                            </div>
                            <div className="product-slider sb-slick-slider slider-border-single-row" data-slick-setting="{
          &quot;autoplay&quot;: true,
          &quot;autoplaySpeed&quot;: 8000,
          &quot;slidesToShow&quot;: 4,
          &quot;dots&quot;:true
      }" data-slick-responsive="[
          {&quot;breakpoint&quot;:1200, &quot;settings&quot;: {&quot;slidesToShow&quot;: 4} },
          {&quot;breakpoint&quot;:992, &quot;settings&quot;: {&quot;slidesToShow&quot;: 3} },
          {&quot;breakpoint&quot;:768, &quot;settings&quot;: {&quot;slidesToShow&quot;: 2} },
          {&quot;breakpoint&quot;:480, &quot;settings&quot;: {&quot;slidesToShow&quot;: 1} }
      ]">
                                {[1, 2, 3, 4, 5].map((product, index) => {
                                    return <Product />
                                })}
                            </div>
                        </div>
                    </section>
                    <LookModal />
                </main>
            </div>

        </>
    )
}
