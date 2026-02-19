import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const FormTask2 = () => {
  
    const {register,handleSubmit} = useForm()
    const {userData,setuserData} = useState({})
    const {isSubmited,setisSubmited} = useState(false)

    const submitHandler = (data)=>{
        console.log(data)
        setuserData(data)
        setisSubmited(true)
    }

   return (

    <div>
        <h1>FormTask2</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
        
        <div>
            <label>NAME</label>
            <input type='text' placeholder='Enter your name '{...register("firstName")}></input>          
        </div>

        <div>
            <label>MIDDLENAME</label>
            <input type='text' placeholder='Enter your middlename '{...register("MiddleName")} />          
        </div>

        <div>
            <label>SURNAME</label>
            <input type='text' placeholder='Enter your surname '{...register("SurName")} />          
        </div>

        <div>
            <label>DATE OF BIRTH</label>
            <input type='text' placeholder='Enter your date of birth '{...register("DOB")} />          
        </div>
        
        <div>
            <label>AGE</label>
            <input type='text' placeholder='Enter your age '{...register("Age")} />          
        </div>

        <div>
            <input type='submit' />
        </div>
        </form>
        {
            isSubmited == true && <div>
            <h1>OUTPUT</h1>
            <h1>NAME = {userData.firstName}</h1>
            <h2>Age = {userData.age}</h2>
        </div>    
        }

    </div>
)
}
 