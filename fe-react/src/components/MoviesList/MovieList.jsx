import React, { useState, useEffect } from "react";
import Movie from "../Movie/Movie";
import { useSelector } from "react-redux";
import Pagination from "../Pagination/Pagination";
import Spinner from "../Spinner/Spinner";
import "./MovieList.scss";

const MovieList = () => {
  const movies = useSelector((state) => state.movies);
  const [isLoading, setIsLoading] = useState(false);
  const [moviesAreLoaded, setMoviesAreLoaded] = useState(
    Array.from({ length: movies.length }, () => false)
  );
  const [totalPages, setTotalPages] = useState(0);

  const resetMoviesAreLoaded = () => {
    setIsLoading(() => true);
    setMoviesAreLoaded(Array.from({ length: movies.length }, () => true));
  };

  useEffect(() => {
    if (movies.length > 0) {
      resetMoviesAreLoaded();
    }
  }, [movies]);

  const changeMoviesAreLoaded = (index) => {
    setMoviesAreLoaded((loaded) => {
      loaded[index] = false;
      return loaded;
    });
  };
  const getCurrentSizeOfArr = () => {
    if (!movies) {
      return;
    }
    if (movies.length > 0) {
      console.log(movies[0].totalPages);
      setTotalPages(() => movies[0].totalPages);
    }
  };

  useEffect(() => {
    setIsLoading(() => {
      const c = moviesAreLoaded.reduce((acc, actual) => {
        console.log("acc", acc, "actual", actual);
        return acc || actual;
      }, false);
      console.log("c", c);
      return c;
    });
  }, [moviesAreLoaded]);

  useEffect(() => {
    getCurrentSizeOfArr();
  }, [movies]);

  return (
    <section
      id="movie-list"
      className={`movie-list ${isLoading ? ` opacity` : null}`}
    >
      <Spinner isLoading={isLoading}></Spinner>
      {movies.map(
        ({ actors, title, description, score, cover, favorite, id }, index) => (
          <Movie
            id={id}
            key={id}
            actors={actors}
            title={title}
            description={description}
            score={score}
            image={cover}
            favorite={favorite}
            isLoaded={() => changeMoviesAreLoaded(index)}
            index={index}
          ></Movie>
        )
      )}
      <Pagination content={movies} quantityPages={totalPages}></Pagination>
    </section>
    // <>
    // <Ratio score="3.25"></Ratio>
    // </>
    // <div>
    // <h2>Movies < /h2>
    // < SearchBar onSearch = { handleSearch } />
    //   { error && <p>Error: { error } </p>}
    //     < ui5 - list >
    //   {
    //     movies.map((movie) => (
    //       <ui5-li key = { movie._id } >
    //       <Movie { ...movie } />
    //       </ui5-li>
    //     ))
    //   }
    //     < /ui5-list>
    //     < /div>
  );
};

// const mapStateToProps = (state) => ({
//   movies: state.movies,
//   error: state.error,
// });

// const mapDispatchToProps = {
//   fetchMovies,
//   searchMovies,
// };
export default MovieList;
// export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
