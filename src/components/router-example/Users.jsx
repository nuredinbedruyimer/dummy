import React from 'react'
import { Outlet } from 'react-router-dom'

const UsersPage = () => {
  return (
    <div>
    UsersPage

    <div className='w-96 h-32 bg-pink-800'>
      <Outlet/>
    </div>
      
    </div>
  )
}

export default UsersPage
