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

  if (!info) {
    return;
  }
  const genresList = info.genres.map((genre) => genre.name).join(", ");
  console.log(genresList);

  return (
    <>
      {info && (
        <div>
          <div>
            <h2>{info.title}</h2>
            <p>({info.release_date})</p>
            <img
              src={`https://image.tmdb.org/t/p/w500${info.poster_path}`}
              alt={info.title}
            />
            <p>{info.vote_average.toFixed(2)}</p>
            {info.genres.length === 1 ? (
              <p>Genres: {genresList}</p>
            ) : (
              <div>1</div>
            )}
            <p>{info.tagline}</p>
          </div>
        </div>
      )}
    </>
  );
}
