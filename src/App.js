import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import { Title } from "./components/Title";
import { SearchForm } from "./components/SearchForm";
import { MovieList } from "./components/MovieList";
import { useState } from "react";

function App() {
  const [movieList, setMovieList] = useState([]);

  const addMovie = (movie) => {
    //filter out the movie if already in he list

    const filteredMovies = movieList.filter(
      (item) => item.imdbID !== movie.imdbID
    );
    //add the incoming movie
    setMovieList([...filteredMovies, movie]);
  };
  const deleteMovie = (id) => {
    console.log(id);

    if (!window.confirm("Are you sure?")) {
      return;
    }
    setMovieList(movieList.filter((item) => item.imdbID !== id));
  };
  return (
    <div className="wrapper ">
      <Container>
        <Title />
        <SearchForm func={addMovie} />
        <MovieList deleteMovie={deleteMovie} movieList={movieList} />
      </Container>
    </div>
  );
}

export default App;
