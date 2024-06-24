import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { LocalHospital, AccountCircle,MedicationLiquid, AccountBalanceWallet, AccessibleForward} from '@mui/icons-material';
import './AdminDash.css';
import { Button} from '@mui/material';

function AdminDash() {
  const [appointments, setAppointments] = useState([]);

  function getAppoinment(){
    axios.get('http://localhost:3000/admin/dashboard')
      .then(response => {
        setAppointments(response.data);
      })
      .catch(error => {
        console.error("Error fetching appointment details:", error);
      });
  }

  useEffect(() => {
    getAppoinment()
  }, []);

  function handleClicked(){ }

  return (
    <div className='adminlog-cont'>
      <header className='admin-head'>
        <div className='admin-logo'>
          <LocalHospital fontSize='large' style={{ color: 'blue' }} />
          <h3>Consult</h3>
        </div>
        <div className='admin-profile'>
          <AccountCircle fontSize='large' />
          <h4>ADMIN</h4>
        </div>
      </header>
      <div className='appoinment-block'>
      <div className='sideBar-admin'>
        <ul>
          <li className='side-items'><AccessibleForward style={{ color: 'blue' }}/><a href=''>Doctos</a></li>
          <li className='side-items'><MedicationLiquid style={{ color: 'blue' }}/><a href=''>Medicine</a></li>
          <li className='side-items'><AccountBalanceWallet style={{ color: 'blue' }}/><a href=''>Billing</a></li>
        </ul>
        <Button variant="contained" style={{ backgroundColor: 'blue' }} type='submit'>Logout</Button>
      </div>
      <div className='app-main'>
        Hello
      </div>
      <div className='appoint-card'>
          <h3>Appoinment</h3>
          
           {appointments.map((appointment, index) => (
            <div key={index} className='appointment-card'>
              <h4>Name: {appointment.name}</h4>
              <p>Age: {appointment.age}</p>
              <p>Gender: {appointment.gender}</p>
              <p>Address: {appointment.address}</p>
              <p>Mobile Number: {appointment.mobNum}</p>
              <Button variant="contained" style={{ backgroundColor: 'blue' }} type='submit'  >Checked</Button>
            </div>
          ))}
      </div>
       
      </div>
    </div>
  );
}

export default AdminDash;
