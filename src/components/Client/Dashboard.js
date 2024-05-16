import React ,{useState,useEffect} from 'react'
import './Dashboard.css'
import { Link } from 'react-router-dom';
import {LocalHospital,AccountCircle,SearchRounded} from '@mui/icons-material'
import {Button,Card,CardActions,CardContent,CardMedia,Typography} from '@mui/material';
import axios from "axios"
import IntroSec from '../../assests/introSec.png';



function Dashboard(){
  const [username, setUsername] = useState('');

  useEffect(() => {
    // Fetch username when component mounts
    axios.get('http://localhost:3000/dashboard')
      .then(response => {
        setUsername(response.data.username);
      })
      .catch(error => {
        console.error('Error fetching username:', error);
      });
  }, []);

  function handleLogout() {
    axios.post('http://localhost:3000/logout')
        .then(response => {
            console.log(response.data.message);
            // Perform any additional logout logic (e.g., clearing local storage, redirecting)
        })
        .catch(error => {
            console.error('Error logging out:', error);
        });
}


  return (
    <div className='dash-Container'>
      <header className='dash-head'>
        <div className='dash-logo'>
          <LocalHospital fontSize='large' style={{ color: 'blue'}} />
          <h3>Consult</h3>
        </div>
        <div className='dash-profile'>
          <AccountCircle fontSize='large'/>
          <h4>{username}</h4>
        </div>
      </header>

      <div className='dash-main-cont'>
        <div className='dash-nav'>
          <div className='dash-nav-1'>
            <button className='dash-btn'>Medic</button>
            <ul className='dash-item-list'>
              <li className='dash-items'></li>
              <li className='dash-items'><a href="#">Physcology</a></li>
              <li className='dash-items'><a href="#">Cardiology</a></li>
              <li className='dash-items'><a href="#">Gastrology</a></li>
            </ul>
          </div>
          
          <Button variant="contained" style={{ backgroundColor: 'blue'}} onClick={handleLogout}><Link className='link-a' to="/">logout</Link></Button>
        </div>
        <div class="dash-main-info">
            <div class="dash-ip">
              <SearchRounded/><input type="text" placeholder='Enter name of Doctor' class='dash-search'></input>
            </div>
            <div className='doc-cont'>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={IntroSec}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Rajan 
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                      Cardiology - 10yrs
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Cardiologist with extensive experience in non-invasive cardiac imaging and diagnostics.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default Dashboard