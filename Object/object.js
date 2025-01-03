let obj =
{
    name : "John",
    age : 30,
    city : "New York"

};

console.log(obj)
console.log(obj.name)
console.log(obj["name"])

//adding new property
obj.age = 21
obj.gender = "male"
console.log(obj)

//deleting property 
delete obj.age
console.log(obj)

// Object method 

console.log(Object.keys(obj))
console.log(Object.values(obj))
// console.log(Object.entries(obj))
console.log(Object.entries(obj)[0][0])
console.log(Object.hasOwnProperty("name"))
console.log(Object.hasOwnProperty("mo"))
console.log(Object.assign(obj,{name : "jane"}))
console.log(    )



