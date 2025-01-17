 function event() {
    event.preventDefault();
 }

 function setError(id, messages){
   
        document.getElementById(id).innerHTML = messages;
    
 }
  function clearError() {
    
    const errorIds = ["fnameError", "unameError", "emailError", "passwordError", "genderError"];
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
    const password = document.getElementById("password").value;
    const gender = document.getElementById("input[name= 'gender']:checked");


    console.log(fname);
    console.log(username);
    console.log(email);
    console.log(password);
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
}); 
        
    




