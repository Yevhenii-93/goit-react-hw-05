import css from "./MoviesList.module.css";

export default function MoviesList({ topik }) {
  console.log(topik);

  return (
    <li className={css.container}>
      <h3>{topik.title}</h3>
      <img src={`https://image.tmdb.org/t/p/w500${topik.poster_path}`} />
    </li>
  );
}
