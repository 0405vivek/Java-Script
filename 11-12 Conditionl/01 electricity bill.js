
console.log("01 Electricity Bill Calculator");

let units = 400;

if (units <= 100) {
    let bill = units * 0.60 +50;
    console.log("The electricity bill is: " + bill + " Rs.");
} 
else if (units <= 200) {
    let bill = (100 * 0.60) + ((units - 100) * .80+50);
    console.log("The electricity bill is: " + bill + " Rs.");
}
else if (units <= 300) {
    let bill = (100 * .60) + ((units - 100) * .80) + ((units - 200) * .90) +50;
    console.log("The electricity bill is: " + bill + " Rs.");
}
else if (units > 300){

    let bill = (100 * .60) + ((units - 100) * .80) + ((units - 200) * .90) + ((units - 300) * 1.10) +50 *0.15;
    console.log("The electricity bill is: " + bill + " Rs.");
}