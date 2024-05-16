import React, { useState } from 'react';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import { Link, useNavigate } from 'react-router-dom';
import "./Login.css";
import { Button, TextField } from '@mui/material';
import Axios from 'axios';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [error,setError] = useState("");
  const navigate = useNavigate(); // Use useNavigate hook

  function handleLogin(event) {
    event.preventDefault();
    Axios.post("http://localhost:3000/login", {
      Email: email,
      password: password
    })
    .then(response => {
      
      if (response.data.success) {
        console.log("Login successful");
        navigate('/dashboard');

      } else {
        alert("Login failed. Please check your credentials.");
      }
    })
    .catch(error => {
      console.error('Error logging in:', error);
      alert("An error occurred while logging in. Please try again later.");
    });
  }
  

  return (
    <div>
      <header className='header'>
        <div className='logo-sec'>
          <LocalHospitalIcon fontSize='large' style={{ color: 'blue' }} />
          <h3>Consult</h3>
        </div>
        <ul className='nav'>
          <li className='nav-item'>
            <Button variant="contained" style={{ backgroundColor: 'blue' }}>
              <Link className='link-a' to="/signup">SignIn</Link>
            </Button>
          </li>
        </ul>
      </header>
      <div className='login-form'>
        <h2>Login with us</h2>
        <p>Your information is safe with us!!</p>
        <form onSubmit={handleLogin} className="loginform">
          <TextField
            required
            fullWidth
            helperText=""
            id="outlined-basic"
            label="Email"
            value={email}
            variant="outlined"
            onChange={e => setEmail(e.target.value)} />
          <TextField
            required
            fullWidth
            helperText=""
            id="outlined-basic"
            label="Password"
            value={password}
            type='password'
            variant="outlined"
            onChange={e => setPassword(e.target.value)}
          />
          <Button variant="contained" style={{ backgroundColor: 'blue' }} type='submit'>Login</Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
