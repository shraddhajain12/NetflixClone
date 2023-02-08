import React from 'react'
import useAxios from 'axios-hooks'



const Axios = () => {
    const [{ data, loading, error }] = useAxios(
        'https://api.themoviedb.org/3/movie/latest?api_key=5c7f4c251eb728f990b1a0b9cb95a639&language=en-US'
    )
    console.log(data)

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error!</p>

    return (
        <div>
            <div className="data">
            <p>  {data} </p>
            </div>
    
        </div>
    )
}

export default Axios