

class Test{
    value = "Hello"
    // no argument no return
    vivek() {
        console.log("Hi am Vivek")
  
    }
    // no argument with return
    message(){
        return"subtrection of c & d is: ";
   
    }
    //with argument with return
    addition(a,b){
        return `addition  of a & b is: ${a+b}`;
    }
    //with argument no return
    subtrection(c,d){
        console.log(`${this.message()} ${c-d}`)
    }

}

let obj = new Test();
obj.vivek();
console.log(obj.value);


// argument & paramiter

console.log(obj.addition(5,3));
obj.subtrection(10,4)

