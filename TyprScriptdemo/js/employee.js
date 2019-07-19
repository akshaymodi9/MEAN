"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    constructor(id, name, salary, joinDate) {
        this.name = name;
        this.salary = salary;
        this.joinDate = joinDate;
        this.id = id;
    }
    printInfo() {
        console.log(`name=${this.name}`);
        console.log(`salary=${this.salary}`);
        console.log(`Join Date=${this.joinDate}`);
    }
    static get Company() {
        return Employee.company;
    }
    get Id() {
        return this.id;
    }
    get Salary() {
        return this.salary;
    }
    get Name() {
        return this.name;
    }
    get JoinDate() {
        return this.JoinDate;
    }
    static set Company(company) {
        Employee.company = company;
    }
    set Name(name) {
        if (name === undefined || name === "") {
            throw new Error("Cannot assign empty name");
        }
        this.name = name;
    }
    set Salary(salary) {
        if (salary < 0) {
            throw new Error("cannot be negative");
        }
        this.salary = salary;
    }
    set JoinDate(jDate) {
        this.joinDate = jDate;
    }
}
Employee.company = "LTI";
exports.Employee = Employee;
//# sourceMappingURL=employee.js.map