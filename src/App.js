// import { useState} from 'react';
import './App.css';
import Home from './components/Home.js';
import Sidebar from './components/Sidebar.js';
import Header from './components/Header.js';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import AcademyManagement from './Pages/AcademyManagement.js'
import Dashboard from './Pages/Dashboard.js'
import Attendance from './Pages/Attendance.js'
import Coaches from './Pages/Coaches.js'
import Schedule from './Pages/Schedule.js'
import Enquiries from './Pages/Enquiries.js'
import Reports from './Pages/Reports.js'
import FeePayment from './Pages/FeePayment.js'
import Settings from './Pages/Settings.js';
import Notifications from './Pages/Notifications.js';


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
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/academy' element={<AcademyManagement/>}/>
            <Route path='/feepayment' element={<FeePayment/>}/>
            <Route path='/attendance' element={<Attendance/>}/>
            <Route path='/enquiries' element={<Enquiries/>}/>
            <Route path='/schedule' element={<Schedule/>}/>
            <Route path='/reports' element={<Reports/>}/>
            <Route path='/students' element={<Schedule/>}/>
            <Route path='/coaches' element={<Coaches/>}/>
            <Route path='/settings' element={<Settings/>}/>
            <Route path='/notifications' element={<Notifications/>}/>
          </Routes>
        </div>
      </div>
    </Router>   
    </>
  );
}

export default App;
