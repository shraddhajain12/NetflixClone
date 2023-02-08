import React from 'react'
import "./recommended.css";
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PosterRecommend from '../posterRecommended/PosterRecommend';




const Recommended = () => {

   
    return (
        <div className='recommended'>
            <div className="titleName">
                <h1>Recommended</h1>
                <div className="buttons">
                    <button> <PlayCircleFilledWhiteIcon className='icon' /> Movie</button>
                    <button> <FormatListBulletedIcon className='icon' /> Tv Series</button>
                    <button> <TrendingUpIcon className='icon' /> Trending</button>
                </div>
            </div>
            <PosterRecommend  />
        </div>
    )
}

export default Recommended