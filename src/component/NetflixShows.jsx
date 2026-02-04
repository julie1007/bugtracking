import React from 'react'
import { Link } from 'react-router-dom'

export const NetflixShows = () => {
  
  let tvShows  = [  
      {id:1,showName:"CSK"},
      {id:2,showName:"MI"},
      {id:3,showName:"Gujarat Titans (GT)"},
      {id:4,showName:"Kolkata Knight Riders (KKR)"},
      {id:5,showName:"Lucknow Super Giants (LSG)"},
      {id:6,showName:"Punjab Kings (PBKS)"},
      {id:7,showName:"Rajasthan Royals (RR)"},
      {id:8,showName:"Royal Challengers Bengaluru (RR)"},
      {id:9,showName:"Sunrisers Hyderabad (SRH)"},
      {id:10,showName:"Delhi Capitals (DC)"}
    ]
  
  return (
    <div style={{textAlign:"center"}}>
      
      <h1>NetflixShows</h1>
      {
        tvShows.map((tvshow)=>
        {
          return <ol><li>
            {
           <Link to={`/watch/${tvshow.showName}`}>{tvshow.showName}</Link>
            }
          </li>
          </ol>
        })
      }    

    </div>
  )
}
