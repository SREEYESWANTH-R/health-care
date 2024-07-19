import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { LocalHospital, AccountCircle, MedicationLiquid, AccountBalanceWallet, AccessibleForward, Close } from '@mui/icons-material';
import './AdminDash.css';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

function AdminDash() {
  const [appointments, setAppointments] = useState([]);

  function getAppoinment() {
    axios.get('http://localhost:3000/admin/dashboard')
      .then(response => {
        const updatedAppointments = response.data.map(appointment => ({ ...appointment, status: 'Active' }));
        setAppointments(updatedAppointments);
      })
      .catch(error => {
        console.error("Error fetching appointment details:", error);
      });
  }

  useEffect(() => {
    getAppoinment();
  }, []);

  function handleDelete(id) {
    axios.post('http://localhost:3000/admin/appointment/delete', { id })
      .then(response => {
        console.log(response.data.message);
        getAppoinment(); // Refresh the appointment list after deletion
      })
      .catch(error => {
        console.error("Error deleting appointment:", error);
      });
  }

  function handleStatus(index) {
    const updatedAppointments = [...appointments];
    updatedAppointments[index].status = 'Done';
    setAppointments(updatedAppointments);
  }

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
            <li className='side-items'><AccessibleForward style={{ color: 'blue' }} /><Link to='/admin/add-doctor' style={{textDecoration:'none'}}>Doctors</Link></li>
            <li className='side-items'><MedicationLiquid style={{ color: 'blue' }} /><a href=''>Medicine</a></li>
            <li className='side-items'><AccountBalanceWallet style={{ color: 'blue' }} /><a href=''>Billing</a></li>
          </ul>
          <Button variant="contained" style={{ backgroundColor: 'blue' }} type='submit'>Logout</Button>
        </div>
        <div className='app-main'>
          Hello
        </div>
        <div className='appoint-card'>
          <h3>Appointment</h3>
          {appointments.map((appointment, index) => (
            <div key={index} className='appointment-card'>
              <div className='apt-status' id='apt-status'>
                <p id='active' style={{fontWeight:'bold' ,color: appointment.status === 'Active' ? 'red' : 'green' }}>{appointment.status}</p>
                <Close style={{ fontSize: 'small' }} onClick={() => handleDelete(appointment.id)} />
              </div>
              <h4>Name: {appointment.name}</h4>
              <p>Doctor: {appointment.doctor}</p>
              <p>Age: {appointment.age}</p>
              <p>Gender: {appointment.gender}</p>
              <p>Address: {appointment.address}</p>
              <p>Mobile Number: {appointment.mobNum}</p>
              <Button variant="contained" style={{ backgroundColor: 'blue' }} 
                type='submit'
                id='statBtn'
                onClick={() => handleStatus(index)}>
                Checked
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminDash;
