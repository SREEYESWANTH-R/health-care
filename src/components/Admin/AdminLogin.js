import React,{useState } from 'react'
import './AdminLogin.css'
import { LocalHospital } from '@mui/icons-material';
import { Button, TextField } from '@mui/material';
import Axios from 'axios';
import {  useNavigate } from 'react-router-dom';

function AdminLogin(){

  const [adminName, setAdName] = useState("");
  const [adPassword, setAdPass] =useState("");
  // const [nameerror,setnameError] = useState("");
  const navigate = useNavigate();

  function handleAdlogin(event){
    event.preventDefault();

    Axios.post('http://localhost:3000/adminlogin',
    {adminName,adPassword})
    .then(response=>{
      if(response.data.success){
        console.log("Login Successful");
        navigate('/adminDash');
      }else{
        alert(response.data.message);
      }
    })
    .catch(error =>{
      console.error("Error Logging in:",error);
      alert("An error occurred while logging in. Please try again later.");
    })
  }


  return (
    <div className='adlog-cont'>
      <header className='adlog-header'>
        <div className='adlogo-sec'>
          <LocalHospital fontSize='large' style={{ color: 'blue' }} />
          <h3>Consult</h3>
        </div>
      </header>
      <div className='adlog-form'>
        <h2>Login with us</h2>
        <p>Your information is safe with us!!</p>
        <form onSubmit={handleAdlogin} className='adloginform'>
        <TextField
            required
            fullWidth
            type='text'
            id="outlined-basic"
            label="Name"
            value={adminName}
            variant="outlined"
            onChange={e=>setAdName(e.target.value)}
           />
        <TextField
            required
            fullWidth
            type = 'password'
            value={adPassword}
            id="outlined-basic"
            label="Password"
            variant="outlined"
            onChange={e => setAdPass(e.target.value)}
         />
         <Button variant="contained" style={{ backgroundColor: 'blue' }} type='submit'>Login</Button>
        </form>
      </div>
    </div>
  )
}

export default AdminLogin;