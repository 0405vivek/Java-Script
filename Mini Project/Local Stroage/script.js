let fname = document.querySelector("#fname");
let lname = document.querySelector("#lname");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let mobileNo = document.querySelector("#mobileNo");
let role = document.querySelector("#role");
let addEmpForm = document.querySelector("#addEmp");

let efname = document.querySelector("#efname");
let elname = document.querySelector("#elname");
let eemail = document.querySelector("#eemail");
let epassword = document.querySelector("#epassword");
let emobileNo = document.querySelector("#emobileNo");
let erole = document.querySelector("#erole");
let editEmpForm = document.querySelector("#editEmp");

let addEmployeeDiv = document.querySelector("#add-employee");
let editEmployeeDiv = document.querySelector("#edit-employee");

let updateIndex = null;


addEmpForm.addEventListener("submit", (e) => {
    e.preventDefault(); 

    let newEmployee = {
        fname: fname.value,
        lname: lname.value,
        email: email.value,
        password: password.value,
        mobileNo: mobileNo.value,
        role: role.value
    };

    // Get existing employees or initialize an empty array
    let employees = JSON.parse(localStorage.getItem("employees")) || [];

    // Add the new employee
    employees.push(newEmployee);

    // Save updated employees array back to localStorage
    localStorage.setItem("employees", JSON.stringify(employees));

    // Reset the form
    addEmpForm.reset();

    // Reload the data to reflect the changes
    loadData();
    alert("Employee added successfully!");
});

function loadData() {
    // Get all employees from localStorage
    let allData = JSON.parse(localStorage.getItem("employees"));

    let result = "";
    allData.forEach((record, index) => {
        let row = `<tr>
        <td>${index + 1}</td>
        <td>${record.fname}</td>
        <td>${record.lname}</td>
        <td>${record.email}</td>
        <td>${record.mobileNo}</td>
        <td>${record.role}</td>
        <td><button onclick="deleteEmployee(${index})">Delete</button> || <button onclick="editEmployee(${index})">Edit</button></td>
        </tr>`
        result = result + row;
    });

    document.querySelector("#viewData").innerHTML = result;
}

loadData()

function deleteEmployee(index) {
    let allData = JSON.parse(localStorage.getItem("employees"));
    console.log(allData[index]);
    allData.splice(index, 1);


    // localStorage.removeItem("employees",JSON.stringify(allData));
    localStorage.setItem("employees", JSON.stringify(allData));
    loadData();
}

// function editEmployee(index) {
    
//     let allData = JSON.parse(localStorage.getItem("employees"));
//     // console.log(allData[index]);

//     let record = allData[index];

//     efname.value = record.fname;
//     elname.value = record.lname;
//     eemail.value = record.email;
//     epassword.value = record.password;
//     emobileNo.value = record.mobileNo;
//     erole.value = record.role;

//     updateIndex = index;

//     addEmployeeDiv.style.display = "none";
//     editEmployeeDiv.style.display = "block";

// }

// editEmpForm.addEventListener('submit', (e) => {
//     e.preventDefault();

//     let allData =JSON.parse(localStorage.getItem("employees"));

//     allData[updateIndex]={
//         fname:efname.value,
//         lname:elname.value,
//         email:eemail.value,
//         password:epassword.value,
//         mobileNo:emobileNo.value,
//         role:erole.value
//     }

//     localStorage.setItem("employees",JSON.stringify(allData));
//     loadData();

//     addEmployeeDiv.style.display = "block"
//     editEmployeeDiv.style.display = "none"
// })


































// function deleteEmployee(index) {
//     // Get employees from localStorage
//     let employees = JSON.parse(localStorage.getItem("employees")) || [];

//     // Remove the selected employee
//     employees.splice(index, 1);

//     // Save the updated array back to localStorage
//     localStorage.setItem("employees", JSON.stringify(employees));

//     // Reload the table to reflect changes
//     loadData();
//     alert("Employee deleted successfully!");
// }

// // Initial load of data
// loadData();


function editEmployee(index) {
    let allData = JSON.parse(localStorage.getItem('employee'))
    // console.log(allData[index])
    let record = allData[index]
  
    efname.value = record.firstname
    elname.value = record.lastname
    eemail.value = record.email
    epassword.value = record.password
    
  
    // updateindex = index
    updateIndex = index
    addEmployeeDiv.style.display = "none"
    editEmployeeDiv.style.display = "block"
  }
  
  document.querySelector("#EditForm").addEventListener("submit",(event) => {
    event.preventDefault(); 
  
    let allData = JSON.parse(localStorage.getItem('employee'))
  
    allData[Updateindex] = {
        firstname: editfirstname.value,
        lastname: editlastname.value,
        email: editemail.value,
        password: editpassword.value,
    }
  
    localStorage.setItem("employee", JSON.stringify(allData));
    loadData();
  
    addEmployeeDiv.style.display = "block"
    editEmployeeDiv.style.display = "none"
  });