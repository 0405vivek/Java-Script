// singal inheritance

class A{
    showA(){
        console.log("A");
    }
}
class B extends A{

    
    showB(){
        this.showA();
        console.log("B");
    }
}

let obj = new B();
obj.showB();


//Mutilevle 


class AB{
    showAB(){
        console.log("AB CALLED.............");
    }
}
class CD extends AB{
    showCD(){
        this.showAB();
        console.log("CD CALLED.............");
    }
}
let obj1 = new CD();
obj1.showCD();

