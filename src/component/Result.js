import React from 'react'

const Result = ({result}) => {
    return (
        <div className='result'>
            <img src={result.posterUrl} alt={result.title}/>
            <h3>{result.title}</h3>
        </div>
    )
}

export default Result
