import React from 'react'
import "./tvSeries.css";
import Header from '../../Components/header/Header';
import FolderIcon from '@mui/icons-material/Folder';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import PublicIcon from '@mui/icons-material/Public';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import SortIcon from '@mui/icons-material/Sort';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Footer from '../../Components/footer/Footer';
import Poster from '../../Components/posterTelevision/Poster.jsx';
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";


const TvSeries = () => {

    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        axios
            .get(
                `https://api.themoviedb.org/3/tv/popular?api_key=dfb83a503ccee16b00464b65bc3ac410&language=en-US&page=${page}`
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
            <div className='TvSeries'>
                <div className="seriesName">
                    <h1>Tv Series</h1>
                    <div className="buttons">
                        <button> <FolderIcon /> Genre All</button>
                        <button> <FolderCopyIcon /> Type Movie</button>
                        <button> <PublicIcon /> Country</button>
                        <button>  <CalendarMonthIcon /> Year</button>
                        <button> <AspectRatioIcon /> Quality</button>
                        <button> <SortIcon /> Sort</button>
                        <button> <FilterAltIcon /> Filter</button>
                    </div>
                    
                </div>
                <Poster movies={movies} />

                <div className="btns">
                    <button onClick={() => handlePageClick(page - 1)} ><KeyboardArrowLeftIcon /></button>
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

export default TvSeries