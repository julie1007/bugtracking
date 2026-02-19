import React from 'react'
import { useForm } from 'react-hook-form'

export const Formv1 = () => {

    const {register,handleSubmit,watch,formState:{errors}} = useForm()
    console.log("Errors",errors)
     const password = watch("password", "");
const rules = {
    minLength: password.length >= 8,
    hasUpper: /[A-Z]/.test(password),
    hasLower: /[a-z]/.test(password),
    hasNumber: /[0-9]/.test(password),
    hasSpecial: /[@$!%*?&]/.test(password),
  };

    const validationSchema={
        emailValidator: {
            required: {
                value:true,
                message:"Email is required"
            }
        },
        passwordValidator: {
            required: {
                value:true,
                message:"Password is Required"
            },
            minLength:{
                value:'/[A-Z]{1}[a-z]{1}$/',
                message:"*min 8 characer should be there"
                
            }
            
        }
    }
    const submitHandler = (data)=>{
        alert("Form Submited")
        console.log(data)
    }

  return (
    <div>
        <h1>Formv1</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>Email</label>
                <input type='email' {...register("email",validationSchema.emailValidator)}></input>
                {errors.email?.message}
            </div>
            <div>
                <label>password</label>
                <input type='password' {...register("password",validationSchema.passwordValidator)}></input>
                {errors.password?.message}
                <p style={{ color: rules.hasLower ? "green" : "red" }}>Min 1 Lower</p>
                <p style={{ color: rules.hasUpper ? "green" : "red" }}>Min 1 Upper</p>
                <p style={{color: rules.hasNumber ?"green":"red"}}>NUMBER</p>
                <p style={{color: rules.hasSpecial?"green":"red"}}>SPEICAL CHARACTER</p>
            </div>
               <div>
                <input type="submit" />
               </div>

        </form>
    </div>
  )
}
