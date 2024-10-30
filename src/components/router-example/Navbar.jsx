import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className=' flex flex-row gap-12 justify-between'>
    <div>
        <p className='text-xl text-blue-500 font-bold'>E-<span className='text-xl font-bold text-lime-500'>Commerce</span></p>
    </div>
      <div className='flex flex-row gap-12'>
    <NavLink className={({isActive})=>`text-xl font-bold ${isActive ? "text-blue-600":"text-black"}`} to={`/admins`}>Admins</NavLink>
    <NavLink className={({isActive})=>`text-xl font-bold ${isActive ? "text-blue-600":"text-black"}`} to={`/`}>Home</NavLink>

    <NavLink className={({isActive})=>`text-xl font-bold ${isActive ? "text-blue-600":"text-black"}`} to={`/users`}>Users</NavLink>
    <NavLink className={({isActive})=>`text-xl font-bold ${isActive ? "text-blue-600":"text-black"}`} to={`/products`}>Products</NavLink></div>

      
    </div>
  )
}

export default Navbar
