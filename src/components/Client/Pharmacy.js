import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Pharmacy() {
  const [pharmacy, setPharmacy] = useState([]);

  async function pharmacyAPI() {
    const options = {
      method: 'GET',
      url: 'https://myhealthbox.p.rapidapi.com/search/fulltext',
      params: {
        q: 'aspirin',
        c: 'us',
        l: 'en',
        f: 'name',
        limit: '10',
        from: '0'
      },
      headers: {
        'x-rapidapi-key': 'a01c023c27msh24a782bd71ef2bap180807jsnfd5051aa1325',
        'x-rapidapi-host': 'myhealthbox.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      setPharmacy(response.data); // Update the state with the response data
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    pharmacyAPI(); // Call the API function when the component mounts
  }, []);

  return (
    <div>
      <h1>Pharmacy</h1>
      <ul>
        {pharmacy.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Pharmacy;
