import './App.scss';
import MovieList from "./components/MoviesList/MovieList"
import SearchBar from './components/SearchBar/SearchBar';
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from "./store/actions/movieActions";
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import PageTitle from './components/PageTitle/PageTitle'

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
      <PageTitle title="Title" description="Mussum Ipsum, cacilds vidis litro abertis. Paisis, filhis, espiritis santis. Segunda-feiris nun dá, eu vô me pirulitá! Copo furadis é disculpa de bebadis, arcu quam euismod magna. Casamentiss faiz malandris se pirulitá."></PageTitle>
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
