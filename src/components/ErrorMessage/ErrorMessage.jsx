import css from "./ErrorMessage.module.css";

export default function ErrorMessage() {
  return (
    <p className={css.errorMessage}>Ops... Error ! Please reload the page.</p>
  );
}
