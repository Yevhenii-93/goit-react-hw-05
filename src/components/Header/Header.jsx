import { NavLink } from "react-router-dom";
import css from "./Header.module.css";
import clsx from "clsx";

const getActiveClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.isActive);
};
export default function Header() {
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <NavLink className={getActiveClass} to="/">
          Home
        </NavLink>
        <NavLink className={getActiveClass} to="/movies">
          Movies
        </NavLink>
      </nav>
    </header>
  );
}
