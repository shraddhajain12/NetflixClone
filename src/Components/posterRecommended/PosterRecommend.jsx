import React from 'react'
import "./posterRecommend.css";
import useAxios from "axios-hooks";



const PosterRecommend = () => {

    const [{ data, loading, error }] = useAxios(
        'https://api.themoviedb.org/3/movie/now_playing?api_key=5c7f4c251eb728f990b1a0b9cb95a639&language=en-US&page=1'
    );

    console.log(data);

    if (loading) return <p>Loading..</p>;
    if (error) return <p>error..</p>;

    const results = data.results;


    return (
        <div className='posterRecommend'>

            <div className="posterSlot">
                {results.map((movie) => (

                    <div key={movie.id} className="poster">
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />

                        <div className="title">{movie.original_title}</div>

                        <div className="meta">
                            <div className="year">{movie.release_date.slice(0,4)}</div>
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

export default PosterRecommend
// {movie.original_title}
// {`https://image.tmdb.org/t/p/w500${movie.poster_path}`}