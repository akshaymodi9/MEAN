
import React from 'react'

export class EmployeeData extends React.Component{

    //mandatory function

    render(){

        var employee={
            id:1,
            name:'Akshay',
            salary:12456789,
            designation:'software'
        }
        return(
            <div>
            <h1> Id:{employee.id} </h1>
            <h1> name:{employee.name} </h1>
            <h1> salary:{employee.salary} </h1>
            <h1> designation:{employee.designation} </h1>
            </div>
        )
    }
}

