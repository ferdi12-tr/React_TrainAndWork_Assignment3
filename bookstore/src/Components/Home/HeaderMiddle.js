import React from 'react'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'
import { useSelector } from 'react-redux';


export default function HeaderMiddle() {

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
        <div className="header-middle pt--10 pb--10">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-3">
                        <Link to={"/"} className="site-brand">
                            <img src="image/logo.png" alt="" />
                        </Link>
                    </div>
                    <div className="col-lg-5">
                        <div className="header-search-block">
                            <input type="text" placeholder="Search entire store here" />
                            <button>Search</button>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="main-navigation flex-lg-right">
                            <div className="cart-widget">

                                <div className="login-block">
                                    <Link to={"/login"} className="font-weight-bold">Login</Link> <br />
                                    <span>or</span><Link to={"/login"}>Register</Link>
                                </div>

                                {/* <div className="login-block">
                                        <a href='#' onClick={() => whenLogOut()}>Logout</a>
                                    </div> */}
                                <div className="cart-block">
                                    <div className="cart-total">
                                        <span className="text-number">
                                            {cartList?.length}
                                        </span>
                                        <span className="text-item">
                                            Shopping Cart
                                        </span>
                                        <span className="price">
                                            ${calculateGrandTotal()}
                                            <i className="fas fa-chevron-down" />
                                        </span>
                                    </div>
                                    <div className="cart-dropdown-block">
                                        {cartList?.map((cart, index) => {
                                            return <div key={index} className=" single-cart-block ">
                                                <div className="cart-product">
                                                    <span className='image'><img src={"/image/products/" + cart.image} alt="" /></span>

                                                    <div className="content">
                                                        <h3 className="title">{cart.productName}</h3>
                                                        <p className="price"><span className="qty">{cart.quantity} ×</span> ${cart.price}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        })}
                                        <div className=" single-cart-block ">
                                            <div className="btn-block">
                                                <Link to="/cart" className="btn">View Cart <i className="fas fa-chevron-right" /></Link>
                                                <Link to="/checkout" className="btn btn--primary">Check Out <i className="fas fa-chevron-right" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
