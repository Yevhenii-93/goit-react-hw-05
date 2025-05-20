import { useEffect, useRef, useState } from "react";
import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { fetchMovieDetails } from "../../services/services";
import GoBack from "../../components/GoBack/GoBack";
import Loading from "../../components/Loading/Loading.jsx";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const location = useLocation();
  const backlinkRef = useRef(location.state);

  useEffect(() => {
    async function fetchInfo(movieId) {
      try {
        setError(false);
        setLoading(true);
        const movieInfo = await fetchMovieDetails(movieId);
        setInfo(movieInfo);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchInfo(movieId);
  }, [movieId]);

  return (
    <>
      <GoBack location={backlinkRef.current} />
      {info && (
        <div>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500${info.poster_path}`}
              alt={info.title}
            />
            <h2>{info.title}</h2>
            <p>({info.release_date})</p>
            <p>{info.vote_average.toFixed(2)}</p>
            <ul>
              {info.genres.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>

            <p>{info.tagline}</p>
          </div>
          <ul>
            <li>
              <NavLink to="reviews">Reviews</NavLink>
            </li>
            <li>
              <NavLink to="cast">Cast</NavLink>
            </li>
          </ul>

          <Outlet />
        </div>
      )}
      {loading && <Loading />}
      {error && <ErrorMessage />}
    </>
  );
}
