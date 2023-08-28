import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as  Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';

import React, {useEffect, useState} from "react";
import Papa from "papaparse";
import People from "./components/pages/People";

function App() {




  return (
    <>
    <Router>
      <Navbar />
      <Routes>
      <Route path='/' exact element={ <Home />}></Route>
      <Route path="/People" element={<People />} />

      </Routes>

      </Router>

    </>
  );
}

export default App;
