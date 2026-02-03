import React from 'react'

export const MapDemo6 = () => {
   


    var courses = [
        {id:1,name:"Astha",age:20,courses:"Resin Art",gender:"Female"},
        {id:2,name:"Bhakti",age:21,courses:"Nail Art",gender:"Female"},
        {id:3,name:"Shiv",age:23,courses:"Resin Art",gender:"Male"},
        {id:4,name:"Shankar",age:21,courses:"Nail Art",gender:"Male"},
        {id:5,name:"Sandy",age:22,courses:"Resin Art",gender:"Female"}
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
                        <td>{c.id}</td>
                        <td style={{outline:"double"}}>{c.name}</td>
                        <td style={{outlineColor:c.age == 21 && "blue "}}>{c.age}</td>
                        <td style={{backgroundColor:c.courses=="Resin Art" && "aqua"}}>{c.courses}</td>
                        <td style={{backgroundColor:c.gender== "Female" && "pink" || "green"}}>{c.gender}</td>
                    </tr>
                })
            }
        </tbody>
    </table>
   </div>   
  )
}
