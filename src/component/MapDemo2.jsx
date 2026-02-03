import React from 'react'

export const MapDemo2 = () => {
  
    let marks = [22,33,44,55,66]
    return (

    <div>
       <h1>Marks</h1>
        {
            marks.map((c)=>{
            return <h1>{c}</h1>
        })
    }
    </div>
  
)
}
