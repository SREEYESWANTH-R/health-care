import React,{useState} from 'react';
import './Signup.css';
import { Link,useNavigate} from 'react-router-dom';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import {Button,TextField} from '@mui/material';
import  Axios  from 'axios';





function Signup(){
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPAssword] = useState("");
  const navigate = useNavigate();
  
  function handleSignup(event){
    event.preventDefault();
    Axios.post("http://localhost:3000/signup",{
        Name: name,
        Email:email,
        Password:password
    }).then((response)=>{
        console.log(response);
        navigate('/dashboard');
    }).catch((error)=>{
        console.error('Error occured during registration:', error);
    })
  }

  return (
    <div>
        <header className='header'>
            <div className='logo-sec'>
                <LocalHospitalIcon fontSize='large' style={{ color: 'blue'}} />
                <h3>Consult</h3>
            </div>
            <ul className='nav'>
                <li className='nav-item'><Button variant="contained" style={{ backgroundColor: 'blue'}}><Link className='link-a' to="/login">Login</Link></Button></li>
            </ul>
        </header>
        <div className='sign-form'>
            <h2>Register with us</h2>
            <p>your information is safe with us</p>
            <form onSubmit={handleSignup} className='signUpform'>
                <TextField
                    fullWidth
                    helperText="" 
                    id="outlined-basic"
                    label="Name" 
                    value={name}
                    variant="outlined"
                    onChange={e=>setName(e.target.value)} />
                <TextField
                    fullWidth
                    helperText="" 
                    id="outlined-basic"
                    label="Email" 
                    value={email}
                    variant="outlined"
                    onChange={e=>setEmail(e.target.value)}/>
                <TextField
                    fullWidth
                    helperText="" 
                    id="outlined-basic"
                    label="Password" 
                    value={password}
                    type='password'
                    variant="outlined"
                    onChange={e=>setPAssword(e.target.value)}
                     />
                {/* <TextField
                    fullWidth
                    helperText="" 
                    id="outlined-basic"
                    label="Confirm password " 
                    value={password}
                    variant="outlined"
                    onChange={e=>setPAssword(e.target.value)}
                    /> */}
                <Button variant="contained" style={{ backgroundColor: 'blue'}} type='submit'>SignIn</Button>
            </form>
            <p>Already have a Account?<a href=''>Login</a></p>
        </div>
    </div>
  )
}

export default Signup