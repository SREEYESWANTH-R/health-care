// DocDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import '../Client/DocDetail.css'
import {LocationOn,MedicalInformation,Man,Woman} from '@mui/icons-material';

function DocDetail({ doctors}) {
  const { id } = useParams();
  const doctor = doctors.find((doc) => doc.id === parseInt(id));

  if (!doctors) {
    return <div>Doctor not found</div>;
  }


  return (

    <div className='details-container'>
      <div className='doctors'>
        <h1>{doctor.name}</h1>
        <div className='doc-img'>
          <img src = {doctor.image} alt = {doctor.name}></img>
        </div>
        <div className='doc-LE'>
          <h5><MedicalInformation/>{doctor.expertise}</h5>
          <h5>
            {doctor.gender === 'Male' ? <Man /> : <Woman />}
            {doctor.gender}
          </h5>
          <h5><LocationOn/>{doctor.location}</h5>
        </div>
        <div className='des-frame'>
            {doctor.description}
        </div>
      </div>
    </div>


    
  );
}

export default DocDetail;
