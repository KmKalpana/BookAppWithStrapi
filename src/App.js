import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import BookDetail from './pages/BookDetail';
import Header from './components/Header';
import Search from './pages/Search';
import React from 'react'
function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/'  element={<Home />}/>
        <Route path='/detail/:id' element={<BookDetail />}/>
        <Route path='/search/:query' element={<Search />}/>
      </Routes>
    </div>
  );
}

export default App;
