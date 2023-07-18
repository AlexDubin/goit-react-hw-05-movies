import Search from 'components/Search/Search';
import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { fetchMovieSearch } from '../api/api';
import MoviesList from '../components/MoviesList/MoviesList';
import PropTypes from 'prop-types';

const Movies = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const handleSubmit = value => {
    setSearchParams({ query: value });
  };

  useEffect(() => {
    if (!query) return;
    fetchMovieSearch(query).then(res => setMovies([...res]));
  }, [query]);

  return (
    <div>
      <Search location={location} onSubmit={handleSubmit} />
      <MoviesList movies={movies} />
    </div>
  );
};

Movies.propTypes = {
  location: PropTypes.shape({}),
};

export default Movies;
