import React,{useState} from 'react'
import MovieList from "./MovieList"
import StarRatingComponent from 'react-star-rating-component';


export default function Star() {
  
var [rating , setRating] = useState(MovieList[0].rate)


const onStarClick =(nextValue, prevValue, name,rate) => {
   
    setRating(rating= nextValue);
    
  }


    return (

        <div>
        <h2>Rating: {rating}</h2>
        <StarRatingComponent 
          name="rate1" 
          starCount={10}
          value={rating}
          onStarClick={onStarClick}
          onStarHover={onStarClick}
          onStarHoverOut = {onStarClick}
        />
      </div>
       
    )
}
