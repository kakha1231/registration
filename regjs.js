//SHENISHVNA globalurze .value ar mushaobs so koveltvis lokalurad avgwer cvladebs 
function passMatch() {
    var password = document.getElementById("password").value; 
    var confirmPassword = document.getElementById("password2").value;
    console.log(password);
    if (password != confirmPassword) {
        document.getElementById("caution").innerHTML="password does not match"
    } else{
    document.getElementById("caution").innerHTML="";} 
}


function Checkuser()   {   
    var user = document.getElementById("username").value;
    var pass=  /[a-z]/;  
    console.log(user)
    if(user.match(pass))   
       {  
        document.getElementById("caution").innerHTML=""; 
    }  
        else    {   
       document.getElementById("caution").innerHTML='username must contain alphabetic characters'
    } 
}

function Checkfullname()   {   
    fullname = document.getElementById("fullname").value;
    var pass=  /[a-zA-Z]/;  
    if(fullname.match(pass))   
       {  
        document.getElementById("caution").innerHTML=""; 
    }  
        else    {   
       document.getElementById("caution").innerHTML='fullname must only contain alphabetic characters'
    } 
}

 function Checkmail()   {   
    var email = document.getElementById("email").value;
    var pass=  /^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i;  
    if(pass.test(email))   
       {  
        document.getElementById("caution").innerHTML="";
    }  
        else    {   
       document.getElementById("caution").innerHTML='email is not valid'
    }   
 }

 function Checkpassword()   {   
     password = document.getElementById("password").value;
    var pass=  /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{6,20})/;  
    if(password.match(pass))   
       {  
        document.getElementById("caution").innerHTML="";
    }  
        else    {   
       document.getElementById("caution").innerHTML='range 6-20, min one number, one upper case, one lowercase, one special character'
    } 
}

function savelocalstorage() {
  password = document.getElementById("password").value;
  email = document.getElementById("email").value;
  user = document.getElementById("username").value;
  fullname = document.getElementById("fullname").value;
  let date = new Date();
  localStorage.setItem("user", user);
  localStorage.setItem("password", password);
  localStorage.setItem("email", email);
  localStorage.setItem("date", date);
  localStorage.setItem("fullname", fullname);
}
