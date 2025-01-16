document.querySelector("form").addEventListener("submit",(event) => {
    event.preventDefault(); 

   
    document.getElementById("firstnameError").innerHTML = "";
    document.getElementById("lastnameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("passwordError").innerHTML = "";
    document.getElementById("genderError").innerHTML = "";


    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const gender = document.querySelector('input[name="gender"]:checked');

    
  console.log(firstname);
  console.log(lastname);
  console.log(email);
  console.log(password);
  console.log(gender);


    if (firstname == "") {
      document.getElementById("firstnameError").innerHTML = "First name is required.";
    }

    if (lastname == "") {
      document.getElementById("lastnameError").innerHTML = "Last name is required.";
    }
    
    if (email == "") {
      document.getElementById("emailError").innerHTML = "Email is required.";
 }

    if (password == "") {
      document.getElementById("passwordError").innerHTML = "Password is required.";
    } else if (password.length < 6) {
      document.getElementById("passwordError").innerHTML = "Password must be at least 6 characters.";
    }

    if (!gender) {
      document.getElementById("genderError").innerHTML = "Please select your gender.";
    }
  });