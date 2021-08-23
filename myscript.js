function emailValidation() { 
    var checkemail=document.getElementById("email").value;

    if (checkemail!="") { 

            var emailRegex = /\S+@\S+\.\S+/;

            var isEmail = emailRegex.test(document.getElementById("email").value);

            if (!isEmail) {
                document.getElementById("email").style.borderColor='red';
                document.getElementById("errorText").innerText="Check your email please";

            } else { 
                document.getElementById("successText").innerText="submitted";
                document.getElementById("errorText").style.display= 'none';
                document.getElementById("email").style.borderColor='greenyellow';
            }
            return isEmail;
   }else{
    document.getElementById("email").style.borderColor='red';
    document.getElementById("errorText").innerText=" you forgot to add your email";
     
   } 
}