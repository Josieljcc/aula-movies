const apiKey = "1a93463100c76c8e5fd1c293eabaca13";

export const getMoviesWeek = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}`
  );
  const movies = response.json();
  return movies;
};
