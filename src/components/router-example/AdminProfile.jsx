import React from 'react'
import { Outlet } from 'react-router-dom'

const AdminProfile = () => {
  return (
    <div>
      Admin Profile Page Hee
      <div className='h-24 bg-sky-500 w-64'><Outlet/> </div>
    </div>
  )
}

export default AdminProfile
