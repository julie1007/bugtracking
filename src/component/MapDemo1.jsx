import React from 'react'

export const MapDemo1 = () => {

    let users = [
        {id:101, name:"abc" , age:20 , lang:"c"},
        {id:102, name:"def" , age:22 , lang:"mern"},
        {id:103, name:"ghi" , age:25 , lang:"php"}
    ]

    return (
    <div>
        {
            users.map((u)=>
                {
                    return <h1>{u.id}-{u.name}-{u.age}-{u.lang}</h1>
                })
        }
    </div>
  )
}
