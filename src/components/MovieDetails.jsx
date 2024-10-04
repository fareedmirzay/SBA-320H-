import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const API_KEY = "d0cc3229";

const MovieDetails = () => {
  const API_KEY = "d0cc3229";
  const { imdbID } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${imdbID}`);
        setMovieDetails(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching movie details:', error);
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [imdbID]);

  if (loading) {
    return <p>Loading movie details...</p>;
  }

  return (
    <div>
      {movieDetails ? (
        <div>
          <h2>{movieDetails.Title}</h2>
          <p>{movieDetails.Plot}</p>
          <p>Director: {movieDetails.Director}</p>
          <p>Actors: {movieDetails.Actors}</p>
          <p>Rating: {movieDetails.imdbRating}</p>
          <img src={movieDetails.Poster} alt={movieDetails.Title} />
        </div>
      ) : (
        <p>No movie details available</p>
      )}
    </div>
  );
};

export default MovieDetails;