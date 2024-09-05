// Array to store cart items
let cart = [];
let totalPrice = 0;

// Add item to cart
function addItem(category) {
    let selectElement = document.getElementById(`${category}-select`);
    let qtyElement = document.getElementById(`${category}-qty`);
    let [itemName, price] = selectElement.value.split(",");
    let quantity = parseInt(qtyElement.value);
    let itemPrice = parseFloat(price) * quantity;

    // Add to cart
    cart.push({ name: itemName, quantity: quantity, price: parseFloat(price) });
    totalPrice += itemPrice;

    // Update the table
    updateTable();
}

// Update order summary table
function updateTable() {
    let tableBody = document.getElementById("order-items");
    tableBody.innerHTML = "";  // Clear previous items

    cart.forEach(item => {
        let row = document.createElement("tr");

        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.quantity}</td>
            <td>$${item.price}</td>
            <td>$${(item.quantity * item.price).toFixed(2)}</td>
        `;
        tableBody.appendChild(row);
    });

    // Update total price
    document.getElementById("total-price").innerText = totalPrice.toFixed(2);
}

// Save cart to localStorage and navigate to checkout page
function buyNow() {
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("totalPrice", totalPrice.toFixed(2));
    window.location.href = "checkout.html";
}

// Save to favourites (localStorage)
function saveToFavourites() {
    localStorage.setItem("favouriteOrder", JSON.stringify(cart));
    alert("Favourites saved!");
}

// Apply favourites from localStorage
function applyFavourites() {
    let savedCart = JSON.parse(localStorage.getItem("favouriteOrder"));
    if (savedCart) {
        cart = savedCart;
        updateTable();
    } else {
        alert("No favourites saved!");
    }
}
