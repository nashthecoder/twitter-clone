import React from 'react';
import './Login.css';


function Login() {

    return (
        <div classNameNameName ='header'>
            <section classNameNameName="mobile-btn-none">
                <a href="#" classNameNameName="sign-up-link-none">Sign up</a>
                <a href="#" classNameNameName="login-link-none">Log in</a>
            </section>

                <section classNameName="flex-item-left">
                    <div classNameName="left-div">
                    <p classNameName="left-text"><i classNameName="fas fa-search"></i>Follow your interests.</p>
                    <p classNameName="left-text">
                        <i classNameName="fas fa-user-friends"></i>Hear what people are talking about.
                    </p>
                    <p classNameName="left-text"><i classNameName="far fa-comment"></i>Join the conversation.</p>
                    </div>
                </section>

                <section classNameName="flex-item-right">
                    <div classNameName="login-details">
                    <label classNameName="username"
                        ><p classNameName="username-text">Phone, email, or username</p>
                        <input type="text" name="username" autofocus />
                    </label>

                    <label classNameName="password"
                        ><p classNameName="password-text">Password</p>
                        <input type="password" name="password" />
                    </label>

                    <a href="#" classNameName="forgot-password">Forgot password?</a>

                    <button name="submit" classNameName="login-btn">
                        <p classNameName="login-btn-text">Log in</p>
                    </button>
                    </div>
                    <div classNameName="right-grid">
                    <div classNameName="right-div">
                        <i classNameName="fab fa-twitter"></i>
                        <p classNameName="right-primary-text">See what's happening in the world right now</p>
                        <p classNameName="right-secondary-text">Join Twitter today.</p>
                        <a href="#" classNameName="sign-up-link">Sign up</a>
                        <a href="#" classNameName="login-link">Log in</a>
                    </div>
                    </div>
                </section>
                <div classNameName='footer'>
            <ul className="footer-grid-container">
                <li className="footer-item"><a href="#" className="footer-link">About</a></li>
                <li className="footer-item"><a href="#" className="footer-link">Help Center</a></li>
                <li className="footer-item"><a href="#" className="footer-link">Terms</a></li>
                <li className="footer-item"><a href="#" className="footer-link">Privacy policy</a></li>
                <li className="footer-item"><a href="#" className="footer-link">Cookies</a></li>
                <li className="footer-item"><a href="#" className="footer-link">Ads info</a></li>
                <li className="footer-item"><a href="#" className="footer-link">Blog</a></li>
                <li className="footer-item"><a href="#" className="footer-link">Status</a></li>
                <li className="footer-item"><a href="#" className="footer-link">Jobs</a></li>
                <li className="footer-item"><a href="#" className="footer-link">Brand</a></li>
                <li className="footer-item"><a href="#" className="footer-link">Advertise</a></li>
                <li className="footer-item"><a href="#" className="footer-link">Marketing</a></li>
                <li className="footer-item"><a href="#" className="footer-link">Businesses</a></li>
                <li className="footer-item"><a href="#" className="footer-link">Developers</a></li>
                <li className="footer-item"><a href="#" className="footer-link">Directory</a></li>
                <li className="footer-item"><a href="#" className="footer-link">Settings</a></li>
                <li className="footer-item">
                <p className="footer-link">&copy 2020 Twitter, Inc.</p>
                </li>
            </ul>
        </div>
        </div>
    )
}

export default Login

