// 1. Write a JAVASCRIPT Program to print a greeting message using with argument no return type function when call a function without argument at that time print message Good Morning.

console.log("1. Write a JAVASCRIPT Program to print a greeting message using with argument no return type function when call a function without argument at that time print message Good Morning.");

function greet(x) {
    if (x == null) {
        console.log("Good Morning");
        
    }else{

        console.log("Invelid Input....");
    }

}
greet();

// output:
// Good Morning

console.log("**************************************************************************")

// 2. Write a JAVASCRIPT Program to find Circle area (area = pi*r*r) using return type with argument function.

console.log("2. Write a JAVASCRIPT Program to find Circle area (area = pi*r*r) using return type with argument function.");

function circleArea(r) {
    let area = 3.14 * r * r;
    return area;
}
let result = circleArea(5);
console.log("Area of Circle is: " + result);

// OUTPUT:
// Area of Circle is: 78.5

console.log("**************************************************************************")

// 3. Write a JAVASCRIPT Program to find Triangle area ( area = (l*h)/2 ) using return Type with argument function.

console.log("3. Write a JAVASCRIPT Program to find Triangle area ( area = (l*h)/2 ) using return Type with argument function.")

function triangleArea(l, h) {
    let area = (l * h) / 2;
    return area;
}
let result1 = triangleArea(10, 5);

console.log("Area of Triangle is:" ,result1)

// OUTPUT:
// Area of Triangle is: 25


console.log("**************************************************************************")


// 4. Write a JAVASCRIPT Program to find Rectangle area = I * h using return type with argument function.

console.log("4. Write a JAVASCRIPT Program to find Rectangle area = I * h using return type with argument function.")

function rectangleArea(l, h) {
    let area = l*h;
    return area;
}

let result2 = rectangleArea(10,5)
console.log("Area of Rectangle is:" ,result2)

// OUTPUT:
// Area of Rectangle is: 50

console.log("**************************************************************************")

// 5. Write a JAVASCRIPT Program to find ans of ((b*b)(4*a*c))/(2*a) using return type with argument function.

console.log("5. Write a JAVASCRIPT Program to find ans of ((b*b)(4*a*c))/(2*a) using return type with argument function.")

function multiplication(a,b,c) {
    let ans= ((b*b)*(4*a*c))/(2*a);
    return ans;

}

let result3 = multiplication(10,20,2)
console.log("Area of Quadratic Equation is:" ,result3)

// OUTPUT:
// Area of Quadratic Multiplication is: 200

console.log("**************************************************************************")

// 6. Write a JAVASCRIPT Program to find ans of (a*a) + (2*a*b) + (b*b) using return type with argument function

console.log("6. Write a JAVASCRIPT Program to find ans of (a*a) + (2*a*b) + (b*b) using return type with argument function")

function addition(a,b){
    let ans = (a*a) + (2*a*b) + (b*b);
    return ans;
}

let result4 =addition(10,20)
console.log("Area of addition is:" ,result4)

// OUTPUT:
// Area of addition is: 500

console.log("**************************************************************************")


// 7. Write a JAVASCRIPT Program to convert Fahrenheit to Celsius (c = (f-32)/1.8 ) using return type with argument function

console.log("7. Write a JAVASCRIPT Program to convert Fahrenheit to Celsius (c = (f-32)/1.8 ) using return type with argument function")

function Fahrenheit(f){

    let ans = (f-32)/1.8;
    return ans;
    
}

let result5 = Fahrenheit(100)
console.log("Area of Fahrenheit is:" ,result5)

// OUTPUT:
// Area of Fahrenheit is: 37.77777777777778


console.log("**************************************************************************")

// 8. Write a JAVASCRIPT Program to convert Celsius to Fahrenheit (f=  (c*1.8)+32 ) using return type with argument function

console.log("8. Write a JAVASCRIPT Program to convert Celsius to Fahrenheit (f =  (c*1.8)+32 ) using return type with argument function")

function Celsius(c){

    let ans = (c*1.8)+32;
    return ans;
}

let result6 = Celsius(37.77)
console.log("Area of Celsius is:" ,result6)

// OUTPUT:
// Area of Celsius is: 100

console.log("**************************************************************************")

// 9. Write a JAVASCRIPT Program to find if a given number is odd or even using an argument with no return type.

console.log("9. Write a JAVASCRIPT Program to find if a given number is odd or even using an argument with no return type.")

function oddEven(n){

    if(n%2==0){
        console.log("Number is even")
    }
    else{
        console.log("Number is odd")
    }
    
}
oddEven(11)

// OUTPUT:
// 11
// Number is odd
// 10
// Number is even

console.log("**************************************************************************")

// 10. Write a JAVASCRIPT Program to swap a value without third variable using with argument no return type

console.log("10. Write a JAVASCRIPT Program to swap a value without third variable using with argument no return type")

function swap(x,y){
    console.log("Value of x is: ",x);
    console.log("Value of y is: ",y);

    x = x + y;
    y = x - y;
    x = x - y;
    console.log("After swapping: x =", x, "y =", y);
}


swap(10,15)
// OUTPUT:
// After swapping: x = 5 y = 10


