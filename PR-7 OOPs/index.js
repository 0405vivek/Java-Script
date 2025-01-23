// 1) Create a School class and create a student and faculty method. The Student
// method gives the student name, email and contact number as arguments and
// prints all details the same as faculty using class & object. (3 marks)

console.log("1.Create a School class and create a student and faculty method.");

class School {
    constructor(name, email, contact) {
        this.name = name;
        this.email = email;
        this.contact = contact;
    }
    
    student(name, email, contact) {
        console.log(`Student Name: ${name}`);
        console.log(`Student Email: ${email}`);
        console.log(`Student Contact Number: ${contact}`);
         
        
    }
  
}
class Faculty extends School {
    constructor(name, email, contact) {
        super(name, email, contact);
        this.name = name;
        this.eamil=email;
        this.contact=contact;
    }

    faculty(name, email, contact) {
        console.log(`faculty Name: ${name}`);
        console.log(`faculty Email: ${email}`);
        console.log(`faculty Contact Number: ${contact}`);
    }
}

const faculty = new Faculty("Vivek", "vivek0405@gamail.com", "1234567890");
faculty.faculty("Jenish H","jenish04@gmail.com","9874563210")
faculty.student("Vivek P", "vivek0405@gamail.com", "1234567890");


// output:
// Student Name: Vivek P
// Student Email: vivek0405@gamail.com
// Student Contact Number: 1234567890
// faculty Name: Jenish H
// faculty Email: jenish04@gmail.com
// faculty Contact Number: 9874563210




console.log("*********************************************************************************");

// 2) Create a Person class with an argument name and age. create an Employee class
// through print out details of Person Class. (3 marks)

console.log("2.Create a Person class with an argument name and age. create an Employee class through print out details of Person Class.");

class Parson{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    parson(name,age){
        console.log(`Employee Name: ${name}`);
        console.log(`Employee Age: ${age}`);
    }
}
class Employee extends Parson{
    constructor(name,age,employeeid,department){
        super(name,age);
        this.employeeid=employeeid;
        this.department=department;
    }

    employee(employeeid,department){
        console.log(`Employee ID: ${this.employeeid}`);
        console.log(`Employee Department: ${this.department}`);
    }


}

let employee=new Employee("Vivek",21,12345,"Computer");
employee.parson(employee.name,employee.age);
employee.employee(employee.name,employee.age);

// output:
// Employee Name: Vivek
// Employee Age: 21
// Employee ID: 12345
// Employee Department: Computer




console.log("*********************************************************************************");


//3) Employee class creates a constructor called print a simple message.

console.log("3 Employee class creates a constructor called print a simple message.");

class Employee1{
    constructor(){
        console.log("Employee class called..........");
    }
}

let employee1=new Employee1();

// output:
// Employee class called..........


console.log("*********************************************************************************");

// 4) Create a shape class and create a rectangle and circle method find circle
// area(3.14*r*r) and rectangle area (width*height) using with argument. (3 marks)

console.log("4) Create a shape class and create a rectangle and circle method find circle area and rectangle area using with argument.");

class Shape{
    constructor(){
        console.log("Shape class called..........");
    }
    circle(r){
        console.log(`Circle area is ${3.14*r*r}`);
    }
    rectangle(width,height){
        console.log(`Rectangle area is ${width*height}`);
    }

}
let shape=new Shape();
shape.circle(5);
shape.rectangle(5,6);

// output:
// Shape class called..........
// Circle area is 78.5
// Rectangle area is 30
console.log("*********************************************************************************");