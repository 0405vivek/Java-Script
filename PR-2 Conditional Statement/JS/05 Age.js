console.log("05 Age")

let age = +prompt("Enter your age: ");
console.log("Age",age);

if (age>1 && age<= 14) {
    console.log("You are a child");
}
else if (age>=15 && age<= 18) {
    console.log("You are a teenager");
}
else if (age>=19 && age<= 30) {
    console.log("You are an young");
}
else if (age>=31 && age<= 60) {
    console.log("You are a middle-aged person");
}
else if (age>60) {
    console.log("You are a senior citizen");
}

// output
// Enter your age:  45
// You are a middle-aged person


