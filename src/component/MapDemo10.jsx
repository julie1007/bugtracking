import React from 'react'

export const MapDemo10 = () => {
   var courses = [
        {id:1,name:"Nancy",age:23,courses:"BCA",gender:"Female"},
        {id:2,name:"Archi",age:26,courses:"DIPLOMA",gender:"Female"},
        {id:3,name:"Pratham",age:25,courses:"BCA",gender:"Male"},
        {id:4,name:"Roney",age:22,courses:"BBA",gender:"Male"},
        {id:5,name:"Payal",age:28,courses:"CA",gender:"Female"}
        ]
    return (
    <div>
         <h1>COURSES LIST</h1>
    <table className='table table-bordered'>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Courses</th>
                <th>Gender</th>
            </tr>
        </thead>

        <tbody>
            {
                courses.map((c)=>{
                    return <tr>
                        <td >{c.id}</td>
                        <td >{c.name}</td>
                        <td >{c.age}</td>
                        <td >{c.courses}</td>
                        <td >{c.gender}</td>
                    </tr>
                })
            }
        </tbody>
    </table>

    </div>
  )
}
