import './App.css';

import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Resume from './components/Resume';
import Homepage from './components/Homepage';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <BrowserRouter>

        <Header />

        <Routes>

          <Route exact path='/' element={<Homepage />} />
          <Route exact path='/resume' element={<Resume />} />
          <Route exact path='/contact' element={<Contact />} />

        </Routes>

        {/* <Footer /> */}

      </BrowserRouter>

    </div>
  );
}

export default App;
