import React from 'react'
import { Outlet } from 'react-router-dom'

const AdminsPage = () => {
  return (
    <div>
    AdminsPage

    <div className='bg-lime-400 h-64 min-w-96'>
    <Outlet/>

    </div>
      
    </div>
  )
}

export default AdminsPage
