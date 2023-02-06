function validateName(){
    let vn = document.getElementById("name");
    let vEn = document.getElementById("nameError");
    let regName = /^[a-zA-Z ]{2,30}$/;
    if(!vn.value.match(regName)||vn.value.trim()==""){
        vEn.innerHTML="<p>Enter valid Name</p>";
        return false;
    }
    else{
        vEn.innerHTML="";
        return true;
    } 
}
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
        email_error.innerHTML="<span>Valid Email address</span>";
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
        return false;
    }
    else{
        pass_error.innerHTML="";
        return true;
    } 
    }
function validateConfirm(){
    let confirm = document.getElementById("confirmPassword");
    let confirm_error = document.getElementById("confirmError");
    let pass = document.getElementById("password");
    if(confirm.value.trim()==''){
        confirm_error.innerHTML="<p>Confirm Password must be filled</p>";
        return false;
    }
    else if(pass.value != confirm.value){
        confirm_error.innerHTML="<p>Password do not match</p>";
        confirm.style.borderColor ="red";
        return false;
    }
    else{
        confirm_error.innerHTML="";
        confirm.style.borderColor="green";
        return true;
    }
}
function validateNumber(){
    let number = document.getElementById("number");
    let number_error = document.getElementById("numberError");
    let regNum =/^\d{3}[-\.\s]?\d{3}[-\.\s]?\d{4}$/;
    if(!number.value.match(regNum)|| number.value.trim()==""){
        number_error.innerHTML ="<p>Enter valid Mobile Number</p>";
        return false; 
    }
    else if(number.value.length >12){
        number_error.innerHTML="<p>Enter valid Mobile Number</p>";
        return false;
    }
    
    else{
        number_error.innerHTML="";
        return true;
    }
}
function validateSignIn(){
    if( validateName() && validateEmail() && validatePassword() && validateConfirm() && validateNumber()){
        alert("Signin successful!!")
        return true
   }
   else{
       return false
   }
}