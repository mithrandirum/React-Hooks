import React from 'react'
import MovieList from './MovieList'
import Star from './Star'

 const  Movie = ({title , discription, rate, imgUrl, star }) => {
    return (
        <div className = "movie">
             <img src={imgUrl} alt = {title}/>
          <div className = "movie-info">
            <p>{title}</p>  
           
         </div>   
      <div className = "movie-over">
     <h2>Overview</h2>
     <p>{discription}</p>
     <Star rate = {MovieList.rate}/>
      </div>
     
       
        </div>
    )
}

export default Movie