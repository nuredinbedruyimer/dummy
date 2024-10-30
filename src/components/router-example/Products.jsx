import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const ProductPage = () => {
  return (
    <div>
      ProductPage
      <div className='h-64 min-w-96 bg-sky-600'>
      <p1>CLick Here To Get To The Detail Page Of Product <Link className='text-xl text-pink-800' to={`product-detail`}>Product Detail and <span>Click Here to Back to</span> <Link to={`..`}>Product</Link></Link></p1>
      <Outlet/>
      
      </div>
    </div>

  )
}

export default ProductPage
