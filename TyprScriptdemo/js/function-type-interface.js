"use strict";
var searchFn;
searchFn = function (text, searchText) {
    var position = text.indexOf(searchText);
    return position > -1;
};
var str = "This is sample text";
console.log(searchFn(str, "sample"));
var compareFn;
compareFn = function (str1, str2) {
    if (str1 === str2)
        return true;
    else
        return false;
};
var str1 = "Pralhad";
var str2 = "Pralhad";
console.log(compareFn(str1, str2));
//# sourceMappingURL=function-type-interface.js.map