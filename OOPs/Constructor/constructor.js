
// 1.Defult constructor
class Hello{
    constructor(){
        console.log(`Hello, my name is vivek`)
    }
   
}       
let obj= new Hello();

// 2. permeter constructor
class Hii{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    display(){
        console.log(`Hello, my name is ${this.name} and age is ${this.age}`);
        return `Hello, my name is ${this.name} and age is ${this.age}`;
    }        
}

let v = new Hii("vivek",20);
console.log(v.display("vivek",20));

