import Modal from "react-modal";
import Image from "next/image";
import YouTube from "react-youtube";
import { useEffect, useState } from "react";
import movieTrailer from "movie-trailer";

// Modal.setAppElement('#__next')

export default function MovieModal({ isOpen, movie, onRequestClose }) {
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    movieTrailer(movie?.name || movie?.title || movie?.original_name || "")
      .then((url) => {
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get("v"));
      })
      .catch((error) => console.log(error));
  }, [movie]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Movie Details"
      className="flex flex-col bg-black text-white p-6 gap-4 rounded-lg w-full max-w-2xl mx-auto mt-20"
    >
      <button onClick={onRequestClose} className="flex justify-end">
        ❌
      </button>
      <div className="flex flex-row">
        <div className="w-1/3">
          <Image
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            width={200}
            height={300}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        <div className="w-2/3 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold">
              {movie.title || movie.original_name}
            </h2>
            <p className="text-sm py-2">{movie.overview}</p>
          </div>
          {trailerUrl && (
            <div className="mt-4">
              <YouTube
                videoId={trailerUrl}
                opts={{
                  height: "220",
                  width: "420",
                  playerVars: { autoplay: 0 },
                }}
              />
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
}
