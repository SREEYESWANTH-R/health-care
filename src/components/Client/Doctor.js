import React,{useState,useEffect} from 'react';
import axios from 'axios'
import './Doctor.css';
import {LocalHospital, SearchRounded} from '@mui/icons-material'; 
import {Card,CardActions,CardContent,CardMedia,Button,Typography} from '@mui/material';
import { Link} from 'react-router-dom';


function Doctor({doctor}) {
   
  const[image, setImage] = useState([])
  const[docInt, setDocint] = useState('')

  async function unsplashAPI(){
    try {
      const response = await axios.get('https://api.unsplash.com/search/photos', {
        params: {
          client_id: 'qNh0VB3JMEVdlJEs5HlYRMKHkRvWOoGCsR8pExv5x2Q',
          query: 'doctor',
          per_page: doctor.length, 
        },
      });
      setImage(response.data.results.map((result) => result.urls.small));
    } catch (error) {
      console.error('Error fetching image from Unsplash API', error);
    }
  }
  
  useEffect(()=>{
    if (doctor.length > 0) {
      unsplashAPI();
    }
  },[doctor])

 

  return (
    <div>
      <header className='header'>
        <div className='logo-sec'>
            <LocalHospital fontSize='large' style={{ color: 'blue' }} />
          <h3>Consult</h3>
        </div>
      </header>

      <div className='doc-search'>
        <div className='search-bar'>
          <SearchRounded/><input placeholder="Find Doctors" value={docInt} onChange={e =>{setDocint(e.target.value)}}></input>
        </div>
      </div>


      <div className='doctors-container'>
        <div className='doc-head'>
          <h3>Doctors To Help</h3>
          <hr></hr>
        </div>
        
        <div className="doc-card">
          {doctor.map((doctor,index) => (
            <Card key={doctor.id} sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={image[index] || ''}
              title={doctor.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {doctor.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {doctor.gender}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {doctor.location}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {doctor.expertise}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {doctor.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small"><Link to ={ `/dashboard/DocDetails/${doctor.id}`}>Learn More</Link></Button>
            </CardActions>
          </Card>
            
        ))}   
      </div>
      </div>
    </div>
  );
}

export default Doctor;
