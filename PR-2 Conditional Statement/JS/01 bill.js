console.log("01 Electricity Bill Calculator");

let units = prompt("Enter the number of units consumed: " ,units);

if (units <= 50) {
    let bill = units * 1;
    console.log("The electricity bill is: " + bill + " Rs.");
}
else if (units <= 100)  {
    let bill = 50 * 1 + (units - 50) * 2;
    console.log("The electricity bill is: " + bill + " Rs.");
}
else if (units <= 150) {
    let bill = 50 * 1 + 100 * 2 + (units - 100) * 3;
    console.log("The electricity bill is: " + bill + " Rs.");
}
else if (units >= 250) {
    let bill = 50 * 1 + 50 * 2 + 100 * 3 + (units - 200) * 4;
    console.log("The electricity bill is: " + bill + " Rs.");
}

// output
// 01 Electricity Bill Calculator
// Enter the number of units consumed: 120
// The electricity bill is: 220 Rs.
