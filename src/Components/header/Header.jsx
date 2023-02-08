import React from 'react'
import "./header.css";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';


const Header = () => {

    const [isScrolled, setIsScrolled] = useState(false);
    const [isShown, setIsShown] = useState(false);


    useEffect(() => {
        function onScroll() {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleClick = () => {
        setIsShown(!isShown);
    };


    return (
        <div className={isScrolled ? "header  header-scrolled" : "header"}>
            <div className="logoImage">
                <img src="./Images/Netflix.png" alt="" />
            </div>
            <div className="menu">
                <Link to="/" className="menuItems">Home</Link>
                <Link to="/movies" className="menuItems">Genre</Link>
                <Link to="/movies" className="menuItems">Country</Link>
                <Link to="/movies" className="menuItems">Movies</Link>
                <Link to="/tv" className="menuItems">Tv-Series</Link>
            </div>
            <div className="searchBar">
                <SearchIcon className="icon" />
                <input type="text" placeholder='Enter your keywords....' />
            </div>
            <div className="profileSection">"
                <NotificationsNoneIcon className="icon" />
                <img src="./Images/promo4.png" alt="" />
                <ArrowDropDownIcon className="icon" onClick={handleClick} />
                {isShown && (
                    <div className="logOut">
                        <p>Settings</p>
                        <p>LogOut</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Header