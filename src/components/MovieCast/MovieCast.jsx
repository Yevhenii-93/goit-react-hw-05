import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "../../services/services";
import Loading from "../Loading/Loading";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchCast(movieId) {
      try {
        setError(false);
        setLoading(true);
        const data = await fetchMovieCast(movieId);
        setCast(data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchCast(movieId);
  }, [movieId]);
  return (
    <>
      {loading && <Loading />}
      {error && <ErrorMessage />}

      {cast.length > 0 ? (
        <ul>
          {cast.map((actor) => (
            <li key={actor.cast_id}>
              <img
                src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                alt={actor.name}
              />
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Sorry. Cast not found</p>
      )}
    </>
  );
}
