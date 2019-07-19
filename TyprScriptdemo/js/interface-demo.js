"use strict";
;
function loginuser(user) {
    if (user.validate()) {
        console.log(`login success for ${user.name}`);
    }
    else {
        console.log("login failed");
    }
}
let user = {
    name: "ajay",
    password: "abc@123",
    lastLogged: new Date(),
    validate: function () {
        if (this.name === "ajay" && this.password === "abc@123")
            return true;
        else
            return false;
    }
};
loginuser(user);
//# sourceMappingURL=interface-demo.js.map