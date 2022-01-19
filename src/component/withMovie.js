// import React from 'react'
// import { Movies } from './MovieList'
// // import { useState } from 'react'

// const withMovie = WrappedComponent => {
   

//    class WithMovie extends React.Component {
//        constructor(props) {
//            super(props)
       
//            this.state = {
//                 selected : []
//            }
//        }

//     //    movieClick = id => {
//     //        let result = Movies.filter(movie => movie.id === id)
//     //     // let result = Movies.reduce((prevmovie, currmovie)=> (prevmovie.id === id)? prevmovie:currmovie)
//     //     // console.log(result)

//     //     this.setState(prevState => ({
//     //         selected: prevState.selected = result
//     //     }),()=>{console.log(this.state.selected)})
//     // }
    
//        render() {
           
//            return <WrappedComponent selected={this.state.selected} movieClick={this.movieClick} {...this.props}/>
//        }
//    }
   
//    return WithMovie
   
    
// }

// export default withMovie
