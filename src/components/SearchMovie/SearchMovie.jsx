import Button from "../Button/Button";

import css from "./SearchMovie.module.css";

export default function SearchMovie() {
  return (
    <form className={css.form}>
      <input className={css.input} />
      <Button type="button" text="Search" />
    </form>
  );
}
