import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../services/services";
import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

export default function Overview() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchReviews(movieId) {
      try {
        setError(false);
        setLoading(true);
        const data = await fetchMovieReviews(movieId);
        setReviews(data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchReviews(movieId);
  }, [movieId]);

  return (
    <>
      {loading && <Loading />}
      {error && <ErrorMessage />}

      {reviews.length > 0 ? (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <h3>Author: {review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Sorry. Reviews not found</p>
      )}
    </>
  );
}
