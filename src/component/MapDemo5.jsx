import React from 'react'

export const MapDemo5 = () => {
var students = [
    {id:1,name:"manisha",age:23,marks:86,city:"ahmbd",gender:"female"},
    {id:2,name:"ron",age:24,marks:46,city:"ahmbd",gender:"male"},
    {id:3,name:"anjali",age:23,marks:86,city:"ahmbd",gender:"female"}
] 
    return (    
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>AGE</th>                        
                        <th>MARKS</th>                        
                        <th>CITY</th>                        
                        <th>GENDER</th>                        
                    </tr>
                </thead>
                <tbody>
                    { 
                        students.map((st)=>  
                        {                       
                            return <tr style={{backgroundColor:st.gender=="female" && "black"}}>
                                <td>{st.id}</td>
                                <td>{st.name}</td>
                            <td style={{color:st.age>23 ? "red" : "blue"}}>{st.age}</td>
                                <td style={{backgroundColor:st.marks>80 && "yellow"}}>{st.marks}</td>
                                <td>{st.city}</td>
                                <td>{st.gender}</td>
                    </tr>
                    })
                    }
                </tbody>
            </table>
        </div> 
    )
}
