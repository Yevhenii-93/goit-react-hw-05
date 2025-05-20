import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../services/services";
import { useEffect, useState } from "react";

export default function Overview() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchReviews(movieId) {
      try {
        const data = await fetchMovieReviews(movieId);
        setReviews(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchReviews(movieId);
  }, [movieId]);

  return (
    <ul>
      {reviews.map((review) => (
        <li key={review.id}>
          <h3>Author: {review.author}</h3>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  );
}
