import React from 'react'
import "./posterTvShow.css";
import useAxios from "axios-hooks";

const PosterTvShow = () => {


    const [{ data, loading, error }] = useAxios(
        'https://api.themoviedb.org/3/tv/top_rated?api_key=5c7f4c251eb728f990b1a0b9cb95a639&language=en-US&page=1'
    );

    console.log(data);

    if (loading) return <p>Loading..</p>;
    if (error) return <p>error..</p>;

    const results = data.results;

    return (

        <div className='posterTvShow'>
            <div className="posterSlot">
                {results.map((movie) => (
                    <div key={movie.id} className="poster">
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
                        <div className="title"> {movie.original_name} </div>
                        <div className="meta">
                            <div className="year">  {movie.first_air_date.slice(0,4)} </div>
                            <div className="dot">.</div>
                            <div className="duration">107 min</div>
                            <div className="type">Movie</div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PosterTvShow