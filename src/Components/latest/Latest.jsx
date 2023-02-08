import React from 'react'
import "./latest.css";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import PosterLatest from '../posterLatest/PosterLatest';


const Latest = () => {
    return (
        <div className='latest'>
            <div className="title">
                <h1>latest</h1>
                <p>View all <ArrowRightAltIcon className='icon' /> </p>
            </div>
            <PosterLatest/>
        </div>
    )
}

export default Latest