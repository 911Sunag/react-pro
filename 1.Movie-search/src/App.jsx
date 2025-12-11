import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import Spinner from "./components/Spinner";
import MovieCard from "./components/MovieCard";
import { useDebounce } from 'react-use';

const API_BASE_URL = "https://api.themoviedb.org/3/";
// const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMDVjYTY1MTI0NDY3N2ZlNTM1NzE0MDE0NjJiNTA1ZCIsIm5iZiI6MTc2NTM0MDc4Ni41MjcsInN1YiI6IjY5MzhmNjcyOGExMDkwZGUzOTEzNGI2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ln5miXHAo02oxd92hT6FqxBhYZtTBJULnH1LZqCFN0Y';

const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMDVjYTY1MTI0NDY3N2ZlNTM1NzE0MDE0NjJiNTA1ZCIsIm5iZiI6MTc2NTM0MDc4Ni41MjcsInN1YiI6IjY5MzhmNjcyOGExMDkwZGUzOTEzNGI2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ln5miXHAo02oxd92hT6FqxBhYZtTBJULnH1LZqCFN0Y'
  }
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMesaage, setErrorMesaage] = useState("");
  const [moviesList, setMoviesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false); 
  
  const [debounceSearchTerm, setDebounceSearchTerm] = useState('');
  useDebounce( () => setDebounceSearchTerm(searchTerm), 600, [searchTerm])

  const fetchMovies = async (quary = '') => {

    setIsLoading(true);
    setErrorMesaage('');
    try {
      const endPoint = quary ? `${API_BASE_URL}search/movie?query=${encodeURIComponent(quary)}` : `${API_BASE_URL}discover/movie?sort_by=popularity.desc`;

      const response = await fetch(endPoint, API_OPTIONS);

      if(!response.ok) {
        throw new Error('Failed to fetch movies');
      }

      const data = await response.json();
      

      if(data.response === 'False'){
        setErrorMesaage(data.Error || 'Failed to fetch movies');
        setMoviesList([]);
        return;
      }
      setMoviesList(data.results || []);
    } catch (error) {
      console.error(`Error Fetching Movies:${error}`);
      setErrorMesaage("Error Fetching Movies.please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() =>{
    fetchMovies(searchTerm);
  }, [searchTerm]);

  return (
    <main>
      <div className="pattern"></div>
      <div className="wrapper">
        <header>
          <img src="./hero-img.png" alt="hero banner" />
          <h1>
            Find <span className="text-gradient">Movies</span> You'll Enjoy
            Without the hassle
          </h1>
          <Search searchTerm={searchTerm} setsearchTerm={setSearchTerm} />
        </header>
        
        <section className="all-movies">
          <h2 className="mt-10">All Movies</h2>
          {isLoading ? (
            <p className="text-white"><Spinner/></p>
          ): errorMesaage ? (
            <p className="text-red-500">{errorMesaage}</p>
          ):(
            <ul>
              {moviesList.map((movie) => (
                <MovieCard key={movie.id} movie = {movie}/>
              ))}
            </ul>
          )}

        </section>
      </div>
    </main>
  );
};

export default App;
