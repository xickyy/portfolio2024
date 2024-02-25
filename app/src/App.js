import './App.css';

import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";


function App() {
  return (
    <div>
      <BrowserRouter>

        <Header />

        <Routes>

        </Routes>

        {/* <Footer /> */}

      </BrowserRouter>

    </div>
  );
}

export default App;
