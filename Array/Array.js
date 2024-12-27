let data= [11,22,33,44,55,66,77,88,99,100];
console.log(data);

let data1 = data[0];
console.log(data1);

data.push(101);
console.log("push",data);  

data.pop();
console.log("pop",data);

data.shift();
console.log("shift",data);

data.unshift(1);
console.log("unshift",data);

// data.splice(2,211,222,333);
// console.log("splice",data);

console.log("slice");
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]



data.forEach((valu,index)=>{
    console.log(index ,"===>" , valu);
})


 let i = data.map((valu,index)=>{
    return valu*2;
    
})

console.log("map",  i);     


    