 function event() {
    event.preventDefault();
 }

 function setError(id, messages){
   
        document.getElementById(id).innerHTML = messages;
    
 }
  function clearError() {
    
    const errorIds = ["fnameError", "unameError", "emailError","phoneError", "passwordError","conpasswordError", "genderError"];
    for (const id of errorIds) {
        document.getElementById(id).innerHTML = "";
    }
    // for(id of messages){
    // document.getElementById("fnameError").innerHTML = "";
    // document.getElementById("unameError").innerHTML = "";
    // document.getElementById("emailError").innerHTML = "";
    // document.getElementById("passwordError").innerHTML = "";
    // document.getElementById("genderError").innerHTML = "";
    // }
  }



document.querySelector("form").addEventListener("submit" ,(event) => {
    
clearError();
  
    const fname = document.getElementById("fname").value;
    const username = document.getElementById("uname").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const password = document.getElementById("password").value;
    const conpassword = document.getElementById("conpassword").value;
    const gender = document.getElementById("input[name= 'gender']:checked");


    console.log(fname);
    console.log(username);
    console.log(email);
    console.log(phone);
    console.log(password);
    console.log(conpassword);
    console.log(gender);

    if(fname == ""){
        // document.getElementById("fnameError").innerHTML = "Please enter your first name";
        setError("fnameError", "Please enter your first name");
    }
    if(username == ""){
        setError("unameError", "Please enter your username");
    }
    if(email == ""){
        setError("emailError","Please enter your Email")
    }
    if(phone == ""){
        setError("phoneError", "Please enter your phone number");
    }else{
        if(phone.length != 10){
            (!/^[0-9]+$/.test(phone))
            setError("phoneError", "Please enter a valid phone number");
        }
    }
    if(password == ""){
        setError("passwordError", "Please enter your password");
    }else  if (!password) {
        setError("passwordError","Password is required.");
       
    } else {
        const errors = [];
        if (password.length < 8) {
            errors.push("at least 8 characters");
        }
        if (!/[A-Z]/.test(password)) {
            errors.push("an uppercase letter");
        }
        if (!/[a-z]/.test(password)) {
            errors.push("a lowercase letter");
        }
        if (!/[0-9]/.test(password)) {
            errors.push("a number");
        }
        if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            errors.push("a special character");
        }
        if (errors.length > 0) {
            setError("passwordError", "Password must contain " + errors.join(", "));
        } 
    }
    if (password !== conpassword) {
        setError("conpasswordError", "Password and Confirm Password do not match.");
        
    }
    if (!gender) {
        setError("genderError", "Please select your gender.");
        
    }
}); 
        
    




