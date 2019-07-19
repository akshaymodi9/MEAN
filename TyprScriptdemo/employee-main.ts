import {Employee} from './employee'

var emp = new Employee("1001", 'sekhar', 1121354, new Date())
emp.printInfo();

Employee.Company="Synergetics"
emp.Name="Kishoree" //Setters
emp.Salary=546445143
console.log(Employee.Company)
console.log(`Id=${emp.Id} name=${emp.Name}`)//Getter