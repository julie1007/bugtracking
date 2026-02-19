import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HeaderComponent } from "./component/HeaderComponent";
import { FooterComponent } from "./component/FooterComponent";
import { MapDemo1 } from "./component/MapDemo1";
import { MapDemo2 } from "./component/MapDemo2";
import { MapDemo3 } from "./component/MapDemo3";
import { MapDemo4 } from "./component/MapDemo4";
import { MapDemo5 } from "./component/MapDemo5";
import { Route, Routes } from "react-router-dom";
import { NetflixHome } from "./component/NetflixHome";
import { NetflixMovies } from "./component/NetflixMovies";
import { NetflixShows } from "./component/NetflixShows";
import { Navbar } from "./component/Navbar";
import { HomeComponent } from "./component/HomeComponent";
import { ContentComponent } from "./component/ContentComponent";
import { ErrorNotFound } from "./component/ErrorNotFound";
import { Watch } from "./component/Watch";
import { UseStateDemo1 } from "./component/UseStateDemo1";
import { FunctionDemo1 } from "./component/FunctionDemo1";
import { UseStateDemo2 } from "./component/UseStateDemo2";
import { UseStateDemo3 } from "./component/UseStateDemo3";
import { Employees } from './component/Employees';
import { InputDemo1 } from './component/InputDemo1';
import { FormTask1 } from './component/FormTask1';
import { FormDemo1 } from './component/FormDemo1';
import { InputDemo2 } from './component/InputDemo2';
import { FormDemo2 } from './component/FormDemo2';
import { FormValidationDemo } from './component/FormValidationDemo';
import { FormValidationDemo2 } from './component/FormValidationDemo2';
import { FormValidationTask } from './component/FormValidationTask';
import { Formv1 } from './component/Formv1';
import { FormDemo6 } from '../../../../../Users/admin/AppData/Local/Packages/5319275A.51895FA4EA97F_cv1g1gvanyjgm/LocalState/sessions/E2C7234733CA7B64992C4A6D74EC873B3663013D/transfers/2026-07/FormDemo6';
import { FormValidationAll } from './component/FormValidationAll';
import { ApiDemo1 } from './component/api/apiDemo1';
import { ApiTask1 } from './component/api/ApiTask1';
import { ApiDemo6 } from './component/api/ApiDemo6';


function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <Navbar></Navbar>
      
      <Routes>

        <Route path='/netflixhome' element={<NetflixHome/>}></Route>
        <Route path="/netflixmovies" element={<NetflixMovies />}></Route>
        <Route path="/netflixshows" element={<NetflixShows />}></Route>
        <Route path='/contentcoponent' element={<ContentComponent/>}></Route>
        <Route path="/" element = {<HomeComponent/>}></Route>
        <Route path="/watch/:name" element = {<Watch/>}></Route>
        <Route path="/usestatedemo1" element ={<UseStateDemo1/>}></Route> 
        <Route path="/usestatedemo2" element ={<UseStateDemo2/>}></Route> 
        <Route path="/usestatedemo3" element ={<UseStateDemo3/>}></Route>
        <Route path="/functiondemo1" element ={<FunctionDemo1/>}></Route>
        <Route path="/errornotfound" element = {<ErrorNotFound/>}></Route> 
        <Route path="/employees" element = {<Employees/>}></Route>
        <Route path='/footercomponent' element={<FooterComponent/>}></Route>
        <Route path='/inputdemo1' element={<InputDemo1/>}></Route>
        <Route path='/inputdemo2' element={<InputDemo2/>}></Route>
        <Route path='/formtask1' element={<FormTask1/>}></Route>
        <Route path='/formdemo1' element={<FormDemo1/>}></Route>
        <Route path='/formdemo2' element={<FormDemo2/>}></Route>
       <Route path='/formvalidationdemo' element={<FormValidationDemo/>}></Route>
       <Route path='/formvalidationdemo2' element={<FormValidationDemo2/>}></Route>
       <Route path='/formvalidationtask' element={<FormValidationTask/>}></Route> 
       <Route path='/form6' element={<FormDemo6/>}></Route> 
      <Route path='/formv1' element={<Formv1/>}></Route>
      <Route path='/formvalidationall' element={<FormValidationAll/>}></Route>
    <Route path='/apidemo1' element={<ApiDemo1/>}></Route>
    <Route path='/apitask1' element={<ApiTask1/>}></Route>
    <Route path='/apidemo6' element={<ApiDemo6/>}></Route>
    
       </Routes>
    </div>
  );
}

export default App;