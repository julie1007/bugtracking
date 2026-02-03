import React from 'react'

export const MapDemo7 = () => {

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
                <th style={{backgroundColor:"#314e45"}}>ID</th>
                <th style={{backgroundColor:"#314e45"}}>Name</th>
                <th style={{backgroundColor:"#314e45"}}>Age</th>
                <th style={{backgroundColor:"#314e45"}}>Courses</th>
                <th style={{backgroundColor:"#314e45"}}>Gender</th>
            </tr>
        </thead>

        <tbody>
            {
                courses.map((c)=>{
                    return <tr>
                        <td style={{backgroundColor:"rgba(255, 99, 71, 0.5)"}}>{c.id}</td>
                        <td style={{backgroundColor:"mediumseagreen"}}>{c.name}</td>
                        <td style={{backgroundColor:"Violet"}}>{c.age}</td>
                        <td style={{backgroundColor:"aqua"}}>{c.courses}</td>
                        <td style={{backgroundColor:"pink"}}>{c.gender}</td>
                    </tr>
                })
            }
        </tbody>
    </table>
   </div>   
)
}
