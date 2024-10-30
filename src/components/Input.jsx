import React from 'react'

const Input = ({icon:Icon, ...props}) => {
  return (
    <div className='relative mb-6'>
    <div className='absolute inset-y-0 left-0 pl-3 flex items-center'>
        <Icon className="size-6"/>
    </div>
    <input
        {...props}
        className='pl-10 rounded-lg py-3 w-full bg-orange-700 bg-opacity-45 mr-4'
    />
      
    </div>
  )
}

export default Input
