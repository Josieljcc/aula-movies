import { useEffect, useState } from "react";
import { getMoviesWeek } from "../../service/MoviesApi";
import MovieCard from "../../componentes/movieCard";

const Home = () => {
  const [movies, setMovies] = useState<any[]>([]);
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await getMoviesWeek();
        setMovies(response.results);
      } catch (error) {
        console.error("Erro ao obter filmes:", error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div className="background: bg-black grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
      <h1 className="text-center text-4xl font-bold mb-8 text-white">
        Filmes da Semana
      </h1>
      <div>
        <ul>
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              posterUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
