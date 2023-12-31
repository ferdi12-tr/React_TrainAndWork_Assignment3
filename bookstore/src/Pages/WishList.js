import React, { Component } from 'react'

export default class WishList extends Component {
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
                                        <li className="breadcrumb-item active">Wishlist</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </section>
                    <div className="cart_area inner-page-sec-padding-bottom">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <form action="">
                                        <div className="cart-table table-responsive">
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th className="pro-thumbnail">Image</th>
                                                        <th className="pro-title">Product</th>
                                                        <th className="pro-price">Price</th>
                                                        <th className="pro-quantity">Quantity</th>
                                                        <th className="pro-subtotal">Total</th>
                                                        <th className="pro-remove">Remove</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="pro-thumbnail"><a href="#"><img src="./image/products/product-1.jpg" alt="Product" /></a></td>
                                                        <td className="pro-title"><a href="#">Rinosin Glasses</a></td>
                                                        <td className="pro-price"><span>$395.00</span></td>
                                                        <td className="pro-quantity">
                                                            <div className="pro-qty">
                                                                <div className="count-input-block">
                                                                    <input type="number" className="form-control text-center" defaultValue={1} />
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="pro-subtotal"><span>$395.00</span></td>
                                                        <td className="pro-remove"><a href="#"><i className="far fa-trash-alt" /></a></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}
