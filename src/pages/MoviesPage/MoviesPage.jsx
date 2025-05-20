import { useEffect, useState } from "react";
import { searchMovie } from "../../services/services.js";
import css from "./MoviesPage.module.css";
import MoviesList from "../../components/MoviesList/MoviesList.jsx";
import SearchMovie from "../../components/SearchMovie/SearchMovie.jsx";
import { useSearchParams } from "react-router-dom";

export default function MoviesPage() {
  const [topik, setTopik] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const searchValue = searchParams.get("query") ?? "";

  const handleChangeSearchSubmit = (newSearchValue) => {
    const nextSearchParams = new URLSearchParams(searchParams);

    if (newSearchValue !== "") {
      nextSearchParams.set("query", newSearchValue);
    } else {
      nextSearchParams.delete("query");
    }
    setSearchParams(nextSearchParams);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (searchValue.trim() === "") {
        setTopik([]);
        return;
      }

      try {
        const data = await searchMovie(searchValue);
        setTopik(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [searchValue]);

  return (
    <div>
      <SearchMovie value={searchValue} onChange={handleChangeSearchSubmit} />

      {topik.length > 0 && (
        <ul className={css.list}>
          {topik.map((topik) => (
            <MoviesList key={topik.id} topik={topik} />
          ))}
        </ul>
      )}
    </div>
  );
}
