import React, { useState } from 'react'
import './Appoinment.css'
import { Button, TextField } from '@mui/material';
import { Textarea } from '@mui/joy';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital'; 
import axios from "axios";




function Appoinment(){
   
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");

  function handleAppoinment(event){
    event.preventDefault()
    axios.post("http://localhost:3000/appoinment",{
      name,age,gender,mobile,address
    }).then((response)=>{
      console.log(response);
    }).catch((error)=>{
      console.error("Error during making the appoinment",error);
    })
  }

  
  return (
    <div className='Apoint-cont'>
        <header className='header'>
        <div className='logo-sec'>
          <LocalHospitalIcon fontSize='large' style={{ color: 'blue' }} />
          <h3>Consult</h3>
        </div>
        </header>
       
           
        <div className='Apoint-form'>
            <h1>Make Your Appoinment With US</h1>
            <p>Your health is your most valuable asset. Take the first step towards a healthier you today</p>
 
          <form className='appForm' onSubmit={handleAppoinment}>
            <TextField
                required
                fullWidth
                helperText=""
                id="outlined-basic"
                label="Name"
                value = {name}
                variant="outlined"
                onChange={e=>{setName(e.target.value)}}
            />
            <TextField
                required
                fullWidth
                helperText=""
                id="outlined-basic"
                value = {age}
                label="Age"
                variant="outlined"
                onChange={e => {setAge(e.target.value)}}
            />
            <TextField
                required
                fullWidth
                helperText=""
                id="outlined-basic"
                value = {gender}
                label="Gender"
                variant="outlined"
                onChange={ e => {setGender(e.target.value)}}
            />
            <TextField
                required
                fullWidth
                helperText=""
                id="outlined-basic"
                value = {mobile}
                label="Mobile Number"
                variant="outlined"
                onChange={e => {setMobile(e.target.value)}}
            />
            <Textarea
              required
              fullWidth
              minRows={3}
              value = {address}
              placeholder="Address"
              onChange={e => {setAddress(e.target.value)}}
            />
            <Button variant="contained" style={{ backgroundColor: 'blue' }} type='submit'>Confirm</Button>
          </form>
        </div>
    </div>
  )
}

export default Appoinment