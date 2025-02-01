let fname = document.querySelector("#fname")
let email = document.querySelector("#email")
let password = document.querySelector("#password")
let mobileNo = document.querySelector("#mobileNo")
let role = document.querySelector("#role")
let addEmpFrom = document.querySelector("#addEmp")

let efname = document.querySelector("#efname")
let eemail = document.querySelector("#eemail")
let epassword = document.querySelector("#epassword")
let emobileNo = document.querySelector("#emobileNo")
let erole = document.querySelector("#erole")
let editEmpFrom = document.querySelector("#editEmp")

let addEmployeeDiv = document.querySelector("#add-employee")
let editEmployeeDiv = document.querySelector("#edit-employee")

let updateIndex = null;

addEmpFrom.addEventListener("submit", (e) => {
    e.preventDefault();
    let newEmp = {
        name: fname.value,
        email: email.value,
        password: password.value,
        mobileNo: mobileNo.value,
        role: role.value
    };
    let employees = JSON.parse(localStorage.getItem('employees')) || [];

    employees.push(newEmp);
    localStorage.setItem("employees", JSON.stringify(employees));
   
    addEmpFrom.reset();
    loadData()
});


function loadData() {
    let allData = JSON.parse(localStorage.getItem('employees'))
    // console.log(allData);

    let result = "";
    allData.forEach((record, index) => {
        let row = `<tr>
        <td>${index + 1}</td>
        <td>${record.name}</td>
        <td>${record.email}</td>
        <td>${record.mobileNo}</td>
        <td>${record.role}</td>
        <td><button onclick="deleteEmployee(${index})">Delete</button> || <button onclick="editEmployee(${index})">Edit</button></td>
        </tr>`
        result = result + row;
    });

    document.querySelector('#viewData').innerHTML = result
}

loadData()


function deleteEmployee(index) {
    let allData = JSON.parse(localStorage.getItem('employees'))
    // console.log(allData[index])
    allData.splice(index, 1);

    localStorage.setItem("employees", JSON.stringify(allData));
    loadData();
}


function editEmployee(index) {
    let allData = JSON.parse(localStorage.getItem('employees'))
    // console.log(allData[index])
    let record = allData[index]

    efname.value = record.name
    eemail.value = record.email
    epassword.value = record.password
    erole.value = record.role
    emobileNo.value = record.mobileNo

    updateIndex = index

    addEmployeeDiv.style.display = "none"
    editEmployeeDiv.style.display = "block"
}


editEmpFrom.addEventListener('submit', (e) => {
    e.preventDefault();

    let allData = JSON.parse(localStorage.getItem('employees'))

    allData[updateIndex] = {
        name: efname.value,
        email: eemail.value,
        password: epassword.value,
        mobileNo: emobileNo.value,
        role: erole.value
    }

    localStorage.setItem("employees", JSON.stringify(allData));
    loadData();
    
    addEmployeeDiv.style.display = "block"
    editEmployeeDiv.style.display = "none"
})