

var positiveNumber=function(arr){

    try{
    for(var i=0;i<arr.length;i++){

        if(arr[i]<0){
            throw new Error("This is negative no");
        }
        else{
            console.log(arr[i]);
        }
    }
}
    catch(err){
        console.log(err);
    }
}

var arr=[21,1,4,2,15,0]
positiveNumber(arr);


