import React from 'react'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

export default function Cart() {

    const cartList = useSelector(state => state.carts.carts)

    const calculateGrandTotal = () => {
        console.log("calculateGrandTotal")
        let grandTotal = 0
        cartList?.forEach(cart => {
            grandTotal += cart.price * cart.quantity
        });
        return grandTotal
    }

    return (
        <>
            <section className="breadcrumb-section">
                <h2 className="sr-only">Site Breadcrumb</h2>
                <div className="container">
                    <div className="breadcrumb-contents">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item active">Cart</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </section>
            <main className="cart-page-main-block inner-page-sec-padding-bottom">
                <div className="cart_area cart-area-padding  ">
                    <div className="container">
                        <div className="page-section-title">
                            <h1>Shopping Cart</h1>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <form action="#" className>
                                    <div className="cart-table table-responsive mb--40">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th className="pro-remove" />
                                                    <th className="pro-thumbnail">Image</th>
                                                    <th className="pro-title">Product</th>
                                                    <th className="pro-price">Price</th>
                                                    <th className="pro-quantity">Quantity</th>
                                                    <th className="pro-subtotal">Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {cartList?.map((cart, index) => {
                                                    return <tr key={index}>
                                                        <td className="pro-remove"><a href="#"><i className="far fa-trash-alt" /></a>
                                                        </td>
                                                        <td className="pro-thumbnail"><img src={"/image/products/" + cart.image} alt="Product" /></td>
                                                        <td className="pro-title">{cart.productName}</td>
                                                        <td className="pro-price"><span>${cart.price}</span></td>
                                                        <td className="pro-quantity">
                                                            <div className="pro-qty">
                                                                <div className="count-input-block">
                                                                    <span>{cart.quantity}</span>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="pro-subtotal"><span>${cart.price * cart.quantity}</span></td>
                                                    </tr>
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cart-section-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-12 d-flex">
                                <div className="cart-summary">
                                    <div className="cart-summary-wrap">
                                        <h4><span>Cart Summary</span></h4>
                                        <p>Sub Total <span className="text-primary">${calculateGrandTotal()}</span></p>
                                        <p>Shipping Cost <span className="text-primary">$00.00</span></p>
                                        <h2>Grand Total <span className="text-primary">${calculateGrandTotal()}</span></h2>
                                    </div>
                                    <div className="cart-summary-button">
                                        <Link to="/checkout" className="checkout-btn c-btn btn--primary">Checkout</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </>
    )
}
