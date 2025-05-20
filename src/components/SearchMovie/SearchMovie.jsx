import { useEffect, useState } from "react";
import Button from "../Button/Button";
import { useDebounce } from "use-debounce";
import css from "./SearchMovie.module.css";

export default function SearchMovie({ onChange, value }) {
  const [inputValue, setInputValue] = useState(value ?? "");
  const [debouncedValue] = useDebounce(inputValue, 1000);

  useEffect(() => {
    setInputValue(value || "");
  }, [value]);

  useEffect(() => {
    if (debouncedValue !== value) {
      onChange(debouncedValue);
    }
  }, [debouncedValue, onChange, value]);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onChange(inputValue);
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
