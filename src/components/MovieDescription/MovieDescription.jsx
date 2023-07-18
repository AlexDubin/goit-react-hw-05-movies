import { useLocation, Outlet, Link } from 'react-router-dom';
import { useRef, Suspense } from 'react';
import PropTypes from 'prop-types';
import style from './MovieDescription.module.css'
import { FiChevronLeft } from 'react-icons/fi';
import { ColorRing } from 'react-loader-spinner';

const MovieDescription = ({ details }) => {
  const { title, release_date, vote_average, overview, genres, poster_path } = details;
  const date = new Date(release_date).getFullYear();
  const location = useLocation();
  const backBtnLocation = useRef(location.state?.from ?? './movies');
  const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <div>
      <Link className={style.backBtn} to={backBtnLocation.current}><FiChevronLeft className={style.backIcon} /> Go back</Link>
      {details && (
        <div>
          <div className={style.containerDesc} >
            <img className={style.poster}
              src={poster_path ? `https://image.tmdb.org/t/p/w300${poster_path}` : defaultImg}
              width={250}
              height={400}
              alt="poster"
            />
            <div className={style.containerText}>
              <h2>
                {title} ({date})
              </h2>
              <p>User score: {Math.round(vote_average * 10)}%</p>
              <h3>Overview</h3>
              <p>{overview}</p>
              <h3>Genres</h3>
              {genres ? genres.map(genre => genre.name + ' ') : 'Not information'}
            </div>
          </div>
          <div className={style.containerAdd}>
            <h3>Additional information:</h3>
            <ul className={style.containerLink}>
              <li>
                <Link className={style.backBtn} to="cast">Cast</Link>
              </li>
              <li>
                <Link className={style.backBtn} to="review">Review</Link>
              </li>
            </ul>
          </div>
        </div>
      )}

      <Suspense fallback={<ColorRing type="Puff" color="#00BFFF" height={100} width={100} />}>
          <Outlet />
          </Suspense>
    </div>
  );
};


MovieDescription.propTypes = {
  details: PropTypes.shape({
    title: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.array,
    poster_path: PropTypes.string,
  }).isRequired,
};

export default MovieDescription;
