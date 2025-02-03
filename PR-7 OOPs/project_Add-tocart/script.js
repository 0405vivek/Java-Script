document.querySelector("#ProductForm").addEventListener("submit", (event) => {
    event.preventDefault();

    const productName = document.getElementById("Product_name").value;
    const productImage = document.getElementById("Product_image").value;
    const price = document.getElementById("Price").value;
    const description = document.getElementById("Description").value;

    let formData = {
        Product_name: productName,
        Product_image: productImage,
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
                <div class="product-card__image">
                <div class="Product-card_delete">      
                <img src="img/close.png" style="width: 20px;">
                </div>
                    <img src="${record.Product_image}" alt="${record.Product_name}" width="100">
                </div>
                <div class="product-card__info">
                    <h2 class="product-card__title">${record.Product_name}</h2>
                    <p class="product-card__description">${record.Description}</p>
                    <div class="product-card__price-row">
                        <span class="product-card__price">${record.Price}</span>
                        <button class="product-card__btn">Add to Cart</button>

                    </div>
                </div>
            </div>
        `;
        result += row;
    });

    document.querySelector(".cont").innerHTML = result;
}

function deleteProduct(index) {
    let products = JSON.parse(localStorage.getItem("Product")) || [];

    products.splice(index, 1);

    localStorage.setItem("Product", JSON.stringify(products));
    loadData();
}

loadData();
