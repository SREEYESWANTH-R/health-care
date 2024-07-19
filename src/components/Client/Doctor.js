import React,{useState,useEffect} from 'react';
import axios from 'axios'
import './Doctor.css';
import {LocalHospital, SearchRounded} from '@mui/icons-material'; 
import {Card,CardActions,CardContent,CardMedia,Button,Typography} from '@mui/material';
import { Link} from 'react-router-dom';


function Doctor({doctor}) {
   
  // const[image, setImage] = useState([])
  const[docInt, setDocint] = useState('')
  const [filteredDoctors, setFilteredDoctors] = useState([]);

  async function unsplashAPI(){
    try {
      const response = await axios.get('https://api.unsplash.com/search/photos', {
        params: {
          client_id: 'qNh0VB3JMEVdlJEs5HlYRMKHkRvWOoGCsR8pExv5x2Q',
          query: 'doctor',
          per_page: doctor.length, 
        },
      });
      // setImage(response.data.results.map((result) => result.urls.small));
      const image = response.data.results.map((result) => result.urls.small);
      const doctorWithImages = doctor.map((doc,index)=> ({...doc, image:image[index]}));
      setFilteredDoctors(doctorWithImages)

    } catch (error) {
      console.error('Error fetching image from Unsplash API', error);
    }
  }
  
  useEffect(()=>{
    if (doctor.length > 0) {
      unsplashAPI();
    }
  },[doctor])

  useEffect(() => {
    const filtered = doctor.filter(d =>
      d.name.toLowerCase().includes(docInt.toLowerCase())
    );
    setFilteredDoctors(filtered);
  }, [docInt, doctor]);

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
          {filteredDoctors.map((doc) => (
            <Card key={doc.id} sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={doc.image || ''}
              title={doc.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {doc.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {doc.gender}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {doc.location}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {doc.expertise}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {doc.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small"><Link to ={ `/dashboard/DocDetails/${doc.id}`}>Learn More</Link></Button>
            </CardActions>
          </Card>
            
        ))}   
      </div>
      </div>
    </div>
  );
}

export default Doctor;
