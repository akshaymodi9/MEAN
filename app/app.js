
function printOddEven(num,callback) {

    if (num % 2 == 0) {
        
        callback("Even ",num)
        //console.log("Even Number:" + num)
    } else {
        callback("ODd",num,"odd number not allowed ")
        //console.log("Odd Number:" + num)
    }
}
function resultHandler(message,num,err){
    if(err){
        console.log("Error ")
        return;
    }
    console.log("Result is: " + message + num);

}

var oddSum=0, evenSum=0;

function resultHandler2(message, num, err){

    if(message=="Even ")
        {
            evenSum+=num;
        }else{

            oddSum+=num;
        }

}

for(var i=1;i<=20;i++){
    printOddEven(i, resultHandler);

}


for(var i=1;i<=20;i++){
    printOddEven(i, resultHandler2);

}


console.log("Even sum is : "+evenSum);
console.log("Odd sum is :"+oddSum);



