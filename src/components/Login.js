import React from 'react';
import './Login.css';
import SearchIcon from '@material-ui/icons/Search';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';



function Login() {

    return (
        <div className ='flex__container'>
            <section className="mobilebtn__none">
                <a href="#" className="signup__link__none">Sign up</a>
                <a href="#" className="login__link__none">Log in</a>
            </section>

                <section className="flex__item__left">
                    <div className="left__div">
                    <p className="left__text"><i className="search__icon"><SearchIcon /> </i>Follow your interests.</p>
                    <p className="left__text">
                        <i className="friends__icon"><ChatBubbleOutlineOutlinedIcon /> </i>Hear what people are talking about.
                    </p>
                    <p className="left__text"><i className="comment__icon"><SupervisorAccountIcon /></i>Join the conversation.</p>
                    </div>
                </section>

                <section className="flex__item__right">
                    <div className="login__details">
                    <label className="username"
                        ><p className="username__text">Phone, email, or username</p>
                        <input type="text" name="username" autofocus />
                    </label>

                    <label className="password"
                        ><p className="password__text">Password</p>
                        <input type="password" name="password" />
                    </label>

                    <a href="#" className="forgot__password">Forgot password?</a>

                    <button name="submit" className="login__btn">
                        <p className="login__btn__text">Log in</p>
                    </button>
                    </div>
                    <div className="right__grid">
                    <div className="right__div">
                        <i className="fab fa-twitter"></i>
                        <p className="right__primary__text">See what's happening in the world right now</p>
                        <p className="right__secondary__text">Join Twitter today.</p>
                        <a href="#" className="sign__up__link">Sign up</a>
                        <a href="#" className="login__link">Log in</a>
                    </div>
                    </div>
                </section>
                <div classNameName='footer'>
            <ul className="footer__grid__container">
                <li className="footer__item"><a href="#" className="footer__link">About</a></li>
                <li className="footer__item"><a href="#" className="footer__link">Help Center</a></li>
                <li className="footer__item"><a href="#" className="footer__link">Terms</a></li>
                <li className="footer__item"><a href="#" className="footer__link">Privacy policy</a></li>
                <li className="footer__item"><a href="#" className="footer__link">Cookies</a></li>
                <li className="footer__item"><a href="#" className="footer__link">Ads info</a></li>
                <li className="footer__item"><a href="#" className="footer__link">Blog</a></li>
                <li className="footer__item"><a href="#" className="footer__link">Status</a></li>
                <li className="footer__item"><a href="#" className="footer__link">Jobs</a></li>
                <li className="footer__item"><a href="#" className="footer__link">Brand</a></li>
                <li className="footer__item"><a href="#" className="footer__link">Advertise</a></li>
                <li className="footer__item"><a href="#" className="footer__link">Marketing</a></li>
                <li className="footer__item"><a href="#" className="footer__link">Businesses</a></li>
                <li className="footer__item"><a href="#" className="footer__link">Developers</a></li>
                <li className="footer__item"><a href="#" className="footer__link">Directory</a></li>
                <li className="footer__item"><a href="#" className="footer__link">Settings</a></li>
                <li className="footer__item">
                <p className="footer__item">&copy; 2020 Fake Twitter.</p>
                </li>
            </ul>
        </div>
        </div>
    )
}

export default Login

