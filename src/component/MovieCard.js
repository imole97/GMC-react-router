import React from 'react'
import Result from './Result'


const MovieCard = ({results}) => {
    return (
        <div className='results'>
            {results.map(result => (
                // <img key={result.id} src={result.posterUrl} alt={result.title}/>
                <Result key = {result.id} result={result}/>
            ))}
            
        </div>
    )
}

export default MovieCard
