import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchAddition } from '../../api/api';
import style from '../MoviesList/MoviesList.module.css'

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  useEffect(() => {
    if (!movieId) return;
    fetchAddition(movieId, 'credits')
      .then(res => {
        const castArr = res.cast;
        setCast([...castArr]);
      })
      .catch(err => console.log(err));
  }, [movieId]);

  return (
    <div>
      <ul className={style.movieList}>
        {cast &&
          cast.map(({ id, profile_path, name, character }) => (
            <li className={style.movieLink} key={id}>
              <img className={style.posterMovieCard}
                src={
                  profile_path
                    ? 'https://image.tmdb.org/t/p/w300' + profile_path
                    : defaultImg
                }
                width="80"
                height="350"
                alt={name}
              />
              <div className={style.titleMovie}>
                <h3>{name}</h3>
                {character && <p>{character}</p>}
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Cast;
