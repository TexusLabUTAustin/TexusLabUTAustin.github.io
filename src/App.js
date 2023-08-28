import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as  Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Graph1 from "./components/pages/Graph1";
import React, {useEffect, useState} from "react";
import Papa from "papaparse";
import Graph2 from "./components/pages/Graph2";
import People from "./components/pages/People";

function App() {

  const csvPages = [
  {
    csvFile: '/temperature_data.csv',
    component: Graph1,
  },
  {
    csvFile: '/temp_data_2.csv',
    component: Graph2,
  },
  // Add more objects for additional pages and CSV files
];

  const [csvData, setCsvData] = useState([]);

  useEffect(() => {
    fetchCsvData();
  }, []);

  const fetchCsvData = async () => {
  try {
    const parsedDataArray = [];

    for (const page of csvPages) {
      const response = await fetch(page.csvFile);
      const text = await response.text();
      const parsedData = parseCSV(text);
      parsedDataArray.push(parsedData);
    }

    setCsvData(parsedDataArray);
  } catch (error) {
    console.error('Error fetching CSV data:', error);
  }
};

  const parseCSV = (csvText) => {
    const { data } = Papa.parse(csvText, { header: true });
    return data;
  };


  return (
    <>
    <Router>
      <Navbar />
      <Routes>
      <Route path='/' exact element={ <Home />}></Route>
      <Route path="/People" element={<People />} />
      {csvPages.map((page, index) => (
      <Route
        key={index}
        path={`/graph${index + 1}`}
        element={React.createElement(page.component, { data: csvData[index] })}
      />

    ))}
      </Routes>

      </Router>

    </>
  );
}

export default App;
