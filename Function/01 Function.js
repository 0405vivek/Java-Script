// recursion Function

function Hello() {
    console.log("Hello World");
}

Hello();

// factorial

function fact(n) {
    if (n == 0) {
        return 1;
    } else {
        return n * fact(n - 1);
    }
}

console.log(fact(5));

//  fibonacci series

function fib(n) {
    if (n == 0) {
        return 0;
    } else if (n == 1) {
        return 1;
    } else {
        return fib(n - 1) + fib(n - 2);
    }
}

console.log(fib(7));

// sum

let a= function() { 
    let sum = 0;
    

    
}