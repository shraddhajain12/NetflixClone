import React from 'react'
import "./signIn.css";
import LanguageIcon from '@mui/icons-material/Language';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../Components/userContext/UserContext';



const SignIn = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const storedEmail = localStorage.getItem("email");
        const storedPassword = localStorage.getItem("password");
        if (storedEmail === email && storedPassword === password) {
            navigate("/");
            setUser(true);
        } else {
            navigate("/signUp");
        }
        // console.log(user);
        // console.log(storedEmail);
    };

    return (
        <div className='signIn'>
            <div className="header">
                <img className='logoImage' src="./Images/Netflix.png" alt="" />
            </div>
            <div className="hero">
                <div className="backgroundImage">
                    <img src="./Images/backgroundimage.jpg" alt="" />
                </div>
                <div className="signInCard">
                    <div className="signInSection">
                        <h1>Sign In</h1>
                        <input type="Email" placeholder='Email or phone number' onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)} />
                        <button onClick={handleSubmit}>Sign In</button>
                        <div className="remember">
                            <div className="checkBoxRight">
                                <input type="checkbox" />
                                <p>Remember me</p>
                            </div>
                            <div className="need">
                                <p>Need help?</p>
                            </div>

                        </div>
                    </div>
                    <div className="signUpNowsection">
                        <p>New to Netflix?  <span onClick={() => {
                            navigate("/signUp");
                        }}>Sign up now</span></p>
                        <p>This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</p>
                    </div>
                </div>
                <div className="footer">
                    <div className="questions">Questions? Call 000-800-919-1694</div>
                    <div className="listOfLinks">
                        <ul>
                            <li>FAQ</li>
                            <li>Cookie Prefrences</li>
                        </ul>
                        <ul>
                            <li>Help Center</li>
                            <li>Corporate Information</li>
                        </ul>
                        <ul>
                            <li>Terms of Use</li>
                        </ul>
                        <ul>
                            <li>Privacy</li>
                        </ul>
                    </div>
                    <div className="langButton">
                        <LanguageIcon />
                        <p>English</p>
                        <ArrowDropDownIcon />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SignIn