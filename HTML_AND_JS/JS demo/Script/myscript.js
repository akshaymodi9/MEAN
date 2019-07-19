var validate = function (e) {
    console.log("Hello");

    //Validation

    var fname = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var mail = document.getElementById("mail").value;
    var address = document.getElementById("address").value;
    var salary = document.getElementById("salary").value;
    var qualification = document.getElementById("quali").value;
    var gender = document.getElementById("gender").value;
    var country = document.getElementById("country").value;

    //alert(country);
    if (fname == undefined || fname == "") {
        document.getElementById("empname").innerHTML = "Name cannot be empty";
        e.preventDefault();
    } else if (fname.length <= 3 || fname.length > 20) {
        document.getElementById("empname").innerHTML = "Name should be between 3 to 20 charaters";
        e.preventDefault();
    } else {
        document.getElementById("empname").innerHTML = "";

    }
    if (age == undefined || age == "" || isNaN(age)) {
        document.getElementById("empage").innerHTML = "Please enter number only";
        e.preventDefault();
    } else if (age < 18 || age > 65) {
        document.getElementById("empage").innerHTML = "Please enter age between 18-65";
        e.preventDefault();
    } else {
        document.getElementById("empage").innerHTML = "";

    }

    alert(address)
    if (address == undefined || address == "") {
        document.getElementById("empaddr").innerHTML = "Please enter address";
        e.preventDefault();
    }
    else {
        document.getElementById("empaddr").innerHTML = "";

    }

    if (mail == undefined || mail == "") {
        document.getElementById("empmail").innerHTML = "Email cannot be empty";
        e.preventDefault();
    }
    else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        document.getElementById("empmail").innerHTML = "";
    }
    else {
        document.getElementById("empmail").innerHTML = "Enter valid email";

    }
    if (salary == undefined || salary == "" || isNaN(salary) || salary < 0) {
        document.getElementById("empsalary").innerHTML = "Please enter number greater than 0";
    } else {
        document.getElementById("empsalary").innerHTML = "";

    }

    if (country == undefined || country == "-select-") {
        document.getElementById("empcountry").innerHTML = "Please select country";
    }
    else {
        document.getElementById("empcountry").innerHTML = "";
    }




}