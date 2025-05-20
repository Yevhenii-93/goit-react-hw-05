import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzc3OTRkOGI5NzliNTY5MWY2ZjM5ZjVjMmQyNDMzZiIsIm5iZiI6MTc0NzQ4NDk0Ny4xNDQsInN1YiI6IjY4Mjg4MTEzN2M5ZDI3OThlOWRiMjE4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KQNhpvLpCeazyiLxSIDDotnEW2HiPFnV7QvrxpN-UOg",
  },
};

export const fetchTopFilmsApi = async () => {
  const response = await axios("/trending/movie/day", options);
  return response.data.results;
};

export const fetchMovieDetails = async (movieId) => {
  const response = await axios(`/movie/${movieId}`, options);
  return response.data;
};

export const searchMovie = async (searchValue) => {
  const response = await axios(`/search/movie?query=${searchValue}`, options);
  return response.data.results;
};
