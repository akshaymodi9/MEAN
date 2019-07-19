"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const employee_1 = require("./employee");
var emp = new employee_1.Employee("1001", 'sekhar', 1121354, new Date());
emp.printInfo();
employee_1.Employee.Company = "Synergetics";
emp.Name = "Kishoree";
emp.Salary = 546445143;
console.log(employee_1.Employee.Company);
console.log(`Id=${emp.Id} name=${emp.Name}`);
//# sourceMappingURL=employee-main.js.map