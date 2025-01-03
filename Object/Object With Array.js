let V = {
    name: "Vivek",
    age: 21,
    hobbies: ["Reading", "Coding", "Gaming"],
    address: {
        street: "123 Main St",
        city: "Anytown",
        state: "CA",
        pincod : 394320
    }
};

// console.log(V);
// console.log(V.name);

// looping through array in object
// console.log(V.hobbies[0]);

// for in

for (let i in V) {
   
    if(i == "hobbies"){
        for (let j in V.hobbies) {
            console.log(`${i} => ${V.hobbies[j]}`);
        }
    }else{
        console.log(`${i} => ${V[i]}`);
    }

}

// for of

for (let i of V.hobbies) {
    console.log(i);
}

