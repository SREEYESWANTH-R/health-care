import React from 'react';
import './Doctor.css';
import {LocalHospital, SearchRounded} from '@mui/icons-material'; 
import {Card,CardActions,CardContent,CardMedia,Button,Typography} from '@mui/material';
import { Link} from 'react-router-dom';


function Doctor({doctor}) {
  
  

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
          <SearchRounded/><input placeholder="Find Doctors"></input>
        </div>
      </div>


      <div className='doctors-container'>
        <div className='doc-head'>
          <h3>Doctors To Help</h3>
          <hr></hr>
        </div>
        
        <div className="doc-card">
          {doctor.map((doctor) => (
            <Card key={doctor.id} sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={doctor.image}
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
