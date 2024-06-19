interface Movie {
  title: string;
  posterUrl: string;
}

const MovieCard = ({ title, posterUrl }: Movie) => {
  return (
    <div className="bg-red-800 rounded-lg shadow-md p-4">
      <img src={posterUrl} alt={title} className="w-full h-auto" />
      <h3 className="text-lg font-semibold mt-2 text-white">{title}</h3>
    </div>
  );
};

export default MovieCard;
