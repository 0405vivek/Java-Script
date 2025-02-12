
let obj= new XMLHttpRequest();
obj.onload = function(){
    document.getElementById("demo").responseText;
    let data = JSON.parse(obj.responseText);
    // console.log(data);
    // console.log(obj.responseText);
    data.products.forEach(element => {
        console.log(element);
        let div = document.createElement("div");
        div.innerHTML = `
        <h1>${element.title}</h1>
        <img src="${element.images[0]}" alt="" style= " width:200px">
        <p>${element.description}</p>
        <p>${element.price}</p>
        <p>${element.discountPercentage}</p>
        <span>${element.reviews.array[0]}</span>
        `;

        document.getElementById("demo").append(div); 
        
        


    })
    

    
}
obj.open("GET","https://dummyjson.com/products",true);
obj.send();




