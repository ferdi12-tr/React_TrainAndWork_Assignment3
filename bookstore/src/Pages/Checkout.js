import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { getAuthToken, getCurrentUser } from '../Utils/auth';
import { useSelector } from 'react-redux';


export default function Checkout() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [country, setCountry] = useState("Turkiye")
    const [city, setCity] = useState("")
    const [address, setAddress] = useState("")
    const [zipcode, setZipCode] = useState("")
    const [returnedAddress, setReturnedAddress] = useState("")

    const cartList = useSelector(state => state.carts.carts)

    const calculateGrandTotal = () => {
        console.log("calculateGrandTotal")
        let grandTotal = 0
        cartList?.forEach(cart => {
            grandTotal += cart.price * cart.quantity
        });
        return grandTotal
    }

    const whenPaymentInfoSubmitted = async (event) => {
        event.preventDefault();
        debugger
        let user = getCurrentUser();
        let token = getAuthToken();
        if (user === null || token === "EXPIRED") {
            return;
        }

        let paymentInfo = {
            country: country,
            city: city,
            zipcode: zipcode,
            street: address,
            userId: user.id
        }

        try {
            let response = await fetch("https://localhost:7219/Order/AddAddress", {
                method: "POST",
                headers: {
                    'accept': 'text/plain',
                    'Content-Type': 'application/json;charset=utf-8',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(paymentInfo)
            })
            let returnedAddress = await response.json();

            console.log(returnedAddress)
            if (response.ok) {
                setReturnedAddress(returnedAddress)
                console.log("payment info added")
            } else {
                console.log("cannot add payment info")
            }
        } catch (error) {
            console.log(error)
        }

    }

    const whenPlaceOrder = async () => {
        let user = getCurrentUser();
        let token = getAuthToken();
        if (user === null || token === "EXPIRED") {
            return;
        }

        let orderDetail = {
            date: new Date(),
            userId: user.id,
            productId: cartList[0].productId,
            quantity: cartList[0].quantity,
            addressId: returnedAddress.id,
        }
        console.log(orderDetail)
        try {
            let response = await fetch("https://localhost:7219/Order/AddOrder", {
                method: "POST",
                headers: {
                    'accept': 'text/plain',
                    'Content-Type': 'application/json;charset=utf-8',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(orderDetail)
            })
            if (response.ok) {
                console.log("order added")
            } else {
                console.log("cannot order added")
            }
        } catch (error) {
        }
    }

    return (
        <>
            <div>
                <section className="breadcrumb-section">
                    <h2 className="sr-only">Site Breadcrumb</h2>
                    <div className="container">
                        <div className="breadcrumb-contents">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
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
                                                <form action="#" onSubmit={(e) => whenPaymentInfoSubmitted(e)}>
                                                    <div className="row">
                                                        <div className="col-md-6 col-12 mb--20">
                                                            <label>First Name*</label>
                                                            <input onChange={(e) => setFirstName(e.target.value)} type="text" placeholder="First Name" />
                                                        </div>
                                                        <div className="col-md-6 col-12 mb--20">
                                                            <label>Last Name*</label>
                                                            <input onChange={(e) => setLastName(e.target.value)} type="text" placeholder="Last Name" />
                                                        </div>
                                                        <div className="col-12 col-12 mb--20">
                                                            <label>Country*</label>
                                                            <select defaultValue={country} onChange={(e) => setCountry(e.target.value)} className="nice-select">
                                                                <option value="Turkiye">Turkiye</option>
                                                                <option value="Germany">Germany</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-md-6 col-12 mb--20">
                                                            <label>City</label>
                                                            <input onChange={(e) => setCity(e.target.value)} type="text" placeholder="City" />
                                                        </div>
                                                        <div className="col-12 mb--20">
                                                            <label>Address*</label>
                                                            <input onChange={(e) => setAddress(e.target.value)} type="text" placeholder="Address" />
                                                        </div>
                                                        <div className="col-md-6 col-12 mb--20">
                                                            <label>Zip Code*</label>
                                                            <input onChange={(e) => setZipCode(e.target.value)} type="text" placeholder="Zip Code" />
                                                        </div>
                                                    </div>
                                                    <button type='submit' className="place-order w-25">Save</button>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="col-lg-5">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="checkout-cart-total">
                                                        <h2 className="checkout-title">YOUR ORDER</h2>
                                                        <h4>Product <span>Total</span></h4>
                                                        <ul>
                                                            {cartList?.map((cart, index) => {
                                                                return <li key={index}><span className="left">{cart.productName} X {cart.quantity}</span> <span className="right">${cart.price * cart.quantity}</span></li>
                                                            })}
                                                        </ul>
                                                        <p>Sub Total <span>${calculateGrandTotal()}</span></p>
                                                        <p>Shipping Fee <span>$00.00</span></p>
                                                        <h4>Grand Total <span>${calculateGrandTotal()}</span></h4>
                                                        <div className="method-notice mt--25">
                                                        </div>
                                                        <div className="term-block">
                                                            <input type="checkbox" id="accept_terms2" />
                                                            <label htmlFor="accept_terms2">I’ve read and accept the terms &amp;
                                                                conditions</label>
                                                        </div>
                                                        <button onClick={() => whenPlaceOrder()} className="place-order w-100">Place order</button>
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

