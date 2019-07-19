"use strict";
function* getNumbers() {
    let index = 1;
    while (index < 10) {
        yield index;
        index++;
    }
}
var nums = getNumbers();
while (true) {
    let d = nums.next();
    if (d.value != undefined)
        console.log(d.value);
    else
        break;
}
function* getPasswords(limit, length) {
    for (let i = 1; i <= limit; i++) {
        let pwd = Math.random().toString(36).substr(4, length);
        yield pwd;
    }
}
var pwds = getPasswords(5, 6);
while (true) {
    let p = pwds.next();
    if (!p.done) {
        console.log(p.value);
    }
    else {
        break;
    }
}
//# sourceMappingURL=fourth.js.map