import React, { Component } from 'react'

export default class Contact extends Component {
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
                                        <li className="breadcrumb-item active">Contact 02</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </section>
                    <main className="contact_area inner-page-sec-padding-bottom">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="contact_form">
                                        <h3 className="ct_title">Send Us a Message</h3>
                                        <form id="contact-form" action="" method="post" className="contact-form">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="form-group">
                                                        <label>Your Name <span className="required">*</span></label>
                                                        <input type="text" id="con_name" name="con_name" className="form-control" required />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-group">
                                                        <label>Your Email <span className="required">*</span></label>
                                                        <input type="email" id="con_email" name="con_email" className="form-control" required />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-group">
                                                        <label>Your Message</label>
                                                        <textarea id="con_message" name="con_message" className="form-control" defaultValue={""} />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-btn">
                                                        <button type="submit" value="submit" id="submit" className="btn btn-black w-100" name="submit">send</button>
                                                    </div>
                                                    <div className="form__output" />
                                                </div>
                                            </div>
                                        </form>
                                        <div className="form-output">
                                            <p className="form-messege" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div id="google-map" />
                                </div>
                            </div>
                        </div>
                    </main>
                    <div className="contact-bottom-info inner-page-sec-padding-bottom">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 col-sm-6 col-12 mb-30">
                                    <div className="contact-info">
                                        <span className="icon"><i className="fa fa-phone" /></span>
                                        <div className="content">
                                            <h3 className="title">Contact By Phone</h3>
                                            <p>1800.123.4569<br /> 1800.123.7777</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6 col-12 mb-30">
                                    <div className="contact-info">
                                        <span className="icon"><i className="fa fa-envelope" /></span>
                                        <div className="content">
                                            <h3 className="title">Contact By Email</h3>
                                            <p>contact@yoursite.com <br /> info@lawyersattorneys.com</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6 col-12 mb-30">
                                    <div className="contact-info">
                                        <span className="icon"><i className="fa fa-map-marker" /></span>
                                        <div className="content">
                                            <h3 className="title">Come To See Us</h3>
                                            <p>7/135 Saint St. London <br /> 1130/5 Louis III St. New York</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6 col-12 mb-30">
                                    <div className="contact-info">
                                        <span className="icon"><i className="fa fa-users" /></span>
                                        <div className="content">
                                            <h3 className="title">Pustok Social</h3>
                                            <ul className="social-list list-inline">
                                                <li className="single-social facebook"><a href="#"><i className="ion ion-social-facebook" /></a></li>
                                                <li className="single-social twitter"><a href="#"><i className="ion ion-social-twitter" /></a></li>
                                                <li className="single-social google"><a href="#"><i className="ion ion-social-googleplus-outline" /></a></li>
                                                <li className="single-social youtube"><a href="#"><i className="ion ion-social-youtube" /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
