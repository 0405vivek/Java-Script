document.querySelector("form").addEventListener("submit",(event) => {
    // consol value of event printing
    event.preventDefault();


   
    $(`#firstnameError`).html ("");
    $(`#lastnameError`).html ("");
    $(`#emailError`).html ("");
    $(`#passwordError`).html ("");
    $(`#genderError`).html ("");


    const firstname = $("#firstname").val();
    const lastname = $("#lastname").val();
    const email =$("#email").val();
    const password = $("#password").val();
    const gender = ('input[name="gender"]:checked');

    
  console.log(firstname);
  console.log(lastname);
  console.log(email);
  console.log(password);
  console.log(gender);


    if (firstname == "") {
      $("#firstnameError").html ("First name is required.");
    }

    if (lastname == "") {
      $("#lastnameError").html ("Last name is required.");
    }
    
    if (email == "") {
      $("#emailError").html ("Email is required.");
 }

    // if (password == "") {
    //   $("#passwordError").html ("Password is required.");
    // } else if (password.length < 8) {
    //   $("#passwordError").html ("Password must be at least 8 characters.");
    //   if(!/^[A-Z]/.test(password)){
    //     $("#passwordError").html ("Password must Uppercase letter." )

    //     if(!/^[a-z]/.test(password)){
    //         $("#passwordError").html ("Password must lowercase letter."   )
    //         if(!/^[0-9]/.test(password)){
    //             $("#passwordError").html ("Password must Number letter."   )
    //             if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)){
    //                 $("#passwordError").html ("Password must have at least one special character."   )
    //             }
    //     }
    //     }
    //     }
    
    // }


    if (!password) {
        $("#passwordError").html("Password is required.");
       
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
            $("#passwordError").html("Password must contain " + errors.join(", ") + ".");
            // hasError = true;
        }
    }






    
        
       
          console.log("Form submitted");
console.log("Firstname:", firstname);
console.log("Lastname:", lastname);
console.log("Email:", email);
console.log("Password:", password);
console.log("Gender:", gender);
      

    if (!gender) {
      $("#genderError").html ("Please select your gender.") ;
    }
  });


 

