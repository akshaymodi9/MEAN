function validate1(e) {

    var name = document.getElementById("name").value;
   
    var age = document.getElementById("age").value;
  
    var email = document.getElementById("email").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var errmsg="";
    if (name == undefined || name == "") {
          errmsg += "Name cannot be empty</br>";
        e.preventDefault();
    }
    

       

    if(age == undefined || age == "")
        {
            errmsg+="Age can't be empty<br/>";
            e.preventDefault();
        }
        else if(isNaN(age) )
            {
                errmsg+="Age must be number<br/>";
                e.preventDefault();
            }

     if (email == undefined || email == "") {
        errmsg+="Email cannot be empty</br>";
        e.preventDefault();
    }
    else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))) {
       errmsg+= "Enter valid email<br/>";
    }
   
    if(username==undefined || username=="")
        {
errmsg += "Username cannot be empty<br/>";
        }else if (username.length < 5) {
        errmsg += "Username should be more than 5 char<br/>";
        e.preventDefault();
    }
           
    if(password==undefined || password=="")
        {
            errmsg+="password cannot be empty<br/>";
        }

            if(errmsg.length>0)
                {
                    document.getElementById("err1").style.visibility="visible";
                    document.getElementById("err1").innerHTML=errmsg;
                }
                else{
                    document.getElementById("err1").style.visibility="none";
                }
}