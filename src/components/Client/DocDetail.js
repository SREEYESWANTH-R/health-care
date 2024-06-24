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
        <div className='loc-frame'>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d380511.46333812294!2d-88.06229651552813!3d41.833771424506665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c3cd0f4cbed%3A0xafe0a6ad09c0c000!2sChicago%2C%20IL%2C%20USA!5e0!3m2!1sen!2sin!4v1719227510183!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>


    
  );
}

export default DocDetail;
