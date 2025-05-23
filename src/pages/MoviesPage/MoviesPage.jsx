import { useEffect, useState } from "react";
import { searchMovie } from "../../services/services.js";
import MovieList from "../../components/MovieList/MovieList.jsx";
import SearchMovie from "../../components/SearchMovie/SearchMovie.jsx";
import { useSearchParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading.jsx";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage.jsx";

export default function MoviesPage() {
  const [topik, setTopik] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  const searchValue = searchParams.get("query") ?? "";

  const handleChangeSearchSubmit = (newSearchValue) => {
    setSearchParams({ query: newSearchValue });
  };

  useEffect(() => {
    const fetchData = async () => {
      if (searchValue.trim() === "") {
        setTopik([]);
        return;
      }

      try {
        setError(false);
        setLoading(true);
        const data = await searchMovie(searchValue);
        setTopik(data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchValue]);

  return (
    <div>
      <SearchMovie value={searchValue} onChange={handleChangeSearchSubmit} />

      {loading && <Loading />}
      {error && <ErrorMessage />}

      {topik.length > 0 && <MovieList topik={topik} />}
    </div>
  );
}
