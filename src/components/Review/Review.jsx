import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchAddition } from '../../api/api';


const Review = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!movieId) return;
    fetchAddition(movieId, 'reviews')
      .then(res => {
        const reviewArr = res.results;
        setReviews([...reviewArr]);
      })
      .catch(err => console.log(err));
  }, [movieId]);

  return (
    <div>
      <ul>
        {reviews.length ? (
          reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </li>
          ))
        ) : (
          <div>Wie don't have any reviews for this movie</div>
        )}
      </ul>
    </div>
  );
}

export default Review;