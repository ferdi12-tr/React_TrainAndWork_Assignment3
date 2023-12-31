import React, { Component } from 'react'

export default class HeaderTop extends Component {
    render() {
        return (
            <div className="header-top header-top--style-2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <ul className="header-top-list">
                                <li className="dropdown-trigger currency-dropdown"><a href="#">£ GBP </a><i className="fas fa-chevron-down dropdown-arrow" />
                                    <ul className="dropdown-box">
                                        <li><a href="#">€ Euro</a></li>
                                        <li><a href="#">£ Pound Sterling</a></li>
                                        <li><a href="#">$ US Dollar</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown-trigger language-dropdown"><a href="#"><span className="flag-img"><img src="image/icon/eng-flag.png" alt="" /></span>en-gb </a><i className="fas fa-chevron-down dropdown-arrow" />
                                    <ul className="dropdown-box">
                                        <li> <a href="#"> <span className="flag-img"><img src="image/icon/eng-flag.png" alt="" /></span>English</a>
                                        </li>
                                        <li> <a href="#"> <span className="flag-img"><img src="image/icon/germany-flag.png" alt="" /></span>Germany</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-8 flex-lg-right">
                            <ul className="header-top-list">
                                <li><a href="#"><i className="icons-left fas fa-random" />My Compare</a>
                                </li>
                                <li className="dropdown-trigger language-dropdown"><a href="#"><i className="icons-left fas fa-heart" />
                                    wishlist (0)</a>
                                </li>
                                <li className="dropdown-trigger language-dropdown"><a href="#"><i className="icons-left fas fa-user" />
                                    My Account</a><i className="fas fa-chevron-down dropdown-arrow" />
                                    <ul className="dropdown-box">
                                        <li> <a href="#">My Account</a></li>
                                        <li> <a href="#">Order History</a></li>
                                        <li> <a href="#">Transactions</a></li>
                                        <li> <a href="#">Downloads</a></li>
                                    </ul>
                                </li>
                                <li><a href="#"><i className="icons-left fas fa-phone" /> Contact</a>
                                </li>
                                <li><a href="#"><i className="icons-left fas fa-share" /> Checkout</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
