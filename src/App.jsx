import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HeaderComponent } from './component/HeaderComponent'
import { MapDemo1 } from './component/MapDemo1'
import { MapDemo2 } from './component/MapDemo2'
import { MapDemo3 } from './component/MapDemo3'
import { MapDemo4 } from './component/MapDemo4'
import { MapDemo5 } from './component/MapDemo5'
import { MapDemo6 } from './component/MapDemo6'
import { MapDemo7 } from './component/MapDemo7'
import { MapDemo8 } from './component/MapDemo8'
import { MapDemo9 } from './component/MapDemo9'
import { Route, Routes } from 'react-router-dom'
import { NetflixHome } from './component/NetflixHome'
import { Navbar } from './component/Navbar'
import { NetflixMovies } from './component/NetflixMovies'
import { NetflixShows } from './component/NetflixShows'
import { HomeComponent } from './component/HomeComponent'
import { Watch } from './component/Watch'
import { ErrorNotFound } from './component/ErrorNotFound'



function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
        <Navbar></Navbar>
        <Routes>
          <Route path="/netflixhome" element={<NetflixHome/>}></Route>
          <Route path="/netflixmovies" element={<NetflixMovies/>}></Route>
         <Route path="/netflixshows" element={<NetflixShows/>}></Route>
         <Route path='/' element={<HomeComponent/>}></Route>
         <Route path='/watch/:name' element={<Watch/>}></Route>
          <Route path='/*' element={<ErrorNotFound/>}></Route>
         
          {/* <Route path="/netflixhome" element={<NetflixHome/>}></Route> */}
        </Routes>

      </div>
      
  )
}

export default App
