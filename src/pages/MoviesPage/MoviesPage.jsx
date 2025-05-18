import { useEffect, useState } from "react";
import { fetchTopFilmsApi } from "../../services/services.js";
import css from "./MoviesPage.module.css";
import MoviesList from "../../components/MoviesList/MoviesList.jsx";
import SearchMovie from "../../components/SearchMovie/SearchMovie.jsx";

export default function MoviesPage() {
  const [topik, setTopik] = useState([]);

  useEffect(() => {
    async function fetchTopikMovies() {
      try {
        const newTopik = await fetchTopFilmsApi();
        setTopik(newTopik);
      } catch (error) {
        console.log(error);
      }
    }

    fetchTopikMovies();
  }, []);

  return (
    <div>
      <SearchMovie />

      <h2 className={css.title}>TOP 20 today</h2>
      {topik.length > 0 && (
        <ul className={css.list}>
          {topik.map((topik) => (
            <MoviesList key={topik.id} topik={topik} />
          ))}
        </ul>
      )}
    </div>
  );
}
