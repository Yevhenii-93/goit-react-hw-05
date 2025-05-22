import { useEffect, useState } from "react";
import { fetchTopFilmsApi } from "../../services/services.js";
import MovieList from "../../components/MovieList/MovieList.jsx";
import css from "./HomePage.module.css";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage.jsx";
import Loading from "../../components/Loading/Loading.jsx";

export default function HomePage() {
  const [topik, setTopik] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchTopFilms() {
      try {
        setError(false);
        setLoading(true);
        const newTopik = await fetchTopFilmsApi();
        setTopik(newTopik);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchTopFilms();
  }, []);

  return (
    <div>
      <h2 className={css.title}>Trending today</h2>
      {loading && <Loading />}
      {error && <ErrorMessage />}

      {topik.length > 0 && <MovieList topik={topik} />}
    </div>
  );
}
