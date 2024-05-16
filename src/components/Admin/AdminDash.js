import React from 'react'
import {LocalHospital,AccountCircle} from '@mui/icons-material'
import './AdminDash.css'

function AdminDash(){
  return (
    <div className='adminlog-cont'>
      <header className='admin-head'>
        <div className='admin-logo'>
          <LocalHospital fontSize='large' style={{ color: 'blue'}} />
          <h3>Consult</h3>
        </div>
        <div className='admin-profile'>
          <AccountCircle fontSize='large'/>
          <h4>ADMIN</h4>
        </div>
      </header>
    </div>
  )
}

export default AdminDash