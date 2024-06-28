import MovieCard from "../../componentes/movieCard";
import useMovies from "../../hooks/useMovies";
import Button from "../../componentes/button";

const Home = () => {
  const { movies, nextPage, prevPage } = useMovies();

  return (
    <div>
      <h1 className="text-center text-4xl font-bold mb-8 text-white">
        Filmes da Semana
      </h1>
      <div className="background: bg-black grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        <ul>
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              posterUrl={movie.poster_path}
            />
          ))}
        </ul>
        <div className="flex justify-center space-x-4 mt-4">
          <Button
            onClick={prevPage}
            label="Voltar"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          />
          <Button
            onClick={nextPage}
            label="Avançar"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
