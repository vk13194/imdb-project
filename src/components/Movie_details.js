import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Container from '@mui/material/Container';

const Movie_details = ({ match }) => {
    console.log(match.params.id)
    const [movieData, setMovieData] = useState()
    let id = match.params.id
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=6133e415`)
            console.log(res.data)
            setMovieData(res.data)
        }
        fetchData()
    }, [id])
    console.log('hhhhh', movieData)
    if (movieData === undefined) {
        return <h2>Loading...</h2>
    }
    return (
        <div style={{ backgroundColor: '#081e30', height: '100vh' }} className="p-2 pt-10 ">
            <Container>
                <div className="flex  flex-wrap">
                    <div className="cursor-pointer transition ease-in-out duration-700  transform hover:-translate-y-2 hover:scale-105 ">
                        <img src={movieData.Poster} alt="poster" style={{ width: '350px', height: '350px' }} />
                    </div>
                    <div className="ml-10">
                        <h3 className="text-center text-white">Actors:{movieData.Actors}</h3>
                    </div>
                </div>

            </Container>
        </div>
    )
}

export default Movie_details
