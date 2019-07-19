

//let and var

// var

function myFunction(flag:boolean){

    var num=24;
    if(flag){
        var num=456;
        console.log("value of num = "+num);
    }
    console.log("value of num= "+num)
}

myFunction(true)

//let


function myFunction1(flag:boolean){
    
        let num1=24;
        if(flag){
             let num1=456;
            console.log("value of num = "+num1);
        }
        console.log("value of num= "+num1)
    }
    
    myFunction1(true)