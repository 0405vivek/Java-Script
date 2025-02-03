
document.querySelector("#ProductForm").addEventListener("submit", (event) => {
    event.preventDefault();

    let pName = document.getElementById("Product_name").value;
    let pImage = document.getElementById("Product_image").value;
    let price = document.getElementById("Price").value;
    let description = document.getElementById("Description").value;

    let formData = {
        Product_name: pName,
        Product_image: pImage,
        Price: price,
        Description: description,
    };

    let products = JSON.parse(localStorage.getItem("Product")) || [];
    products.push(formData);

    localStorage.setItem("Product", JSON.stringify(products));
    document.querySelector("form").reset();

    loadData();
});

function loadData() {
    let allData = JSON.parse(localStorage.getItem("Product")) || [];

    let result = "";
    allData.forEach((record, index) => {
        let row = `
            <div class="product-card">
                <div class="product-image">
               
                    <img src="${record.Product_image}" alt="${record.Product_name}" width="100">
                </div>
                <div class="product-info">
                    <h2 class="product-title">${record.Product_name}</h2>
                    <p class="product-description">${record.Description}</p>
                    <div class="product-price">${record.Price}</div>
                    <button class="product-btn">Add to Cart</button>
                </div>
            </div>`;
        result += row;
    });

    document.querySelector(".products").innerHTML = result;
}

loadData();
