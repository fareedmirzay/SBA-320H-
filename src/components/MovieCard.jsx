import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
    return (
      <div className="movie-card">
        <img src={movie.Poster} alt={movie.Title} />
        <h3>{movie.Title} ({movie.Year})</h3>
        <Link to={`/movie/${movie.imdbID}`}>
          View Details
        </Link>
      </div>
    );
  };
  
  export default MovieCard;