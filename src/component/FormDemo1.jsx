import React from 'react'

export const FormDemo1 = () => {

    const {register,handleSubmit} = useForm()
    const [userData, setuserData] = useState({})
    const [isSubmited, setisSubmited] = useState(false)

    const sumbitHandler = (data)=>{
        console.log(data)
        setuserData(data)
        setisSubmited(true)
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>FormDemo1</h1>
        
        <form onSubmit={handleSubmit(submitHandler)}>
            
            <div>
                <label>Name</label>
                <input type="text" placeholder='Enter name' {...register("FirstName")}/>
            </div>
            <div>
                <label>Age</label>
                <input type="text" placeholder='Enter age' {...register("age")}/>
            </div>
            <div>
                <label>Gender</label>
                    Male<input type="radio" value="male" {...register("gender")}/>
                    Female<input type="radio" value="female" {...register("gender")}/>
            </div>

                <div>
                <label>Hobbies</label>
                CRICKET<input type="text" value="cricket" {...register("hobbies")}/>
                TRAVEL<input type="text" value="cricket" {...register("hobbies")}/>
                SCROLLING<input type="text" value="cricket" {...register("hobbies")}/>

            </div>
            <div>
                <input type="submit" />
            </div>

        </form>

        {
            isSubmited == true && <div>
                <h1>OUTPUT</h1>
                <h1>Name = {userDate.firstName}</h1>
                <h1>Age = {userDate.age}</h1>
            </div>    
        }


    </div>
  )
}
