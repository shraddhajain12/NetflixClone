import React from 'react'
import "./featured.css";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';



const Featured = ({ item, backdrop }) => {
    return (
        <div className='featured'>
            <div className="image">
                <img src={`https://image.tmdb.org/t/p/w1280/${backdrop}`} alt="" />
            </div>
            <div className="info">
                <div className="title">
                    <h1>{item.title}</h1>
                </div>
                <div className="metaInfo">
                    <div className="quality">
                        <div className="k">4k</div>
                        <div className="star">7.1</div>
                        <div className="min">192 min</div>
                    </div>
                    <div className="genre">
                        <div className="genreItem">SciFi</div>
                        <div className="genreItem">Drama</div>
                        <div className="genreItem">Action</div>
                    </div>
                </div>
                <div className="overView">
                    <p>{item.overview}</p>
                </div>
                <div className="buttons">

                    <button> <PlayArrowIcon className='icon' />   Watch Now</button>

                    <button> <FavoriteBorderIcon /> Add to list</button>
                </div>
            </div>

        </div>
    )
}

export default Featured