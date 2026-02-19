import axios from 'axios'
import React, { useState } from 'react'

export const ApiDemo1 = () => {

    const  [message,setmessage]=useState("")
    const   [users,setusers]=useState([])

    const getUsers =async()=>{        
        const response = await axios.get("https://node5.onrender.com/user/user/")
        console.log(response)
        console.log(response.data)
        console.log(response.data.message)
        setmessage(response.data.message)
        console.log(response.data.data)
        setusers(response.data.data)
        get()
   }
 
    return (

    <div>
        
        <h1>apiDemo1</h1>
        <button onClick={()=>{getUsers()}}>GET</button>
        <h1>MESSAGE = {message}</h1>
        {
            users.map((users)=>{
                return <li>{users.name}</li>
            })
        }

        
    </div>
  )
}
