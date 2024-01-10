import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import Cookies from 'js-cookie'



export default function LoginRegister() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [statusCode, setStatus] = useState(0)
    const navigate = useNavigate()

    const whenLoging = async (event) => {
        event.preventDefault();
        let loginUser = {
            username: username,
            password: password
        }
        let response = await fetch("https://localhost:7219/Auth/LoginUser", {
            method: "POST",
            headers: {
                'accept': 'text/plain',
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(loginUser)
        })
        if (response.ok) {
            let result = await response.json();
            localStorage.setItem("auth", JSON.stringify(result))
            // Cookies.set("auth", JSON.stringify(result))
            navigate("/")
        } else {
            setStatus(500)
        }
        //console.log(JSON.parse(Cookies.get("auth")))
        setUsername("")
        setPassword("")
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
                                    <li className="breadcrumb-item"><Link to={"/"}>Home</Link></li>
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
                                <form onSubmit={(e) => whenLoging(e)}>
                                    <div className="login-form">
                                        <h4 className="login-title">Returning Customer</h4>
                                        <p><span className="font-weight-bold">I am a returning customer</span></p>
                                        <div className="row">
                                            <div className="col-md-12 col-12 mb--15">
                                                <label htmlFor="username">Enter your username here...</label>
                                                <input onChange={(e) => setUsername(e.target.value)} value={username} className="mb-0 form-control" required type="text" id="username1" placeholder="Enter you username here..." />
                                            </div>
                                            <div className="col-12 mb--20">
                                                <label htmlFor="password">Password</label>
                                                <input onChange={(e) => setPassword(e.target.value)} value={password} className="mb-0 form-control" required type="password" id="login-password" placeholder="Enter your password" />
                                            </div>
                                            <div className="col-md-12">
                                                <button type='submit' className="btn btn-outlined">
                                                    Login
                                                </button>
                                                {statusCode === 500 && <h4 className='text-danger'>Try again or Create An Account</h4>}
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


