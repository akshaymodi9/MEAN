function validate(e){

    var name= document.getElementById("name").value;
    var pass= document.getElementById("pass").value;

    var errmsg="";
    if(name == undefined || name == "")
        {
            errmsg+="Username is mandatory<br/>";
            e.preventDefault();
        }
        else if(name.length<5 )
            {
                errmsg+="Username should be more than 5 char<br/>";
                e.preventDefault();
            }
           

    if(pass == undefined || pass == "")
        {
            errmsg+="Password can't be empty<br/>";
            e.preventDefault();
        }
        else if(name.length<5 )
            {
                errmsg+="password too short";
                e.preventDefault();
            }
           

            if(errmsg.length>0)
                {
                    document.getElementById("err").style.visibility="visible";
                    document.getElementById("err").innerHTML=errmsg;
                }
                else{
                    document.getElementById("err").style.visibility="none";
                }
}