console.log(" 01 write a JS program to display the multiplication table of a given integer using a while loop. The integer is entered by the user. ")
let x=1 ,y =4;

while(x<=10){
    console.log(y+"*"+x+"="+y*x);
    x++;
}

// output:
// 4*1=4
// 4*2=8
// 4*3=12
// 4*4=16
// 4*5=20
// 4*6=24
// 4*7=28
// 4*8=32
// 4*9=36
// 4*10=40


console.log("****************************************************")

console.log(" 02 write a JS program to find the factorial of a given integer using a while loop. The integer is entered by the user. ")



let n, i=1, fact=1;
n = prompt("Enter a number: ");

while(i<=n)
{
  fact = fact*i 
  i++
}
console.log(fact)



// output:
// Enter a number: 5
// 120



console.log("****************************************************")


console.log(" 03 write a JS program to find the Armstrong number of a given number using while loop.  ");


let sum = 0;
let number = +prompt('Enter a three-digit positive integer: ');
console.log(number);

let temp = number;
while (temp > 0) {
    
    let remainder = temp % 10;

    sum += remainder * remainder * remainder;
    
    temp = parseInt(temp / 10); 
}

if (sum == number) {
    console.log("number is an Armstrong number");
}
else {
    console.log("number is not an Armstrong number.");
}


// output:
// Enter a three-digit positive integer: 153
// number is an Armstrong number


console.log("****************************************************")

console.log(" 04 write a JS program to find the palindrome number using while loop. ")
{
let sum = 0;
let number = +prompt('Enter a three-digit positive integer: ');
console.log(number);

let  = number;
while (temp > 0) {
    let remainder = temp % 10;
    sum = remainder + (sum * 10);
    temp = parseInt(temp / 10);
    
}
if (sum === number) {
    console.log("number is a palindrome number");
}else {
    console.log("number is not a palindrome number.");
}
}

// output:
// Enter a three-digit positive integer: 121
// number is a palindrome number




console.log("****************************************************")

console.log(" 05 write a JS program to find the Fibonacci series using while loop. ")

{
    let n = 10, t1 = 0, t2 = 1;
    console.log("First " + n + " terms: ");
    
    for (let i = 1; i <= n; i++) {
        
        console.log(t1);
        let sum = t1 + t2;
        t1 = t2;
        t2 = sum;
    }
    
}  


// output:
// First 10 terms:

console.log("****************************************************")

console.log(" 06 write a JS program to add all the integers between 0 to 30 and display the total do while loop. ")

let j = 0;
let total = 0;

do {
    total += j;
    j++;
}   while (j <= 30);

console.log("The sum of all integers between 0 to 30 is " + total);



// output:
// The sum of all integers between 0 to 30 is 195
// output: 465

console.log("****************************************************")


console.log(" 07 write a JS program to find the integers between 0 to 100  of a number using while loop. ")

let b=1 , c=0;

do {
    if (b % 3 == 0) {
        if (b % 5 == 0) {
            console.log("FizzBuzz");
        }else {
            console.log("Fizz");
        }

    }else if (b % 5 == 0) {
        console.log("Buzz");
    }
    else if (b % 3 == 0 && b % 5 == 0) {
        console.log("FizzBuzz");
    }else {
        console.log(b);
    }
        b++;
    }while (b <= 100);



// output: 1, 2, Fizz, 4, Buzz, Fizz,


console.log("****************************************************")

console.log(" 08 write a JS program that displaya 1-2-3-4-5-6-7-8-9-10 on one line using for loop. ");

{
    let s = '';
    for(let i = 1; i <=10; ++i) {
    s += " " + i;
}
console.log(s);
}
// output: 1 2 3 4 5 6 7 8


console.log("****************************************************")

console.log(" 09 write a JS program to find the sum of all 1+4+9+16+...+ 100=365 using for loop. ");

let s = 0;
for (let e = 1; e <= 10; e++) {
    console.log(e * e);
    s += e * e;
}
console.log("the sam is" ,s);


// output: 385




console.log("****************************************************")

console.log(" 10 print partrnt. ");

let m,l;

for ( m = 5; m >= 1; m--) {

    let data = " ";
    for ( l = 5; l>=m ; l--) {
    data += l +" ";  
    }
    console.log(data);
}

output:
// 5
// 5 4
// 5 4 3
// 5 4 3 2
// 5 4 3 2 1



console.log("******************");

console.log(" 11 print partrnt. ");

{
    let i ,j ,k=1;

    for(i=1; i<=5; i++) {

        let data = " ";
        for(j=1;j<=i;j++){
            data = data+k+" ";
            k++;
             
        }
        console.log(data);
    }
}


// output:
// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15


