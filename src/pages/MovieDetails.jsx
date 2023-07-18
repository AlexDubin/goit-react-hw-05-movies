import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'api/api';
import MovieDescription from '../components/MovieDescription/MovieDescription';
import PropTypes from 'prop-types';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState({});
  useEffect(() => {
    if (!movieId) return;
    fetchMovieDetails(movieId)
      .then(res => setDetails({ ...res }))
      .catch(err => console.log(err));
  }, [movieId]);

  return <MovieDescription details={details} />;
};

MovieDetails.propTypes = {
  details: PropTypes.shape({
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.object),
    poster_path: PropTypes.string,
  }),
};

export default MovieDetails;
