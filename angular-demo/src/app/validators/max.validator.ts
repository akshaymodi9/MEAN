


import { NG_VALIDATORS,AbstractControl,Validators  } from "@angular/forms";
import { Directive,Input } from "@angular/core";


@Directive({

    selector:'[max][ngModel]',
    providers:[{
        provide:NG_VALIDATORS,
        useExisting:MaximumValidatorDirective,
        multi:true
    }]

})

export class MaximumValidatorDirective implements Validators{

    @Input()
    public max:number;
    
    validate(control:AbstractControl):{[key:string]:any} {

        if(Validators.required(control)){

            return;
        }
        if(control.value > this.max)
            return null;
        else{
            return{'max':'value cannot be more than'+this.max}
        }
    }
}