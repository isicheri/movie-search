import { useState,useEffect } from "react";
import "./App.css"
import Input from './component/input.component/Input'
import Card from  './component/Moviecard.component/Card'

const Api_Url = "http://www.omdbapi.com/?i=tt3896198&apikey=ee70e791&s=";

const App = () => {

const [movies,setMovies] = useState([])
const [search,searchTerm] = useState('')

const SearchMovies = async (title) => {
const response = await fetch(`${Api_Url}${title}`)
const data =  await response.json()
setMovies(data.Search)
console.log(data.Search)
} 

useEffect(() => {
 SearchMovies('superman')
},[])

const onSearch = (e) => {
  searchTerm(e.target.value)
 
}

const onClickSearch = () => {
  SearchMovies(search)
}



  return (
    <div className="App">
    <Input value={search} onSearch={onSearch} click={onClickSearch}/>
      <div className="Movie_container">
        {movies.map((movie) => (
        <Card movie={movie}/>
        ))}
      </div>
      
    </div>
  )
}

export default App;