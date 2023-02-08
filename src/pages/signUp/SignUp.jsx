import React from 'react'
import "./signUp.css";
import LanguageIcon from '@mui/icons-material/Language';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";



const SignUp = () => {
    const [email, setEmail] = useState("");
    
    // eslint-disable-next-line
    const [password, setPassword] = useState("");
    // eslint-disable-next-line
    const [user, setUser] = useState(false);
    const emailRef = useRef();
    const passwordRef = useRef();

    const navigate = useNavigate();

    const handleStart = () => {
        setEmail(emailRef.current.value);
        localStorage.setItem("email", emailRef.current.value);
    };

    const handleFinish = (e) => {
        e.preventDefault();
        setPassword(passwordRef.current.value);
        localStorage.setItem("password", passwordRef.current.value);
        navigate("/SignIn");
    };

    return (
        <div className="signUp">
            <div className="header">
                <img className='logoImage' src="./Images/Netflix.png" alt="" />
                <div className="signInButtons">
                    <div className="langButton">
                        <LanguageIcon />
                        <p>English</p>
                        <ArrowDropDownIcon />
                    </div>
                    <button className='signInButton' onClick={() => navigate("/signIn")}  >SignIn</button>
                </div>
            </div>
            <div className="hero">
                <div className="backgroundimage">
                    <img src="./Images/backgroundimage.jpg" alt="" />
                </div>
                <div className="SignupContainer">
                    <div className="scText">
                        <h1>Unlimited movies, TV shows and more.</h1>
                        <h3>Watch anywhere. Cancel anytime.</h3>
                        <p>Ready to watch? Enter your email to create or restart your membership.</p>
                    </div>
                    {!email ? (
                        <div className="signupForm">
                            <input type="email" ref={emailRef} placeholder="Email Address" />
                            <button onClick={handleStart} >Get Started  <ArrowForwardIosIcon /> </button>
                        </div>
                    ) : (


                        <div className="signupForm">
                            <input type="password" ref={passwordRef} placeholder="Password" />
                            <button  onClick={handleFinish} >Done</button>
                        </div>
                    )}
                </div>
            </div>
            <div className="promolabel">
                <div className="promoText">
                    <h1>Enjoy on your TV.</h1>
                    <p>Watch on smart TVs, PlayStation, Xbox, <br /> Chromecast, Apple TV, Blu-ray players and <br /> more.</p>
                </div>
                <div className="promoImage">
                    <img src="./Images/promo1.png" alt="" />
                </div>
            </div>
            <div className="promolabelFlip">
                <div className="promoImage2">
                    <img src="./Images/promo2.jpg" alt="" />
                </div>
                <div className="promoText2">
                    <h1>Download your shows <br /> to watch offline.</h1>
                    <p>Save your favourites easily and always have <br /> something to watch.</p>
                </div>

            </div>
            <div className="promolabel">
                <div className="promoText">
                    <h1>Watch everywhere.</h1>
                    <p>Stream unlimited movies and TV shows on your <br /> phone, tablet, laptop, and TV.</p>
                </div>
                <div className="promoImage">
                    <img src="./Images/promo3.png" alt="" />
                </div>

            </div>
            <div className="promolabelFlip">
                <div className="promoImage2">
                    <img src="./Images/promo4.png" alt="" />
                </div>
                <div className="promoText2">
                    <h1>Create profiles for <br /> children.</h1>
                    <p>Send children on adventures with their <br /> favourite characters in a space made just for <br /> them—free with your membership.</p>

                </div>

            </div>
            <div className="footern">
                <div className="quetions">Questions? Call 000-800-919-1694</div>
                <div className="listOfLinks">
                    <ul>
                        <li>FAQ</li>
                        <li>Investor Relations</li>
                        <li>Privacy</li>
                        <li>Speed Test</li>
                    </ul>
                    <ul>
                        <li>Help Centre</li>
                        <li>Jobs</li>
                        <li>Cookie Preferences</li>
                        <li>Legal Notices</li>
                    </ul>
                    <ul>
                        <li>Account</li>
                        <li>Ways to Watch</li>
                        <li>Corporate Information</li>
                        <li>Only on Netflix</li>
                    </ul>
                    <ul>
                        <li>Media Centre</li>
                        <li>Terms of Use</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className="langButton">
                    <LanguageIcon />
                    <p>English</p>
                    <ArrowDropDownIcon />
                </div>
                <div className="footNote">
                    <p>Netflix USA</p>
                </div>
            </div>
        </div>
    )
}

export default SignUp