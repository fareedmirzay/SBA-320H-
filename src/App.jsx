import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchBar from './components/SearchBar.jsx';
import MovieList from './components/MovieList.jsx';
import MovieDetails from './components/MovieDetails.jsx';
import axios from 'axios';


// const API_KEY = import.meta.env.VITE_API_KEY;
// console.log("API Key:", import.meta.env.VITE_API_KEY);

const App = () => {
  const API_KEY = "d0cc3229";
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (searchTerm) => {
    setLoading(true);
    try {
      const response = await axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}`);
      setMovies(response.data.Search || []);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching movies:', error);
      setLoading(false);
    }
  };

  return (
    <Router>
      <div>
        <h1>AHMADS Movie App</h1>
        <SearchBar onSearch={handleSearch} />
        {loading ? <p>Loading movies...</p> : <Routes>
          <Route path="/" element={<MovieList movies={movies} />} />
          <Route path="/movie/:imdbID" element={<MovieDetails />} />
        </Routes>}
      </div>
    </Router>
  );
};

export default App;