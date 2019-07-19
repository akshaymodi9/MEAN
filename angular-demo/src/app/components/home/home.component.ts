
import { Component } from "@angular/core";

@Component({
    selector:'home',
    templateUrl:`./home.component.html`,
    styleUrls:['./home.component.css']
            

})
export class HomeComponent {

    private name:string;
    private company:string;
    private department:string;
    private courses:string[];
    private colorName:string="blue";
    constructor(){
        this.name="Modi"
        this.company="LTI",
        this.department="Training",
        this.courses=['mongoDB','Angular','Express','Gulp','ReactJS'];
    }

    public showData(){
        this.name="Ajay";
        this.company="Google";
        this.department="HR"
    }

    public changeColor(txt){
        this.colorName=txt.value
    }
}