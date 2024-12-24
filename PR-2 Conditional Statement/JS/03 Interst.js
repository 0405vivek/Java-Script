console.log("03 Intrast Calculator");

let amt = +prompt("Enter the amount");
console.log("The amount is: ", amt);
let int;
let year = +prompt("Enter the year");
console.log("The year is: ", year);

if (year>= 3 && year <= 5) {
    int = (amt * 3 *year)/100 ;
    console.log("The interest is: ", int);
}
else if (year >5 && year <= 8) {
    int = (amt * 5 * year) / 100;
    console.log("The interest is: ", int);
}
else if (year > 8 && year <= 12) { 
    int = (amt * 12 * year) / 100;
    console.log("The interest is: ", int);
}
else if(year > 12) {
    int = (amt * 15 * year) / 100;
    console.log("The interest is: ", int);
}


// output
// 03 Intrast Calculator
// The amount is:  10000
// The year is:  10
// The interest is:  150000
    