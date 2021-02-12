
import './App.css'
import Movie from './component/Movie'
import MovieList from './component/MovieList'
import React, {useState, useEffect} from 'react'


function App() {
  
const [searchTerm, setSearchTerm] = useState('') 
const [MovieListtt , setMovieList] = useState(MovieList)

const addContact = ()=>  {
  
  var contacts = [];
  var contact = {};
  contact.title= prompt("Enter movie title: ") 
  contact.discription = prompt("Enter movie discription: ");
  contact.rate = prompt("rate : ")
  contact.imgUrl = prompt("Enter poster url img: ")
  contacts[contacts.length] = contact;
  var newshit = [...MovieListtt,contact]
 setMovieList(newshit)
  
} 


 const handleOnchange = (e)=> {
  setSearchTerm(e.target.value)
  }
  
   const handleClick = ()=> {   
    addContact() }

    
  return (
  <>
<header> 
  <form onSubmit={(e)=>e.preventDefault}> 
    <input className ="search" 
      type = "text" placeholder="Search..."
      type = "search"
      value = {searchTerm}
      onChange = {handleOnchange}
      />
  </form>
  <div className = "add-movie">
    <button className = "btn" onClick = {handleClick}>Add Movie</button>
  </div>
     </header>
     
    
    <div className="App">
    
     {
      MovieListtt.filter( (movie) => 
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())).map( (movie) => ( 
       <Movie title = {movie.title} discription = {movie.discription} 
       rate = {movie.rate} imgUrl={movie.imgUrl} />
      
       ))}
     
    </div>
    </>
  );
}

export default App;
