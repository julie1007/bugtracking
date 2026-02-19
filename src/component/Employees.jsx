import React from 'react'
import { EmployeeList } from './EmployeeList';

export const Employees = () => {
    var title = "EMPLOYEES APP";

    var company = {
        name : "royal",
        year : 2023,
    };

    var employees = [
        {id : 101 , name : "mansi" , age : 25},
        {id : 121 , name : "dev" , age : 24},
        {id : 103 , name : "madhav" , age : 25,
    }];
    
  return (
    <div style={{textAlign:"center"}}>
        
        <h1>Employees</h1>

        <EmployeeList title={title} company={company} employees = {employees}></EmployeeList>

    </div>
  );
};
