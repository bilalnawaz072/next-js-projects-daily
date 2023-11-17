"use client";
import Image from "next/image";
import { useState } from "react";
import MovieModal from "./Modal";

export default function Row({ title, movies }) {
  const [trailerUrl, setTrailerUrl] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="flex flex-col space-y-6 my-10 px-8 max-w-[1400px] mx-auto">
      <h2 className="font-semibold">{title}</h2>
      <div className="flex  space-x-6 overflow-y-hidden overflow-x-auto scrollbar-hide p-2 -m-2">
        {movies.map((movie) => (
          <Image
            key={movie.id}
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            width={200}
            height={300}
            objectFit="contain"
            className="cursor-pointer transition duration-200 transform hover:scale-105 hover:z-50"
            onClick={() => handleClick(movie)}
          />
        ))}
      </div>
      {selectedMovie && (
        <MovieModal
          isOpen={!!selectedMovie}
          movie={selectedMovie}
          onRequestClose={handleCloseModal}
        />
      )}
    </div>
  );
}
