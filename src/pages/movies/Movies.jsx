import React from 'react'
import "./movies.css";
import Header from '../../Components/header/Header'
import FolderIcon from '@mui/icons-material/Folder';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import PublicIcon from '@mui/icons-material/Public';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import SortIcon from '@mui/icons-material/Sort';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Footer from '../../Components/footer/Footer'
import Poster from '../../Components/poster/Poster'
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";



const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        axios
          .get(
            `https://api.themoviedb.org/3/movie/now_playing?api_key=5c7f4c251eb728f990b1a0b9cb95a639&language=en-US&page=${page}`
          )
          .then((response) => {
            setMovies(response.data.results);
          })
          .catch((error) => {
            console.log(error);
          });
      }, [page]);
    
      const handlePageClick = (newPage) => {
        setPage(newPage);
      };

    return (
        <>
            <Header />
            <div className='movies'>
                <div className="movieName">
                    <h1>Movies</h1>
                    <div className="buttons">
                        <button> <FolderIcon className='ic' /> Genre All</button>
                        <button> <FolderCopyIcon className='ic' /> Type Movie</button>
                        <button> <PublicIcon className='ic' /> Country</button>
                        <button> <CalendarMonthIcon className='ic' /> Year</button>
                        <button> <AspectRatioIcon className='ic' /> Quality</button>
                        <button> <SortIcon className='ic' /> Sort</button>
                        <button> <FilterAltIcon className='ic' /> Filter</button>
                    </div>
                    <Poster movies={movies} />
                </div>

                <div className="footBtn">
                    <button onClick={() => handlePageClick(page - 1)} > <KeyboardArrowLeftIcon /></button>
                    <button onClick={() => handlePageClick(1)} >1</button>
                    <button onClick={() => handlePageClick(2)} >2</button>
                    <button onClick={() => handlePageClick(3)} >3</button>
                    <button onClick={() => handlePageClick(4)} >4</button>
                    <button onClick={() => handlePageClick(5)} >5</button>
                    <button onClick={() => handlePageClick(6)} >6</button>
                    <button onClick={() => handlePageClick(7)} >7</button>
                    <button onClick={() => handlePageClick(8)} >8</button>
                    <button onClick={() => handlePageClick(page + 1)} ><KeyboardArrowRightIcon /></button>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Movies