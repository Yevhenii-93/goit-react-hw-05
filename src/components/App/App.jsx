import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import css from "./App.module.css";

import Header from "../Header/Header";

import Reviews from "../Reviews/Reviews";
import Cast from "../Cast/Cast";
import Loading from "../Loading/Loading";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("../../pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("../../pages/MovieDetailsPage/MovieDetailsPage")
);
const NotFoundPage = lazy(() =>
  import("../../pages/NotFoundPage/NotFoundPage")
);

export default function App() {
  return (
    <div className={css.container}>
      <Header />

      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="reviews" element={<Reviews />} />
            <Route path="cast" element={<Cast />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}
