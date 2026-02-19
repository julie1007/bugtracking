import React from 'react'
import { useForm } from 'react-hook-form'

export const FormValidationDemo2 = () => {

    const{register,handleSubmit,formState : {errors},watch} = useForm({mode:"onchange"})

    const password = watch("password")
    console.log("watching...",password)

    const validationSchema={
        passwordValidator: {
            required: {
                value:true,
                message:"Password is required",
            }
        },
        confirmpValidator: {
            required: {
                value:true,
                message:"*Confirm Password is required"
            },
            validate:(params)=>{
                return params == password || "confirm password is not match" 
            }
        }
    }
    const submitHandler = (data)=>{
        console.log(data)
    }
    
  return (

    <div>

        <h1>FormValidationDemo2</h1>
    
        <form onSubmit={handleSubmit(submitHandler)}>

        <div>   
            <label  >PASSWORD</label>
            <input type="password" {...register("password",validationSchema.passwordValidator)} />
            {errors.password?.message}
        </div>

         <div>   
            <label>CONFIRM PASSWORD</label>
            <input type="password" {...register("confirmpassword",validationSchema.confirmpValidator)} />
            {errors.confirmpassword?.message}
        </div>
        
        <div>
            <input type="submit" />
        </div>
        </form>

    </div>
  )
}
