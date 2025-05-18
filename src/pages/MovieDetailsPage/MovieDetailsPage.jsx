import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "../../services/services";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [info, setInfo] = useState(null);

  useEffect(() => {
    async function fetchInfo(movieId) {
      try {
        const movieInfo = await fetchMovieDetails(movieId);
        setInfo(movieInfo);
      } catch (error) {
        console.log(error);
      }
    }

    fetchInfo(movieId);
  }, [movieId]);

  console.log(info);
  return (
    <>
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
        </div>
      )}
    </>
  );
}
