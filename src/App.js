import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Button from "./components/Button";
import Card from "./components/Card";
import Header from "./components/Header";
import Movie from './components/Movie';
import Navbar from "./components/Navbar";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Button />} />
          <Route exact path="/card" element={<Card />} />
          <Route exact path="/header" element={<Header />} />
          <Route exact path="/movie" element={<Movie />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
