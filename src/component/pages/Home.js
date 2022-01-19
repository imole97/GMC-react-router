import React from "react";
import Filter from '../Filter';
import {useState} from 'react';
import {Movies} from '../MovieList';
import MovieCard from '../MovieCard';


 export const Home = () => {

    const [state, setState] = useState({
        s: '',
        results: [...Movies],
      
    })

    
    
      
      const search = (e) => {
        if (e.key==='Enter'){
          let results = Movies.filter(movie => movie.title.toLowerCase().includes(state.s.toLowerCase()))
          setState(
            {...state,results:results}
          ,console.log(results))
        }
      }
    
      const handleInput = e => {
        setState (
            {...state,s: e.target.value}
        )
    }
    
      const selectRating = e => {
       
       let results =  Movies.filter(movie => movie.rating === Number(e.target.value) )
    
          setState(
            {...state, results:results}
          )
          
      }

      
      
      
    
    return(
        <div>
            
            <header>
                <h1>Movie Database</h1>
            </header>
            <main>
                <Filter handleInput={handleInput} search = {search} rating= {selectRating}/>
                <MovieCard results = {state.results}/>
            </main>
        </div>
    ) 
}







