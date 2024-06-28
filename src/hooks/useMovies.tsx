import { useState, useEffect } from "react";
import { getMoviesWeek } from "../service/MoviesApi";
import { MovieProps } from "../types";

type UseMoviesProp = {
  page: number;
};

const useMovies = () => {
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [page, setPage] = useState<UseMoviesProp>({ page: 1 });

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await getMoviesWeek(page);
        setMovies(response.results);
      } catch (error) {
        console.error("Erro ao obter filmes:", error);
      }
    };
    fetchMovies();
  }, [page]);
  const nextPage = () => {
    setPage((prevPage) => ({ page: Math.max(prevPage.page + 1, 1) }));
  };

  const prevPage = () => {
    setPage((prevPage) => ({ page: Math.max(prevPage.page - 1, 1) }));
  };

  return { movies, nextPage, prevPage };
};

export default useMovies;
