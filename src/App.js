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
import doctor from './DoctorList'
import DocDetail from './components/Client/DocDetail';
import Pharmacy from './components/Client/Pharmacy';
import AddDoc from './components/Admin/AddDoc';

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
        <Route path="/admin/dashboard" element={<AdminDash/>}/>
        <Route path="/admin/add-doctor" element={<AddDoc/>}/>
        <Route path="/dashboard/pharmacy" element={<Pharmacy/>}/>
        <Route path="/dashboard/appoinment" element={<Appoinment details = {doctor}/>}/>
        <Route path="/dashboard/doctors" element={<Doctor doctor ={doctor} />}/>
        <Route path="/dashboard/DocDetails/:id" element={<DocDetail doctors = {doctor}/>}/>
      </Routes>
    </div>
  </Router></>
  );
}

export default App;
