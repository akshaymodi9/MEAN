
interface User{
    name:string;
    password:string;
    validate():boolean;
};

function loginuser(user:User):void{
    if(user.validate()){
        console.log(`login success for ${user.name}`)

    }
    else{
        console.log("login failed")
    }
}

let user={
    name:"ajay",
    password:"abc@123",
    lastLogged:new Date(),
    validate:function():boolean{
        if(this.name==="ajay" && this.password==="abc@123")
            return true
        else
            return false
    }
}
loginuser(user)