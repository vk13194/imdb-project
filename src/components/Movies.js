import React, { useState, useEffect } from 'react'
import axios from 'axios'
import MovieList from './MovieList'
import Pagination from '@mui/material/Pagination';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import AddFavrate from './AddFavrate'
import RemoveFavrate from './RemoveFavrate'
const Movies = () => {
    const [movies, setMovies] = useState()
    const [page, setPage] = useState(1)
    const [text, setText] = useState()
    const [searchText, setSearchText] = useState('batman')
    const [selectType, setSelectType] = useState('movie')
    const [favrates, setFaverates] = useState([])

    localStorage.setItem("favrates", JSON.stringify(favrates));


    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(`https://www.omdbapi.com/?s=${searchText}&page=${page}&type=${selectType}
            &apikey=6133e415`)
            console.log(res)
            setMovies(res.data.Search)
        }
        fetchData()
    }, [page, searchText, selectType])
    console.log('selecteeeeee', selectType)

    if (movies === undefined) {
        return <h3>loading.....</h3>
    }
    const handleChange = (e, value) => {
        console.log('valueee', value)
        setPage(value)
    }
    const handleText = (e) => {
        setText(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setSearchText(text)
        setPage(1)
        setText('')

    }
    const handleSelect = (e) => {
        setSelectType(e.target.value)
        setPage(1)
    }
    const addFavrateMovies = (movie) => {
        const newFavrateList = [...favrates, movie]
        setFaverates(newFavrateList)
    }
    const removeFavrateMovies = (movie) => {
        const newFavrateList = favrates.filter(favrate => favrate.imdbID !== movie.imdbID)
        setFaverates(newFavrateList)
    }
    console.log('favrates.....', favrates)
    return (
        <div style={{ backgroundColor: '#081e30' }} className="p-2 ">
            <div className="flex justify-center">
                <form onSubmit={handleSubmit} >
                    <div className="flex">
                        <input type="text" className=" w-52 p-2 focus:outline-none focus:shadow-outline border rounded font-serif font-semibold" onChange={handleText} value={text} />
                        <button type="submit" className="px-4 py-2 bg-blue-500 hover:bg-blue-700 focus:outline-none text-white font-serif font-semibold" >Search</button>
                    </div>
                </form>
            </div>
            <div className="flex justify-center text-white">
                <RadioGroup row aria-label="gender" name="row-radio-buttons-group" onChange={handleSelect}>
                    <FormControlLabel value="movie" control={<Radio />} label="Movie" />
                    <FormControlLabel value="series" control={<Radio />} label="Series" />

                </RadioGroup>
            </div>
            <div>
                <MovieList movies={movies} AddFavrate={AddFavrate} addFavrateMovies={addFavrateMovies} />
            </div>

            <div className="flex justify-center">
                <Pagination count={20} color="primary" page={page} onChange={handleChange} />
            </div>
            <div >
                <h3 className="text-white text-center">Favrates</h3>
                <MovieList movies={favrates} AddFavrate={RemoveFavrate} addFavrateMovies={removeFavrateMovies} />
            </div>

        </div>
    )
}

export default Movies
