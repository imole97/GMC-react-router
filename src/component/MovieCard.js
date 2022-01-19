import React from 'react'
import Result from './Result'
// import withMovie from './withMovie'
import {Link} from 'react-router-dom'



const MovieCard = ({results}) => {
    return (
        <div className='results'>
            {results.map(movie => (
                // <img key={result.id} src={result.posterUrl} alt={result.title}/>
                <Link to={`/description/${movie.id}`} key = {movie.id}>
                    <Result  movie={movie} />
                </Link>
            ))}
            
        </div>
    )
}

export default MovieCard
