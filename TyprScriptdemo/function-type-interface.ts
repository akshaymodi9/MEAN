

interface myFunction{

    (text:string, searchText:string):boolean;
}

var searchFn:myFunction;

searchFn=function(text:string,searchText:string):boolean{

    var position=text.indexOf(searchText);
    return position > -1
}

var str="This is sample text";

console.log(searchFn(str,"sample"));

var compareFn:myFunction;

 compareFn=function(str1:string,str2:string):boolean{

    if(str1===str2)
        return true
    else
        return false;
 }

 var str1="Pralhad"
 var str2="Pralhad"

 console.log(compareFn(str1,str2))