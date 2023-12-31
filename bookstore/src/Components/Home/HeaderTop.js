import React, { Component } from 'react'

export default class HeaderTop extends Component {
    render() {
        return (
            <div className="header-top header-top--style-2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 flex-lg-right">
                            <ul className="header-top-list">
                                <li className="dropdown-trigger language-dropdown"><a href="#"><i className="icons-left fas fa-heart" />
                                    wishlist (0)</a>
                                </li>
                                <li className="dropdown-trigger language-dropdown"><a href="#"><i className="icons-left fas fa-user" />
                                    My Account</a>
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
