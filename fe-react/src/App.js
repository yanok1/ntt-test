import './App.scss';
import MovieList from "./components/MoviesList/MovieList"
import SearchBar from './components/SearchBar/SearchBar';
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from "./store/actions/movieActions";
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
  const movieList = useRef(null)
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const page = useSelector((state) => state.page);


  const makeQuery = () => {
    if (!query) return
    fetchMovies(query, page)(dispatch)
    if (movieList.current) {
      movieList.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  useEffect(() => {
    makeQuery()
  }, [page])

  return (
    <div className="app">
    <Header title="Header"></Header>
    <main className="main">
      <div className="content">
        
        <SearchBar query={query} setQuery={setQuery} onSearch={makeQuery}></SearchBar>
        <div ref={movieList}>
          <MovieList ></MovieList>
        </div>

      </div>
    </main>
    <Footer title="Footer"></Footer>
    </div>
  );
}

export default App;
