//Timing Function

// 1.SetTimeOut
console.log("Hello");
let id = setTimeout(() => {
  console.log("World");
},2000)

// 2.SetInterval
console.log("Hello,Team");

let ID =setInterval(() => {
  console.log("Pixcel 2 Code");
},5000)


//3.clearInterval
console.log(setInterval(ID));
clearInterval(ID);

//4.clearTimeout
console.log(setTimeout(id));
clearTimeout(id);   
 
