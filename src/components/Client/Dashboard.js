import React ,{useState,useEffect} from 'react'
import './Dashboard.css'
import { Link} from 'react-router-dom';
import {LocalHospital,AccountCircle,SearchRounded} from '@mui/icons-material'
import {Button} from '@mui/material';
import axios from "axios";
import docIcon from '../../assests/doctor_1021566 (2).png'
import labIcon from '../../assests/lab-equipment_7918229.png'
import docVideo from '../../assests/doc.mp4'
import ApointIcon from '../../assests/appoinmentIcon.png'


function Dashboard(){
  const [username, setUsername] = useState('');
 

  useEffect(() => {
      dash();
  }, []);

  function dash(){
    axios.get('http://localhost:3000/dashboard')
    .then(response => {
      setUsername(response.data.username);
    })
    .catch(error => {
      console.error('Error fetching username:', error);
    });
  }

  function handleLogout() {
    axios.post('http://localhost:3000/logout')
        .then(response => {
            console.log(response.data.message);
            
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
      <div className='dash-nav1'>
        <button className='dash-btn'><Link to="/dashboard/pharmacy" className='phar'>Pharmacy</Link></button>
        <div className='dash-nav-1'>
           <ul className='dash-item-list'>
             <li className='dash-items'><Link to='/dashboard/doctors'>Physcology</Link></li>
             <li className='dash-items'><Link to='/dashboard/doctors'>Gastrology</Link></li>
             <li className='dash-items'><Link to='/dashboard/doctors'>Cardiology</Link></li>
           </ul>
        </div>
         
         <Button variant="contained" style={{ backgroundColor: 'blue'}} onClick={handleLogout}><Link className='link-a' to="/">logout</Link></Button>
      </div>

      <div className='dash-main-cont'>
        <div class="dash-main-info">
            <div class="dash-ip">
              <SearchRounded/><input type="text" placeholder='Enter name of Doctor' class='dash-search'></input>
            </div>
            <div className='services'>
              <h4>SERVICES FOR YOU</h4>
              <hr></hr>
            </div>
           
            <div className='dash-infos'>
              <div className='infos infos1'>
                <img src={docIcon}></img>
                <div className='if1'>
                  <h1>DOCTORS</h1>
                  <p>Fight your germs with experts and keep your health on point</p>
                  <Button variant="contained" style={{ backgroundColor: 'blue' }} type='submit'><Link className='link-a' to='/dashboard/doctors'>Find Now</Link></Button>
                </div>
              </div>
              <div className='infos infos2'>
                <img src={labIcon}/>
                <div className='if1'>
                    <h1>LAB TESTS</h1>
                    <p>Get to know about your health using our lab machines</p>
                    <button>Start Now ></button>
                </div>
              </div>
            </div>
            <div className='dash-vi'>
                <video src={docVideo} autoplay loop muted />
                <div className='vid-content'>
                  <h1>CONSULT</h1>
                  <h3>Where Your Health is in Good Hands.</h3>
                  <p>At our practice, we prioritize your health and well-being through personalized consultations. Our experienced doctors provide comprehensive evaluations, ensuring every concern is addressed with the utmost care and expertise. Whether you need routine check-ups or specialized advice, we are dedicated to offering clear, compassionate, and effective medical guidance tailored to your unique needs. Your health is our mission, and we are here to support you every step of the way.</p>
                </div>
            </div>
            <div className='inst-appoint'>
              <div className='inst-col-1'> 
                <img src={ApointIcon}></img>
                <div className='inst-det'>
                  <h2>INSTANT APPOINMENT</h2>
                  <p>Make your appoinment fast and easy with the doctors instantly</p>
                  <button><Link className='link-a' style={{color:"black",fontWeight:'600'}} to='/dashboard/appoinment'>APPOINMENT</Link></button>
                </div>
              </div>
              <div className='inst-col-2'>
                <h3>How does It works</h3>
                <ul className='inst-det-lst'>
                  <li>Click on the appoinment Button</li>
                  <li>Fill in the required details</li>
                  <li>Make an appoinment as easy as that</li>
                </ul>
              </div>
             
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default Dashboard