import React from 'react'
import "./tvShow.css";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import PosterTvShow from '../posterTvShow/PosterTvShow';


const TvShow = () => {
  return (
    <div className='tvShow'>
      <div className="name">
        <h1>Tv Show</h1>
        <p>View all <ArrowRightAltIcon className='icon' /> </p>
      </div>
      <PosterTvShow/>
    </div>
  )
}

export default TvShow