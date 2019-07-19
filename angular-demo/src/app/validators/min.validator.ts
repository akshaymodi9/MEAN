import { NG_VALIDATORS,AbstractControl,Validators  } from "@angular/forms";
import { Directive,Input } from "@angular/core";


@Directive({

    selector:'[min][ngModel]',
    providers:[{
        provide:NG_VALIDATORS,
        useExisting:MinimumValidatorDirective,
        multi:true
    }]

})

export class MinimumValidatorDirective implements Validators{

    @Input()
    public min:number;
    
    validate(control:AbstractControl):{[key:string]:any} {

        if(Validators.required(control)){

            return;
        }
        if(control.value < this.min)
            return null;
        else{
            return{'max':'value cannot be less than'+this.min}
        }
    }
}