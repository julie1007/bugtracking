import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {

    return (
     <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      
    
      <Link className="navbar-brand" to="/" style={{}}>
        Navbar
      </Link>
        
      
      <Link class="nav-link" to="/netflixhome">
       Home </Link>
      <Link class="nav-link" to="/netflixmovies">
       Movies
      </Link>
      <Link class="nav-link" to="/netflixshows">
       Shows
      </Link>
      <Link class="nav-link" to="/employees">
       Employees
      </Link>
      <Link class="nav-link" to="/usestatedemo1">
        UseStateDemo1
      </Link>
      <Link class="nav-link" to="/usestatedemo2">
        UseStateDemo2
      </Link>
      <Link class="nav-link" to="/usestatedemo3">
        UseStateDemo3
      </Link>
      <Link class="nav-link" to="/inputdemo1">
        InputDemo1
      </Link>
      <Link class="nav-link" to="/inputdemo2">
        InputDemo2
      </Link>
      <Link class="nav-link" to="/formtask1">
        FormTask1
      </Link>
       <Link class="nav-link" to="/formtask2">
        FormTask2
      </Link>
      <Link class="nav-link" to="/formdemo2">
        FormDemo2
      </Link>
     <Link class="nav-link" to="/formvalidationdemo">
        FormValidationDemo
      </Link>
       
       <Link class="nav-link" to="/formvalidationdemo2">
        FormValidationDemo2
      </Link>    

       <Link class="nav-link" to="/formvalidationtask">
        FormValidationtask
      </Link>    
   
   
       <Link class="nav-link" to="/formv1">
        FormV1
      </Link>    


       <Link class="nav-link" to="/formvalidationall">
        formvalidationall
      </Link>    
      
      
       <Link class="nav-link" to="/apidemo1">
        apidemo1
      </Link>    
      
      
       <Link class="nav-link" to="/apitask1">
        apitask1
      </Link> 

     

       <Link class="nav-link" to="/apidemo6">
       ApiDemo6
      </Link> 
      </nav>
    </div>
    )
}
