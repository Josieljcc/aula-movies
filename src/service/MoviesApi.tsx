import { apiKey } from "../hooks/constants";

type GetMoviesWeekType = {
  page: number;
};

export const getMoviesWeek = async ({ page }: GetMoviesWeekType) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${page}`
  );
  const movies = response.json();
  return movies;
};
