import { useEffect, useState } from "react";
import { fetchTopFilmsApi } from "../../services/services.js";
import MoviesList from "../../components/MoviesList/MoviesList.jsx";
import css from "./HomePage.module.css";

export default function HomePage() {
  const [topik, setTopik] = useState([]);

  useEffect(() => {
    async function fetchTopFilms() {
      try {
        const newTopik = await fetchTopFilmsApi();
        setTopik(newTopik.slice(0, 10));
      } catch (error) {
        console.log(error);
      }
    }

    fetchTopFilms();
  }, []);

  return (
    <div>
      <h2 className={css.title}>TOP 10 today</h2>

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
