// import { useState} from 'react';
import './App.css';
import Home from './components/Home.js';
import Sidebar from './components/Sidebar.js';
import Header from './components/Header.js';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';


function App() {
  return (
    <>
    <Router>
      <div className="grid-container">
        <Header />
        <Sidebar />
        <div className="main-container">
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>   
    </>
  );
}

export default App;
