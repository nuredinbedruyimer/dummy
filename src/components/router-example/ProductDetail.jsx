import React from 'react'
import { Link } from 'react-router-dom'

const ProductDetail = () => {
  return (
    <div className='text-white font-bold'>
      Product Detail Page

      <div className='h-32 w-48 bg-purple-700'>
      <Link  to={`..`}> {`<-Product`}</Link>

      </div>
    </div>
  )
}

export default ProductDetail
