import React, { useState } from 'react'


export const FormTask1 = () => {
  
    const [name,setName] = useState("");


    const nameHandler = (event)=>{
        console.log(event.target.value)
        setName(event.target.value)
    }   

   return (
   
   <div>
   
        <h1>FormTask1</h1>
      <div>
            <label>NAME</label>
            <input type="text" onChange={(event)=>{nameHandler(event)}}/>  
            {name}
      
      </div>

    </div>
  )
}
