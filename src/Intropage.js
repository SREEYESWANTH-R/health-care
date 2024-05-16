import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Intropage.css';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import Button from '@mui/material/Button';
import IntroSec from './assests/introSec.png';


function Intropage() {
  return (
    <div className='intro-container'>
      <header className='header'>
        <div className='logo-sec'>
          <LocalHospitalIcon fontSize='large' style={{ color: 'blue'}} />
          <h3>Consult</h3>
        </div>
        <ul className='nav'>
          {/* Use Link instead of anchor tag */}
          <li className='nav-item'><Button variant="contained" style={{ backgroundColor: 'blue'}}><Link className='link-a' to="/signup">SignIn</Link></Button></li>
          <li className='nav-item'><Button variant="contained" style={{ backgroundColor: 'blue'}}><Link className='link-a' to="/login">LogIn</Link></Button></li>
          <li className='nav-item'><Button variant="contained" style={{ backgroundColor: 'blue'}}><Link className='link-a' to="/adminlogin">Admin</Link></Button></li>
        </ul>
      </header>
      <div className='intro'>
        <div className='about-sec'>
          <h2>Consult Specialist Doctors Securely and Privately </h2>
          <p>Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the 
            industry's standard dummy text ever since the 1500s
            , when an unknown printer took a galley of type 
            and scrambled it to make a type specimen book
          </p>
          <Button variant='contained' style={{ backgroundColor: 'blue'}}>SEE MORE</Button>
        </div>
        <div className='imgIntro-sec'>
          <img src={IntroSec} style={{width:'100%', height:'100%'}} alt="into-img"/>
        </div>
      </div>
      <footer className='footer'>
        <div></div>
        <div className='contactUs'>
          
        </div>
      </footer>
    </div>
  );
}

export default Intropage;
