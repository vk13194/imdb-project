import React from 'react'

const MovieList = ({ movies, AddFavrate, addFavrateMovies }) => {
    console.log('moviesssupdate', movies)
    if (movies === undefined) {
        return <h2>loading....</h2>
    }
    return (
        <div className="grid md:grid-cols-4 gap-4 sm:grid-cols-2 grid-cols-1 py-2 pl-5 ">
            {movies.map(movie =>
                <div className="relative  cursor-pointer transition ease-in-out duration-700  transform hover:-translate-y-2 hover:scale-105 ">
                    <img src={movie.Poster} alt="poster" style={{ width: '350px', height: '350px' }} />
                    <div className="absolute bottom-0 left-0" onClick={() => addFavrateMovies(movie)}>
                        <AddFavrate />
                    </div>
                </div>
            )}
        </div>
    )
}

export default MovieList
