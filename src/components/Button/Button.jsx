import css from "./Button.module.css";

export default function Button({ type, text }) {
  return (
    <button className={css.btn} type={type}>
      {text}
    </button>
  );
}
