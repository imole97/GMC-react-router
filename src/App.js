// import logo from './logo.svg';
// import './App.css';
import Filter from './component/Filter';
import {useState} from 'react'
// import MovieList from './component/MovieList'
import {Movies} from './component/MovieList'

import MovieCard from './component/MovieCard';

function App() {

  const [state, setState] = useState({
    s: '',
    results: [...Movies]
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
   
   let results =  Movies.filter(movie => movie.rating === Number(e.target.value))

      setState(
        {...state, results:results}
      )
  }

  return (
    <div>
      {/* <MovieList/> */}
      <header>
        <h1>Movie Database</h1>
      </header>
      <main>
        <Filter handleInput={handleInput} search = {search} results={state.results} rating= {selectRating}/>
        <MovieCard results = {state.results}/>
      </main>
    </div>
  );
}

export default App;
