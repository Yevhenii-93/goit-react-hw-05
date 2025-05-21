import { Link, useLocation } from "react-router-dom";
import css from "./MoviesList.module.css";

export default function MoviesList({ topik }) {
  const location = useLocation();
  return (
    <li className={css.container}>
      <Link to={`/movies/${topik.id}`} state={location}>
        <h3>{topik.title}</h3>
        <img
          src={`https://image.tmdb.org/t/p/w500${topik.poster_path}`}
          alt={topik.title}
        />
      </Link>
    </li>
  );
}
