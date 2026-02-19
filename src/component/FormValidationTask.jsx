import React from 'react'
import { useForm } from 'react-hook-form'
import { data } from 'react-router-dom'

export const FormValidationTask = () => {

    const {register,handleSubmit,formState={errors},watch} = useForm()

    const email =watch(email) 
    console.log(email)

    const submitHandler=(data)=>{
        console.log(data)
    }

    const password = watch("password")
    console.log("watch..",password)


    const validationSchema = {
        emailValidator:{
            required:{
                value:true,
                message:"*Email is required"
            }
        },
        passwordValidator: {
            required: {
                value:true,
                message:"*Password is required"
            },
            minLength:{
                value: 8,
                message:"*Min 8 length is required"
            },
            pattern:{
                value : /[@]{0}[.com]$/,
                message:"enter"
            }
        }

    }

    return (
    
    <div>
    
        <h1>FormValidationTask</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
           
            <div>
                <label>Emial id : </label>
                <input type="email"{...register("email",validationSchema.emailValidator)} placeholder='Create your email id' />
                {errors.email?.message}
            </div>

            <div>
                <label>Password</label>
                <input type="password" {...register("password",validationSchema.passwordValidator)} placeholder='Create your password' />
                {errors.password?.message}
            </div>

            <div>      
                <input type="submit" />
            </div>
        
        </form>

    </div>
  
)
}