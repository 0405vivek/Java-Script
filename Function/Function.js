console.log("Type of function");

console.log("01 No Argument and No Return Type")
function addition(){
    let a = +prompt("Enter first number: ");
    let b = +prompt("Enter second number: ");
    let c = a+b;
    console.log("Sum of two numbers is: "+c);
}

// addition();

console.log("02 No Argument with Return Type");

function squre(){
    let a = +prompt("Enter a number: ");
    let b = a*a;
    return b;
}

// let result = squre();
// console.log("Square of a number is: "+result);

console.log("03 Argument with No Return Type");

function sub(a,b){
    let c = a-b;
    console.log("Difference of two numbers is: "+c);
}

// sub(10,5);

console.log("04 Argument with Return Type");

function mul(a,b){
    
    return a*b;
}
// console.log("Multiplication of two numbers is: " ,mul(10,5));



let choise ;
choise= +prompt("Enter your choice: ");  
switch(choise){
    case 1:
        addition();
        break;
    case 2:
        squre();
        console.log("Square of a number is: " ,squre());
        break;
    case 3:
        sub(10,5);
        console.log("Difference of two numbers is: " ,sub(10,5));
        break;
    case 4:
        mul(10,5);
        console.log("Multiplication of two numbers is: " ,mul(10,5));
        break;
    default:
        console.log("Invalid choice");
}