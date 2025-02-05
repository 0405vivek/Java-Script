function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    document.querySelector(".cart-count").textContent = cart.length;
}

function loadCartData() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let result = "";
    if (cart.length === 0) {
        result = `<p>Your cart is empty.</p>`;
    } else {
        cart.forEach((item, index) => {
            result += `
            <div class="product" data-index="${index}">
                <div class="product-card">
                    <div class="product-image">
                        <img src="${item.Product_image}" alt="${item.Product_name}" width="100">
                    </div>
                    <div class="product-info">
                        <h2 class="product-title">${item.Product_name}</h2>
                        <p class="product-description">${item.Description}</p>
                        <div class="product-price">${item.Price}</div>
                        <button class="remove-btn" data-index="${index}">Remove</button>
                    </div>
                </div>
            </div>`;
        });
    }

    document.querySelector(".products").innerHTML = result;

    document.querySelectorAll(".remove-btn").forEach((btn) => {
        btn.addEventListener("click", (e) => {
            let index = e.target.dataset.index;
            cart.splice(index, 1);
            localStorage.setItem("cart", JSON.stringify(cart));
            loadCartData();
            updateCartCount();
        });
    });
}

updateCartCount();
loadCartData();





































































