import { useEffect, useState } from 'react';
import MoviesList from 'components/MoviesList/MoviesList';
import { fetchTrendingMovies } from 'api/api';
import PropTypes from 'prop-types';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(res => setMovies(res));
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <MoviesList movies={movies} />
    </div>
  );
};

Home.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

export default Home;
