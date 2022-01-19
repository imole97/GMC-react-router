import React from 'react'
import { useParams } from 'react-router-dom';
import {Movies} from '../MovieList'
import { Link } from 'react-router-dom';




const MovieDescription = () => {

    const {id} = useParams()
    const movie = Movies.filter(movie => movie.id === Number(id))
    console.log(movie)
    
    return (
        <div>
            
                <nav>
                    <Link to={`/`}>
                    <h3>Home</h3>
                    </Link>
                </nav>
            

            <section>
                <div>
                    <div>
                        <h3>{movie[0].title}</h3>
                        <p>Rating:{movie[0].rating}</p>
                        <img src={movie[0].posterUrl} alt={movie[0].title}/>
                    </div>
                    <div>
                        <p>{movie[0].description}</p>
                    </div>
                </div>
                <div>
                    <iframe
                        style={{marginLeft:'400px', borderRadius:'20px'}}
                        width="700"
                        height="415"
                        src= {movie[0].trailer}
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                        >

                    </iframe>
                </div>
            </section>
            
        </div>
    );
}

export default MovieDescription