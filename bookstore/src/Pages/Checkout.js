import React, { Component } from 'react'

export default class Checkout extends Component {
    render() {
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
                                        <li className="breadcrumb-item active">Checkout</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </section>
                    <main id="content" className="page-section inner-page-sec-padding-bottom space-db--20">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="checkout-form">
                                        <div className="row row-40">
                                            <div className="col-lg-7 mb--20">
                                                <div id="billing-form" className="mb-40">
                                                    <h4 className="checkout-title">Billing Address</h4>
                                                    <div className="row">
                                                        <div className="col-md-6 col-12 mb--20">
                                                            <label>First Name*</label>
                                                            <input type="text" placeholder="First Name" />
                                                        </div>
                                                        <div className="col-md-6 col-12 mb--20">
                                                            <label>Last Name*</label>
                                                            <input type="text" placeholder="Last Name" />
                                                        </div>
                                                        <div className="col-12 mb--20">
                                                            <label>Company Name</label>
                                                            <input type="text" placeholder="Company Name" />
                                                        </div>
                                                        <div className="col-12 col-12 mb--20">
                                                            <label>Country*</label>
                                                            <select className="nice-select">
                                                                <option>Bangladesh</option>
                                                                <option>China</option>
                                                                <option>country</option>
                                                                <option>India</option>
                                                                <option>Japan</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-md-6 col-12 mb--20">
                                                            <label>Email Address*</label>
                                                            <input type="email" placeholder="Email Address" />
                                                        </div>
                                                        <div className="col-md-6 col-12 mb--20">
                                                            <label>Phone no*</label>
                                                            <input type="text" placeholder="Phone number" />
                                                        </div>
                                                        <div className="col-12 mb--20">
                                                            <label>Address*</label>
                                                            <input type="text" placeholder="Address line 1" />
                                                            <input type="text" placeholder="Address line 2" />
                                                        </div>
                                                        <div className="col-md-6 col-12 mb--20">
                                                            <label>Town/City*</label>
                                                            <input type="text" placeholder="Town/City" />
                                                        </div>
                                                        <div className="col-md-6 col-12 mb--20">
                                                            <label>State*</label>
                                                            <input type="text" placeholder="State" />
                                                        </div>
                                                        <div className="col-md-6 col-12 mb--20">
                                                            <label>Zip Code*</label>
                                                            <input type="text" placeholder="Zip Code" />
                                                        </div>
                                                        <div className="col-12 mb--20 ">
                                                            <div className="block-border check-bx-wrapper">
                                                                <div className="check-box">
                                                                    <input type="checkbox" id="create_account" />
                                                                    <label htmlFor="create_account">Create an Acount?</label>
                                                                </div>
                                                                <div className="check-box">
                                                                    <input type="checkbox" id="shiping_address" data-shipping />
                                                                    <label htmlFor="shiping_address">Ship to Different Address</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="shipping-form" className="mb--40">
                                                    <h4 className="checkout-title">Shipping Address</h4>
                                                    <div className="row">
                                                        <div className="col-md-6 col-12 mb--20">
                                                            <label>First Name*</label>
                                                            <input type="text" placeholder="First Name" />
                                                        </div>
                                                        <div className="col-md-6 col-12 mb--20">
                                                            <label>Last Name*</label>
                                                            <input type="text" placeholder="Last Name" />
                                                        </div>
                                                        <div className="col-md-6 col-12 mb--20">
                                                            <label>Email Address*</label>
                                                            <input type="email" placeholder="Email Address" />
                                                        </div>
                                                        <div className="col-md-6 col-12 mb--20">
                                                            <label>Phone no*</label>
                                                            <input type="text" placeholder="Phone number" />
                                                        </div>
                                                        <div className="col-12 mb--20">
                                                            <label>Company Name</label>
                                                            <input type="text" placeholder="Company Name" />
                                                        </div>
                                                        <div className="col-12 mb--20">
                                                            <label>Address*</label>
                                                            <input type="text" placeholder="Address line 1" />
                                                            <input type="text" placeholder="Address line 2" />
                                                        </div>
                                                        <div className="col-md-6 col-12 mb--20">
                                                            <label>Country*</label>
                                                            <select className="nice-select">
                                                                <option>Bangladesh</option>
                                                                <option>China</option>
                                                                <option>country</option>
                                                                <option>India</option>
                                                                <option>Japan</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-md-6 col-12 mb--20">
                                                            <label>Town/City*</label>
                                                            <input type="text" placeholder="Town/City" />
                                                        </div>
                                                        <div className="col-md-6 col-12 mb--20">
                                                            <label>State*</label>
                                                            <input type="text" placeholder="State" />
                                                        </div>
                                                        <div className="col-md-6 col-12 mb--20">
                                                            <label>Zip Code*</label>
                                                            <input type="text" placeholder="Zip Code" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="order-note-block mt--30">
                                                    <label htmlFor="order-note">Order notes</label>
                                                    <textarea id="order-note" cols={30} rows={10} className="order-note" placeholder="Notes about your order, e.g. special notes for delivery." defaultValue={""} />
                                                </div>
                                            </div>
                                            <div className="col-lg-5">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="checkout-cart-total">
                                                            <h2 className="checkout-title">YOUR ORDER</h2>
                                                            <h4>Product <span>Total</span></h4>
                                                            <ul>
                                                                <li><span className="left">Cillum dolore tortor nisl X 01</span> <span className="right">$25.00</span></li>
                                                                <li><span className="left">Auctor gravida pellentesque X 02 </span><span className="right">$50.00</span></li>
                                                                <li><span className="left">Condimentum posuere consectetur X 01</span>
                                                                    <span className="right">$29.00</span></li>
                                                                <li><span className="left">Habitasse dictumst elementum X 01</span>
                                                                    <span className="right">$10.00</span></li>
                                                            </ul>
                                                            <p>Sub Total <span>$104.00</span></p>
                                                            <p>Shipping Fee <span>$00.00</span></p>
                                                            <h4>Grand Total <span>$104.00</span></h4>
                                                            <div className="method-notice mt--25">
                                                                <article>
                                                                    <h3 className="d-none sr-only">blog-article</h3>
                                                                    Sorry, it seems that there are no available payment methods for
                                                                    your state. Please contact us if you
                                                                    require
                                                                    assistance
                                                                    or wish to make alternate arrangements.
                                                                </article>
                                                            </div>
                                                            <div className="term-block">
                                                                <input type="checkbox" id="accept_terms2" />
                                                                <label htmlFor="accept_terms2">I’ve read and accept the terms &amp;
                                                                    conditions</label>
                                                            </div>
                                                            <button className="place-order w-100">Place order</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </>
        )
    }
}
