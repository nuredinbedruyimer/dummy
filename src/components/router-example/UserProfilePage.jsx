import React from 'react'
import { useParams } from 'react-router-dom'

const UserProfilePage = () => {

    const {userID} = useParams()
  return (
    <div>
      UserName : <span className='text-xl text-lime-500 font-bold'>{userID}</span>
    </div>
  )
}

export default UserProfilePage
