import React from 'react'

export const MapDemo4 = () => {
    var cities = [
        {id:1,city:"ahmbd",pop:10000,aoi:300},
        {id:2,city:"vrindavan",pop:20000,aoi:150},
        {id:3,city:"delhi",pop:200000,aoi:400}
    ];
    return (            
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>CITY</th>
                            <th>POP</th>
                            <th>AOI</th>
                        </tr>
                    </thead>
                <tbody>
                    {
                        cities.map((c)=>{
                            return <tr>
                                <td>{c.id}</td>
                                <td>{c.city}</td>
                                <td>{c.pop}</td>
                                <td>{c.aoi}</td>
                            </tr>
                        })
                        }
                </tbody>

                </table>
            </div>
        )
    
}
