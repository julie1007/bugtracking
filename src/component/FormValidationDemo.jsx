import React from 'react'
import { useForm } from 'react-hook-form'

export const FormValidationDemo = () => {
    const {register,handleSubmit,formState:{errors}} = useForm()

    const validationSchema = {
        nameValidator:{
            required:{
                value:true,
                message:"*Name is required"
            }
        },
        contactValidator:{
            required:{
                value:true,
                message:"*Contact is required"
            },
            pattern:{
                value : /[6-9]{1}[0-9]{9}$/,  
                message:"*invalid contact"
            }
        },

        promocodeValidator:{
            required:{
                value:true,
                message:"*Promocode is requires"
            },
            validate:(params)=>{
                return params == 2026 || "invalid promo code"
            }
        },

        hobbiesValidator:{
            require:{
                value:true,
                message:"*Hobbies are reqired"
            },
            validate:(params)=>{
                return params?.length>=2 || "*min 2 hobbies"
            }
        }

    }
    const submitHandler = (data)=>
    {
        console.log(data)
    }
  return (
    <div>
        <h1>FormValidationDemo</h1>

        <form onSubmit={handleSubmit(submitHandler)}>
            
            <div>
                <label >Name</label>
                <input type='text'{...register("name",validationSchema.nameValidator)}></input>
                {errors.name?.message}
            </div>

            <div>
                <label>Contact</label>
                <input  type='text'{...register("contact",validationSchema.contactValidator)}></input>
                {errors.contact?.message}
            </div>
           
            <div>
                <label>PromoCode</label>
                <input type='text' {...register("promocode",validationSchema.promocodeValidator)} />
                {errors.promocode?.message}
            </div>

            <div>
                <label>Hobbies</label>
                
                <div>Cricket
                    <input type='checkbox' {...register("hobbies",validationSchema.hobbiesValidator)}value="cricket"/> 
                    Painting
                    <input type='checkbox' {...register("hobbies",validationSchema.hobbiesValidator)}value="Painting"/> 
                    Exploring 
                    <input type='checkbox' {...register("hobbies",validationSchema.hobbiesValidator)}value="Exploring"/> 
              
              
                </div> 
                {errors.hobbies?.message}
            </div>

            <div>
                <input type='submit' />
            </div>

        </form>
 
 
    </div>
  )
}
