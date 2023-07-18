import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import style from './MoviesList.module.css'

const MoviesList = ({ movies }) => {
  const location = useLocation();
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  return (
    <ul className={style.movieList}>
      {movies.map(
        ({ id, title, poster_path }) =>
          title && (
            <li className={style.movieLink} key={id}>
              <Link  key={id} to={`/movies/${id}`} state={{ from: location }}>
                <img className={style.posterMovieCard}
                  src={
                    poster_path
                      ? 'https://image.tmdb.org/t/p/w300' + poster_path
                      : defaultImg
                  }
                  width={250}
                  height={400}
                  alt="poster"
                />
                <div className={style.titleMovie}>
                  {title}
                </div>
              </Link>
            </li>
          )
      )}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      poster_path: PropTypes.string,
    })
  ),
};

export default MoviesList;
