import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './components/header/Header';
import Footer from './components/Footer/Footer';  // Додано імпорт Footer

import Layout from "./pages/Layout/Layout";
import Main from "./components/main/Main";
import Transaction from "./components/Transaction/Transaction";
import Connection from "./components/Сonnection/Connection";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Main/>}/>
                <Route path="transactions" element={<Transaction/>}/>
                <Route path="connection" element={<Connection/>}/>
            </Route>

        </Routes>

    </BrowserRouter>
  );
}

export default App;
