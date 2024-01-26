import React, { useEffect, useState } from 'react'
import LookModal from '../Components/LookModal'
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../Redux/cartSlice';

export default function ProductDetail() {
    const { slug } = useParams();

    const dispatch = useDispatch()

    const [product, setProduct] = useState(null)
    const [quatity, setQuantity] = useState(1)

    const products = useSelector(state => state.products.products)
    useEffect(() => {
        let product = products.find(product => product.slug === slug)
        setProduct(product)
    }, [slug])

    const addToCartBtn = (product) => {
        let cartObject = {
            image: product.image,
            productId: product.productId,
            productName: product.name,
            price: product.price,
            quantity: quatity,
        }
        console.log(cartObject)
        dispatch(addToCart(cartObject))
    }

    return (
        <>{product &&
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
                                <div className="product-details-slider sb-slick-slider arrow-type-two">
                                    <div className="single-slide">
                                        <img src={"/image/products/" + product.image} alt="" />
                                    </div>

                                </div>

                            </div>
                            <div className="col-lg-7">
                                <div className="product-details-info pl-lg--30 ">
                                    <h3 className="product-title">{product.name}</h3>

                                    <div className="price-block">
                                        <span className="price-new">£{product.price}</span>
                                        <del className="price-old">£{product.price + 10}</del>
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
                                            <input onChange={(e) => setQuantity(e.target.value)} type="number" className="form-control text-center" defaultValue={1} />
                                        </div>
                                        <div className="add-cart-btn">
                                            <button onClick={() => addToCartBtn(product)} className="btn btn-outlined--primary">
                                                <span className="plus-icon">+</span>
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                    <div className="compare-wishlist-row">
                                        <a href="#" className="add-link"><i className="fas fa-heart" />Add to Wish List</a>
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
                                        <p>{product.description}</p>
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
                                            <form action="" className="mt--15 site-form ">
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
                    <LookModal />
                </main>
            </div>
        }
        </>
    )
}
