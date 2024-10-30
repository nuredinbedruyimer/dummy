import React, { useEffect, useState } from 'react'

function Test1() {
    console.log("Componet Rendering")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    const fullName = firstName + " " + lastName

    const [price, setPrice] = useState({
        numberQuantity:10, 
        totalPrice : 100
    })

    const handleClick = ()=>{
        setPrice({
            numberQuantity:100,
            totalPrice:1000
        })

    }






    
  return (

    <div className='space-y-12 text-3xl text-white'>
      <div>
      First-Name : 
      <input name='name' onChange={(event)=>setFirstName(event.target.value)}/>

      </div>

      <div>
      Last-Name : 
      <input name='name' onChange ={(e)=>setLastName(e.target.value)} />


      </div>

      <h1>FullName : {fullName}</h1>
      <h1>Price : {price.totalPrice}</h1>

      <button className='px-4 py-2 bg-lime-500' onClick={handleClick}>Add Price</button>

    </div>
  )
}

export default Test1
