import React from 'react';
import './App.css';
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/header/Header";

function App() {
   return (
       <BrowserRouter>
           <Header />
       </BrowserRouter>
   )
}

export default App;
