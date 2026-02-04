import React from 'react'
import { Link } from 'react-router-dom'

export const NetflixMovies = () => {

  let movies = [
    {id:1,movieName:"Kantara"},
    {id:2,movieName:"Laalo"},
    {id:3,movieName:"OMG"}
  ] 

  return (
    <div style={{textAlign:"center"}}>
      <h1>NetflixMovies</h1>
      {
        movies.map((m)=>{
          return <li>
            {
              <Link to={`/watch/${m.movieName}`}>{m.movieName}</Link>
            }
          </li>
        
        })

      }
 {/* <ul>
        <li><Link to="/watch/kantara">Kantara</Link></li>
        <li><Link to="/watch/lalo">Lalo</Link></li>
        <li><Link to="/watch/omg">OMG</Link></li>
        </ul>  
  */}
      </div>
  )
}
