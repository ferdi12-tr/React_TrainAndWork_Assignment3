import React, { Component } from 'react'

export default class LoginRegister extends Component {
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
                                        <li className="breadcrumb-item active">Login</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </section>
                    <main className="page-section inner-page-sec-padding-bottom">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12 col-md-12 col-xs-12 col-lg-6 mb--30 mb-lg--0">
                                    <form action="#">
                                        <div className="login-form">
                                            <h4 className="login-title">New Customer</h4>
                                            <p><span className="font-weight-bold">I am a new customer</span></p>
                                            <div className="row">
                                                <div className="col-md-12 col-12 mb--15">
                                                    <label htmlFor="email">Full Name</label>
                                                    <input className="mb-0 form-control" type="text" id="name" placeholder="Enter your full name" />
                                                </div>
                                                <div className="col-12 mb--20">
                                                    <label htmlFor="email">Email</label>
                                                    <input className="mb-0 form-control" type="email" id="email" placeholder="Enter Your Email Address Here.." />
                                                </div>
                                                <div className="col-lg-6 mb--20">
                                                    <label htmlFor="password">Password</label>
                                                    <input className="mb-0 form-control" type="password" id="password" placeholder="Enter your password" />
                                                </div>
                                                <div className="col-lg-6 mb--20">
                                                    <label htmlFor="password">Repeat Password</label>
                                                    <input className="mb-0 form-control" type="password" id="repeat-password" placeholder="Repeat your password" />
                                                </div>
                                                <div className="col-md-12">
                                                    <a href="#" className="btn btn-outlined">Register</a>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="col-sm-12 col-md-12 col-lg-6 col-xs-12">
                                    <form action="">
                                        <div className="login-form">
                                            <h4 className="login-title">Returning Customer</h4>
                                            <p><span className="font-weight-bold">I am a returning customer</span></p>
                                            <div className="row">
                                                <div className="col-md-12 col-12 mb--15">
                                                    <label htmlFor="email">Enter your email address here...</label>
                                                    <input className="mb-0 form-control" type="email" id="email1" placeholder="Enter you email address here..." />
                                                </div>
                                                <div className="col-12 mb--20">
                                                    <label htmlFor="password">Password</label>
                                                    <input className="mb-0 form-control" type="password" id="login-password" placeholder="Enter your password" />
                                                </div>
                                                <div className="col-md-12">
                                                    <a href="#" className="btn btn-outlined">Login</a>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>

            </>
        )
    }
}
