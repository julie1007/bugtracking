import React from 'react'

export const MapDemo3 = () => {

    var students = [
        {id:21,name:"asmita",rollno:23,marks:77,gender:"female"},
        {id:38,name:"ron",rollno:28,marks:57,gender:"male"},
        {id:56,name:"sadaf",rollno:34,marks:87,gender:"female"}
    ]
  return (

    <div style={{textAlign:"center"}}>
    <h1>Map Demmo 3 </h1>
    <table border="2" align='center'>
        <thead>
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>ROLLNO</th>
                <th>MARKS</th>
                <th>GENDER</th>
            </tr>
        </thead>
    <tbody>
        {
            students.map((st)=>{
                return <tr>
                    <td>{st.id}</td>
                    <td>{st.name}</td>
                    <td>{st.rollno}</td>
                    <td>{st.marks}</td>
                    <td>{st.gender}</td>
                </tr>
            })
        }
     </tbody>
    </table>
   </div>
    
)

}


