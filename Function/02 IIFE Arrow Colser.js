// Arrow Function

let hello = () => {
    console.log("Hello World");
}

hello();

let add = (a, b) => a + b;
console.log(add(5, 10)); 


// IIFE - Immediately Invoked Function Expression

(function() {
    console.log("Hello, IIFE" );

})()

// nested function

// function outer() {
//     console.log("Outer function");
//     function inner() {
//         console.log("Inner function");
//     }
//     inner();

// }
// outer();
function outer(a) {
    console.log("Outer function");
    function inner(x,y) {
        console.log("Inner function", a ,x,y);
    }
    inner(15, 20);

}
outer(100);


// closer function

function outer() { 
    let a = 10;
    function inner() {
        console.log("Inner function", a);
    }
    return inner;
}
let i = outer();
i();


