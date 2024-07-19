import React from 'react'
import './AddDoc.css'
import { Button, TextField} from '@mui/material';

function AddDoc(){
  return (
    <div>
      <div>
        <h1>Doctors Addition</h1>
        <TextField
                required
                fullwidth
                helperText=""
                id="outlined-basic"
                label="Name"
                variant="outlined"    
        />
        <TextField
                required
                fullwidth
                helperText=""
                id="outlined-basic"
                label="Gender"
                variant="outlined"    
        />
        <TextField
                required
                fullwidth
                helperText=""
                id="outlined-basic"
                label="Location"
                variant="outlined"     
        />
        <TextField
                required
                fullwidth
                helperText=""
                id="outlined-basic"
                label="Description"
                variant="outlined"      
        />
        <TextField
                required
                fullwidth
                helperText=""
                id="outlined-basic"
                label="Expertise"
                variant="outlined"      
        />
        <TextField
                required
                fullwidth
                helperText=""
                id="outlined-basic"
                label="Image"
                variant="outlined"       
        />
        <Button variant="contained" style={{ backgroundColor: 'blue' }} type='submit'> Submit </Button>
      </div>
    </div>
  )
}

export default AddDoc