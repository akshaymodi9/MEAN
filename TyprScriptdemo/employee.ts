
export class Employee {
    /*private name:string;
    private salary:number;
    private joinDate:Date;*/
    private readonly id: string;
    private static company:string="LTI"
    constructor(id: string,
        private name: string,
        private salary: number,
        private joinDate: Date) {
        this.id = id;
        /*this.name=name;
        this.salary=salary;
        this.joinDate=joinDate*/
    }

    public printInfo(): void {
        console.log(`name=${this.name}`)
        console.log(`salary=${this.salary}`);
        console.log(`Join Date=${this.joinDate}`)

    }
    //Getters
     static get Company():string{
        return Employee.company;
    }
    get Id(): string {
        return this.id;
    }
    get Salary(): number {
        return this.salary
    }
    get Name(): string {
        return this.name
    }
    get JoinDate(): Date {
        return this.JoinDate
    }
    //Setters

    static set Company(company:string){
        Employee.company=company;
    }
    set Name(name: string) {
        if (name === undefined || name === "") {
            throw new Error("Cannot assign empty name")
        }
        this.name = name
    }
    set Salary(salary: number) {
        if (salary < 0) {
            throw new Error("cannot be negative")
        }
        this.salary = salary
    }
    set JoinDate(jDate: Date) {
        this.joinDate = jDate
    }
}



