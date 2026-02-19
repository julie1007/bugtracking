import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo2 = () => {
    
    const{register,handleSubmit,formState:{errors}}= useForm()

    console.log("errors...",errors)

    const submitHandler = (data)=>{
        alert("form submited")
        console.log(data)
    }
    
    const validationSchema = {
        ageValidator:{
            required:{
                value : true,
                message:"*Age is required"
            },
            min:{
                value:18,
                message:"*Min age should be 18"
            },
            max:{
                value:60,
                message:"*Max age should be 60"
            }
        },
        addressValidator:{
            required:{
                value:true,
                message:"*Address is required"
            },
            minLength:{
                value:10,
                message:"*Min 10 character is required"
            },
            maxLength:{
                value:20,
                message:"*Max 20 character is Accepted"
            }
        }
    }
  return (
    <div>
    
        <h1>FormDemo2</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
        
        <div>

            <label>NAME : </label>
            <input type="text" {...register("name",{required:{value:true,message:"*Name is required"}})}  />
            {errors.name && errors.name.message}
        </div>

        <div>
            <label>AGE</label>
            <input type="text" {...register("age",validationSchema.ageValidator)} />
            {errors.age?.message}
        </div>
        
        <div>
            <label>ADDRESS</label>
            <input type="text" {...register("address",validationSchema.addressValidator)} />
            {errors.address?.message}
        </div>

        <div>
            <input type="submit" />
        </div>

        </form>


    </div>
  )
}
