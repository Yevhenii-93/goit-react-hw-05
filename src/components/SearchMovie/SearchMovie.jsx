import { useState } from "react";
import Button from "../Button/Button";
import css from "./SearchMovie.module.css";
export default function SearchMovie({ onChange, value }) {
  const [inputValue, setInputValue] = useState(value);
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() !== "") {
      onChange(inputValue);
    }
  };
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.input}
        onChange={handleChange}
        name="searchValue"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        value={inputValue}
      />
      <Button type="submit" text="Search" />
    </form>
  );
}
