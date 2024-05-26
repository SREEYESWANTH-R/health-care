import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Intropage from './Intropage';
import Signup from './components/Client/Signup';
import Login from './components/Client/Login';
import Dashboard from './components/Client/Dashboard';
import AdminLogin from './components/Admin/AdminLogin';
import AdminDash from './components/Admin/AdminDash';
import Appoinment from './components/Client/Appoinment'
import Doctor from './components/Client/Doctor'

function App() {
  return (
    <><Router>
    <div>
      <Routes>
        <Route path="/" element={<Intropage/>} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/adminlogin" element={<AdminLogin/>}/>
        <Route path="/adminDash" element={<AdminDash/>}/>
        <Route path="/dashboard/appoinment" element={<Appoinment/>}/>
        <Route path="/dashboard/doctors" element={<Doctor/>}/>
      </Routes>
    </div>
  </Router></>
  );
}

export default App;
