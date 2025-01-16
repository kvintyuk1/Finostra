import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './components/header/Header';
import Footer from './components/Footer/Footer';  // Додано імпорт Footer
import Main from './components/main/Main';

function App() {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
}

export default App;
