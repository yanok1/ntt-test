import React, { useState, useEffect } from "react";
import Movie from "../Movie/Movie";
import { useSelector } from "react-redux";
import Pagination from "../Pagination/Pagination";
import "./MovieList.scss";

const MovieList = () => {
  const movies = useSelector((state) => state.movies);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    if (!movies) {
      return;
    }
    if (movies.length > 0) {
      setTotalPages(() => movies[0].totalPages);
    }
  }, [movies]);

  return (
    <section id="movie-list">
      {movies.map(
        ({ actors, title, description, score, cover, favorite, id }, index) => (
          <Movie
            key={`${id}-${index}`}
            id={id}
            actors={actors}
            title={title}
            description={description}
            score={score}
            image={cover}
            favorite={favorite}
            index={index}
          ></Movie>
        )
      )}
      <Pagination content={movies} quantityPages={totalPages}></Pagination>
    </section>
  );
};

export default MovieList;
