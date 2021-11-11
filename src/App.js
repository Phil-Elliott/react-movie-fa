import React, { useState, useEffect } from 'react'
import Movie from './Components/Movie'
import './App.css'
import axios from 'axios'

const Featured_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1" 
const Search_API = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query="

const App = () => {
  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const getMovies = async() => {
      const result = await axios(Featured_API)

      setMovies(result.data.results)
    }

    getMovies()

  },[])


  const handleOnSubmit = (e) => {
    e.preventDefault()

    if (searchTerm) {
      const searchMovies = async() => {
        const result = await axios(Search_API + searchTerm)

        setMovies(result.data.results)
        setSearchTerm('')
      }

      searchMovies()
   }
  }

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value)
  }

  return (
    <div className="body-container">
      <header>
        <form onSubmit={handleOnSubmit}>
          <input 
            className="search"
            typer="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleOnChange}
          />
        </form>
      </header>
      <div className="movie-container">
        {movies.length > 0 && movies.map(movie => (
          <Movie key={movie.id} {...movie}/>
        ))}
      </div>
    </div>
  )


}

export default App