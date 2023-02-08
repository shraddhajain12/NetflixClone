import React from 'react'
import "./footer.css";
import TwitterIcon from '@mui/icons-material/Twitter';


const Footer = () => {
    return (
        <div className='footer'>
            <div className="left">
                <div className="logo">
                    <img src="./Images/Netflix.png" alt="" />
                </div>
                <div className="msg">
                    <p>Netflix is top free streaming website, where to watch movies online free <br />
                        without registration required. With a big database and great features, we're <br />
                        confident Netflix is the best free movies online website in the space that you <br />
                        can't simply miss!</p>
                </div>
                <div className="note">
                    <p> <TwitterIcon className='twitter' />  Connect with us on twitter</p>
                </div>
            </div>
            <div className="right">
                <div className="list">
                    <ul>
                        <li>Movies</li>
                        <li>Tv shows</li>
                        <li>Most watched</li>
                        <li>Top IMDB</li>
                    </ul>
                    <ul>
                        <li>Action</li>
                        <li>Horror</li>
                        <li>Sci-fi</li>
                        <li>Thriller</li>
                    </ul>
                    <ul>
                        <li>Contact</li>
                        <li>Request</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer