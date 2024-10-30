import React, { useState } from 'react'
import Input from './Input'
import { Mail, User, Lock } from 'lucide-react'

const Register = () => {

    const[name, setName] = useState("")
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")

  return (
    <div className='max-w-lg w-full bg-gray-600 opacity-45 rounded-lg shadow-xl backdrop-filter backdrop-blur-xl'>
      <div className='p-10'>
       <h1 className='text-2xl text-white font-extrabold'>Create Account</h1>

       <form className='mt-8'>
        <Input
            icon={User}
            placeholder="Enter Your Name"
            value = {name}
            type="text"
            onChange = {(event)=>event.target.value}
        />
              <Input
            icon={Mail}
            placeholder="Enter Your E-Mail"
            value = {email}
            type="text"
            onChange = {(event)=>event.target.value}
        />
              <Input
            icon={Lock}
            placeholder="Enter Your Password"
            value = {name}
            type="text"
            onChange = {(event)=>event.target.value}
        />
        <button className='bg-orange-600 w-full py-3 text-white rounded-lg'>Sign up</button>
       </form>

      </div>

    </div>
  )
}

export default Register
