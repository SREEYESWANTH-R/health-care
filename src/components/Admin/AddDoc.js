import React,{useState} from 'react'
import './AddDoc.css'
import { Button, TextField,Input} from '@mui/material';
import axios from 'axios'


function AddDoc(){

const [name,setName] = useState('');
const [gender,setGender] = useState('')
const [location,setLocation] = useState('')
const [expertise,setExpertise] = useState('')
const [description,setDesc] = useState('')
const [image,setImage] = useState()

 
 function docDetails(event){
        event.preventDefault()
        const formData = new FormData();
        formData.append('name', name);
        formData.append('gender', gender);
        formData.append('location', location);
        formData.append('description', description);
        formData.append('expertise', expertise);
        formData.append('image', image);

        axios.post("http://localhost:3000/addDoctor", formData, {
        headers: {
                'Content-Type': 'multipart/form-data',
        },
        })
        .then(response => {
        console.log(response);
        }).catch(error => {
        console.error("Error posting data of Doctor", error);
        });
}
 
  return (
    <div>
      <div>
        <h1>Doctors Addition</h1>
        <form onSubmit={docDetails}>
        <TextField
          required
          fullWidth
          id="outlined-basic"
          label="Name"
          value={name}
          variant="outlined"
          onChange={e => setName(e.target.value)}
        />
        <TextField
          required
          fullWidth
          id="outlined-basic"
          label="Gender"
          value={gender}
          variant="outlined"
          onChange={e => setGender(e.target.value)}
        />
        <TextField
          required
          fullWidth
          id="outlined-basic"
          label="Location"
          value={location}
          variant="outlined"
          onChange={e => setLocation(e.target.value)}
        />
        <TextField
          required
          fullWidth
          id="outlined-basic"
          label="Description"
          value={description}
          variant="outlined"
          onChange={e => setDesc(e.target.value)}
        />
        <TextField
          required
          fullWidth
          id="outlined-basic"
          label="Expertise"
          value={expertise}
          variant="outlined"
          onChange={e => setExpertise(e.target.value)}
        />
        <Input
          required
          fullWidth
          type='file'
          onChange={e => setImage(e.target.files[0])}
        />
        <Button variant="contained" style={{ backgroundColor: 'blue' }} type="submit">Submit</Button>
      </form>
      </div>
    </div>
  )
}

export default AddDoc   