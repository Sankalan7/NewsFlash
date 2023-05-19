import React from "react";

const MovieCard = ({ movie }) => {
  const shortenOverview = (overview) => {
    const words = overview.split(" ");
    if (words.length > 50) {
      return words.slice(0, 50).join(" ") + "...";
    } else {
      return overview;
    }
  };
  return (
    <div className="movie-card cursor-pointer w-[320px] h-[450px] relative m-6 bg-white rounded-lg shadow-lg overflow-hidden box-border">
      <div className="front absolute top-0 left-0 w-full h-full">
        <img
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt={movie.original_title}
          className="absolute h-full w-full object-cover"
        />
        <div className="absolute top-0 right-0 m-4">
          <svg viewBox="0 0 36 36" className="w-12 h-12">
            <circle
              className={
                movie.vote_average >= 7.5
                  ? "stroke-green-500"
                  : movie.vote_average >= 5
                  ? "stroke-orange-500"
                  : "stroke-red-500"
              }
              strokeWidth="2"
              fill="none"
              r="16"
              cx="18"
              cy="18"
              stroke={
                movie.vote_average >= 7.5
                  ? "green"
                  : movie.vote_average >= 5
                  ? "orange"
                  : "red"
              }
              strokeDasharray={`${movie.vote_average * 10}, 100`}
              transform="rotate(-90) translate(-36)"
            />
            <circle
              className={
                movie.vote_average >= 7.5
                  ? "fill-green-500"
                  : movie.vote_average >= 5
                  ? "fill-orange-500"
                  : "fill-red-500"
              }
              r="14"
              cx="18"
              cy="18"
            />
            <text
              className="text-white font-bold text-sm absolute"
              x="18"
              y="22"
              textAnchor="middle"
            >
              {movie.vote_average.toFixed(1)}
            </text>
          </svg>
        </div>
      </div>

      <div className="back absolute top-0 left-0 w-full h-full bg-white">
        <img
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          alt={movie.original_title}
          className="absolute h-full w-full object-cover"
        />

        <div className="absolute top-0 left-0 m-4">
          <svg viewBox="0 0 36 36" className="w-12 h-12">
            <circle
              className={
                movie.vote_average >= 7.5
                  ? "stroke-green-500"
                  : movie.vote_average >= 5
                  ? "stroke-orange-500"
                  : "stroke-red-500"
              }
              strokeWidth="2"
              fill="none"
              r="16"
              cx="18"
              cy="18"
              stroke={
                movie.vote_average >= 7.5
                  ? "green"
                  : movie.vote_average >= 5
                  ? "orange"
                  : "red"
              }
              strokeDasharray={`${movie.vote_average * 10}, 100`}
              transform="rotate(-90) translate(-36)"
            />
            <circle
              className={
                movie.vote_average >= 7.5
                  ? "fill-green-500"
                  : movie.vote_average >= 5
                  ? "fill-orange-500"
                  : "fill-red-500"
              }
              r="14"
              cx="18"
              cy="18"
            />
            <text
              className="text-white font-bold text-sm absolute"
              x="18"
              y="22"
              textAnchor="middle"
            >
              {movie.vote_average.toFixed(1)}
            </text>
          </svg>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 px-4 py-6 text-white"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9))",
          }}
        >
          <h2 className="text-2xl font-bold">{movie.title}</h2>
          <p className="text-sm">{movie.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
