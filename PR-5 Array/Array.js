// 1 Write a simple JavaScript program to print expected Output using the following
// array.
// Sample array : myColor = ["Red", "Green", "White", "Black"];
// Red,Green,White,Black
// Red+Green+White+Black
// Red,Green,White
// Red
// Green,White
// Red,Green,White,Black,orange

let myColor = ["Red", "Green", "White", "Black"];
console.log(myColor);
// output
// Red,Green,White,Black

console.log(myColor.join(","));
// output
// Red,Green,White,Black

console.log(myColor.join("+"));
// output
// Red+Green+White+Black

console.log(myColor.slice(0, 3));
// output
// Red,Green,White

// console.log(myColor.shift());
// output
// Red

// console.log(myColor.shift(1),myColor.shift(2));
// output
// Green,White
 
// myColor.push('orange')
// console.log(myColor);

myColor.splice(4,1  , "orange");
console.log(myColor);
// output
// Red,Green,White,Black,orange

console.log("***************************************************************************");


// 2.Write a JavaScript program to get the sum of all array elements using for loop and foreach loop.

console.log("2 Sum of all array elements using for loop");
let numbers = [1, 2, 3, 4, 5, 6]
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];

}
console.log(sum);
// output
// 21

console.log("2 Sum of all array elements using foreach loop");
// let number = [1, 2, 3, 4, 5, 6]
let sum1 = 0;

numbers.forEach(function(value) {
    sum1 += value;
})
console.log(sum1);
// output
// 21

console.log("***************************************************************************");

// 3.Write a JavaScript program to print a maximum and minimum value of given array. (using function and logic)

console.log("3 Maximum and minimum value of given array");
let arr = [11, 2, 3, 4, 5, 16, 7, 8, 9, 10];
let max = arr[0];
let min = arr[0];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
    if (arr[i] < min) {
        
        min = arr[i];
        
    }
}

console.log("Maximum value is " + max);
console.log("Minimum value is " + min);

// output
// Maximum value is 16
// Minimum value is 1

console.log("***************************************************************************");

// 4.Write a JavaScript program to convert all array elements into ASCII values.
const inputArray = ['A', 'b', 'C', '1', '!'];
const asciiArray = convertToASCII(inputArray);

function convertToASCII(arr) {
    return arr.map(element => {
        // Check if the element is a string and has at least one character
        if (typeof element === 'string' && element.length > 0) {
            return element.charCodeAt(0); // Get ASCII value of the first character
        } else {
            return null; // Return null for non-string elements
        }
    });
}

// Example usage

console.log('Input Array:', inputArray);
console.log('ASCII Array:', asciiArray);

console.log("***************************************************************************");

// 5.Write a JavaScript program to remove negative values using the filter array unction.

console.log("5.Write a JavaScript program to remove negative values using the filter array unction.");

let num =[ -12, -5, 0, 1, 5, 12, 19, 20];
let negativeNum = num.filter(num => num <= 0);
console.log(negativeNum); 

// output: [-12, -5, 0]

console.log("***************************************************************************");


// 6. Write a JavaScript program using array map() method and return the square of the array element.

console.log("6. Write a JavaScript program using array map() method and return the square of the array element.")
let a = [2, 5, 6, 3, 8, 9];

let square = a.map(num => num * num);
console.log(square); 

// Output: [4, 25, 36, 9, 64, 81]


console.log("***************************************************************************");

{
    // 7.Write a JavaScript program for sorting an array in ascending descending.
    
    console.log("7.Write a JavaScript program for sorting an array in ascending descending.");
    
    let numbers = [23,20,17, 12,5, 0, 1, 5, 12, 19, 20];
    let myColor = ["Red", "Green", "White", "Black"];
    
    console.log("Original array : " + numbers);
    console.log("Sorted array : " + numbers.sort((a, b) => a - b));
    console.log("reverse array : " + numbers.reverse((a, b) => a - b));



    // output
    // Original array : 23,20,17, 12,5, 0, 1, 5, 12, 19, 20
    // Sorted array : 0,1,5,5,12,12,17,19,20,20,23
    // reverse array : 23,20,20,19,17,12,12,5,5,1,0

    
    console.log("Original array : " + myColor);
    console.log("Sorted array : " + myColor.sort());
    console.log("REVERSE array : " + myColor.reverse());


    // output
    // Original array : Red,Green,White,Black
    // Sorted array : Black,Green,Red,White
    // REVERSE array : White,Red,Green,Black

}


console.log("***************************************************************************");


// 8. Write a JavaScript program which filters out any string which is less than 8 characters.

console.log("8 Write a JavaScript program which filters out any string which is less than 8 characters.");

let words = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby'];
let filteredWords = words.filter(word => word.length <= 8);
console.log(filteredWords); 
// Output: ['Python', 'Go', 'Java', 'Ruby']


console.log("***************************************************************************");

// 9. write a JavaScript program to print expected output for the following string.
// x = "airplane"; output:- r
// x = "oxoxoxox"; output:- "oXoXoXoX"
// x = "A New Java Book";
// output:- "a new java book" , "A NEW JAVA BOOK"

console.log("9 write a JavaScript program to print expected output for the following string.");

let x = "airplane";
let y = "oxoxoxox";
let z = "A New Java Book";

console.log(x)
console.log(x.charAt(2));
// Output: r

console.log(y);
console.log(y.replace(/x/g, "X"));
// output: "oXoXoXoX"


console.log(z);
console.log(z.toLowerCase());
console.log(z.toUpperCase());
// output: 
// lower case "a new java book" ,
// upper case "A NEW JAVA BOOK"

console.log("***************************************************************************");


// 10. write a JavaScript program for array reverse.

console.log("10. write a JavaScript program for array reverse.");

let b = ['a','b', 'c', 'd', 'e', 'f'];
console.log(b.reverse());

// output: [ 'f', 'e', 'd', 'c', 'b', 'a' ]


console.log("***************************************************************************");

// 11. write a JavaScript program to check if a value is found or not?

console.log("11. write a JavaScript program to check if a value is found or not?");
{
    let C = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let D = +prompt("Enter a number to check if it is found in the array: ");
    console.log(C.includes(D));
    
}
// output: 
// 1 true
// 11 false

console.log("***************************************************************************");

// 12. write a JavaScript program to print your name and write the number of total characters.

console.log("12. write a JavaScript program to print your name and write the number of total characters.");

let name = "Vivek Prajapati";
console.log(name.length);
// output: 5

console.log("***************************************************************************");

// 13. write a JavaScript program given this output using replace concept.
// Input : - "I often take a walk with my dog in the evening. His dog follows him everywhere. I don't feed my dog in the morning";
// Output:- "I often take a walk with my cat in the evening. His cat follows him everywhere. I don't feed my cat in the morning"

console.log("13. write a JavaScript program given this output using replace concept.");

let str = "I often take a walk with my dog in the evening. His dog follows him everywhere. I don't feed my dog in the morning";
console.log(str.replace(/dog/g, "cat"));

console.log("***************************************************************************");

// 14. write a JavaScript program convert strmg to array.
// Input :- "Hire the top 1% freelance developers";
// Output :- ["Hire", "the", "top", "1%"]

console.log("14. write a JavaScript program convert strmg to array.");

let str1 = "Hire the top 1% freelance developers";
console.log(str1.split(" ",4));
// output: ["Hire", "the", "top", "1%"]

console.log("***************************************************************************");

// 15. write a JavaScript program to convert an array to string.
// Input:- ['5', 32, 'Daniel'];
// Output: 5,32,Daniel

console.log("15. write a JavaScript program to convert an array to string.");

let Arr = ['5', 32, 'Daniel'];
console.log(Arr.join(","));

// output: 5,32,Daniel