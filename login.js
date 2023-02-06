function validateEmail(){
    let mail = document.getElementById("email");
    let email_error = document.getElementById("emailError");
    let regMail = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
    if(mail.value.trim()==''){
        email_error.innerHTML="<p>Email cannot be blank</p>";
        return false
    }
    else if(!mail.value.match(regMail)||mail.value.trim()==""){
        email_error.innerHTML="<p>Enter valid Email address</p>";
        return false;
    }
    else{
        email_error.innerHTML="";
        return true;
    }
}
function validatePassword(){
let pass = document.getElementById("password");
let pass_error = document.getElementById("passError");
var minMaxLength =/^[\s\S]{8,32}$/,
    upper=/[A-Z]/,
    lower=/[a-z]/,
    number=/[0-9]/
pass.addEventListener('input',()=>{    
if (pass.value.length >= 8 && /[a-z]/.test(pass.value) && /[A-Z]/.test(pass.value) && /\d/.test(pass.value)) 
   {pass.style.borderColor ="green";
   return true;} 
else if (pass.value.length >= 8 && /[a-z]/.test(pass.value) && /[A-Z]/.test(pass.value)) 
   {pass.style.borderColor = "Orange";
   return false;} 
else {
    pass.style.borderColor = "red"  ;
    return false;}    
})    
if(pass.value.trim()==''){
    pass_error.innerHTML="<p>Password cannot be blank</p>";
    return false;
}
else if(!pass.value.match(lower)||pass.value.trim()==""){
    pass_error.innerHTML=" <p>password must contain at least one lower case</p> "; 
    return false;   
}
else if(!pass.value.match(upper)||pass.value.trim()==""){
    pass_error.innerHTML="<p>Password must contain at least one upper case</p> "; 
    return false;  
}
   
else if(!pass.value.match(number)||pass.value.trim()==""){
    pass_error.innerHTML="<p>Password must contain at least one digit</p> ";
    return false;    
}
else if(!pass.value.match(minMaxLength)||pass.value.trim()==""){
    pass_error.innerHTML="<p>Password must contain at least 8 characters </p>";
    return false
}
else{
    pass_error.innerHTML="";
    return true
} 
}

function validateLogin(){
    if( validateEmail()&& validatePassword()){
         alert("Successfully Logged In!!")
         return true
    }
    else{
        return false
    }
}



    

        

