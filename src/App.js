
import './App.css';
import MovieList from './Components/MovieList/MovieList';
import {useState} from 'react';
import {moviesData} from './Components/Data/Data'
import AddMovie from './Components/AddMovie/AddMovie';
import Filtermovies from './Components/FilterMovie/Filtermovies';
import ReactStars from "react-rating-stars-component";
function App() {

const[movies,setMovies]=useState(moviesData)
const add=(newmovie)=>{
  setMovies([...movies,newmovie])
}
const[inputSearch,setInputsearch]=useState("")
//const [show, setShow] = useState(false);
  return (
    <div className="App">
      
      <Filtermovies inputSearch={inputSearch} setInputsearch={setInputsearch}/>
      <ReactStars />
      <MovieList movies={movies} inputSearch={inputSearch}/>
      <AddMovie add={add}/>
    </div>
  );
}

export default App;
