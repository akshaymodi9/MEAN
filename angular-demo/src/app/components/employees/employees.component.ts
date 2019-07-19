
import { Component } from "@angular/core";

@Component({
    selector:'employees',
    templateUrl:'./employees.component.html',
    styleUrls:['./employees.component.css']

})

export class EmployeesComponent {

    private employees:object[]

    constructor(){

        this.employees=[
            {name:"Pralhad",Dept:"Trainee",salary:"30000"},
            {name:"Modi",Dept:"Trainee",salary:"40000"},
            {name:"Maru",Dept:"Trainee",salary:"50000"}
    ]
    }
}



